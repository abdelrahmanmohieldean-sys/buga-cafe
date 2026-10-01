const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const USER_DATA_DIR = 'C:\\Users\\Joe Store\\.gemini\\chrome-cdp-debug';
const PORT = 9222;

async function sleep(ms) {
  return new Promise(res => setTimeout(res, ms));
}

async function getJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function main() {
  console.log('1. Launching Chrome with CDP on port', PORT);
  const chromeProc = spawn(CHROME_PATH, [
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${USER_DATA_DIR}`,
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--window-size=1280,900',
    'http://localhost:3000'
  ], { stdio: 'ignore' });

  let targets = null;
  for (let i = 0; i < 30; i++) {
    await sleep(500);
    try {
      targets = await getJson(`http://127.0.0.1:${PORT}/json`);
      if (targets && targets.length > 0) break;
    } catch (e) {
      // waiting for chrome to listen
    }
  }

  if (!targets || targets.length === 0) {
    console.error('Failed to get targets from Chrome CDP');
    chromeProc.kill();
    return;
  }

  const pageTarget = targets.find(t => t.type === 'page') || targets[0];
  console.log('Found page target:', pageTarget.url, pageTarget.webSocketDebuggerUrl);

  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
  let id = 1;
  const pending = new Map();

  function send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const msgId = id++;
      pending.set(msgId, { resolve, reject });
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  }

  const consoleLogs = [];
  const networkRequests = [];

  await new Promise((resolve) => {
    ws.onopen = resolve;
  });

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve } = pending.get(msg.id);
      pending.delete(msg.id);
      resolve(msg.result);
    } else if (msg.method === 'Console.messageAdded' || msg.method === 'Runtime.consoleAPICalled') {
      consoleLogs.push(msg.params);
    } else if (msg.method === 'Network.responseReceived') {
      networkRequests.push(msg.params);
    }
  };

  await send('Page.enable');
  await send('Runtime.enable');
  await send('Network.enable');

  console.log('2. Waiting for page load and video playback check...');
  await sleep(3000);

  // Check video element in DOM
  const evalVideoScript = `
    (() => {
      const video = document.querySelector('video');
      if (!video) {
        return { exists: false };
      }
      return {
        exists: true,
        src: video.src,
        currentSrc: video.currentSrc,
        readyState: video.readyState,
        paused: video.paused,
        currentTime: video.currentTime,
        duration: video.duration,
        error: video.error ? { code: video.error.code, message: video.error.message } : null,
        networkState: video.networkState,
        muted: video.muted,
        defaultMuted: video.defaultMuted,
        autoplay: video.autoplay,
        loop: video.loop,
        clientWidth: video.clientWidth,
        clientHeight: video.clientHeight,
        offsetWidth: video.offsetWidth,
        offsetHeight: video.offsetHeight,
        computedStyle: {
          display: getComputedStyle(video).display,
          visibility: getComputedStyle(video).visibility,
          opacity: getComputedStyle(video).opacity,
          zIndex: getComputedStyle(video).zIndex,
          position: getComputedStyle(video).position,
          width: getComputedStyle(video).width,
          height: getComputedStyle(video).height
        }
      };
    })()
  `;

  const videoEvalRes = await send('Runtime.evaluate', {
    expression: evalVideoScript,
    returnByValue: true
  });
  console.log('--- VIDEO DOM INSPECTION ---');
  console.log(JSON.stringify(videoEvalRes.result?.value, null, 2));

  // Manually call video.play() and capture result
  const playScript = `
    (async () => {
      const video = document.querySelector('video');
      if (!video) return { error: 'No video element found' };
      try {
        await video.play();
        return { success: true, currentTime: video.currentTime, paused: video.paused };
      } catch (err) {
        return { error: err.name + ': ' + err.message };
      }
    })()
  `;

  const playRes = await send('Runtime.evaluate', {
    expression: playScript,
    awaitPromise: true,
    returnByValue: true
  });
  console.log('--- MANUAL VIDEO.PLAY() CALL ---');
  console.log(JSON.stringify(playRes.result?.value, null, 2));

  // Check network requests for hero-loop.mp4
  console.log('--- NETWORK REQUESTS ---');
  const videoReqs = networkRequests.filter(r => r.response?.url?.includes('hero-loop.mp4'));
  console.log('Total responses intercepted:', networkRequests.length);
  console.log('Hero video requests:', JSON.stringify(videoReqs, null, 2));

  // Capture screenshot
  const screenshotRes = await send('Page.captureScreenshot', { format: 'png' });
  if (screenshotRes && screenshotRes.data) {
    const outPath = path.resolve('public', 'hero_actual_rendered.png');
    fs.writeFileSync(outPath, Buffer.from(screenshotRes.data, 'base64'));
    console.log('Screenshot saved successfully to:', outPath);
  }

  ws.close();
  chromeProc.kill();
}

main().catch(err => {
  console.error('Error running CDP script:', err);
  process.exit(1);
});
