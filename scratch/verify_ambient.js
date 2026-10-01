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
      res.on('end', () => resolve(JSON.parse(data)));
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
    await sleep(400);
    try {
      targets = await getJson(`http://127.0.0.1:${PORT}/json`);
      if (targets && targets.length > 0) break;
    } catch (e) {}
  }

  const pageTarget = targets.find(t => t.type === 'page') || targets[0];
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

  const consoleErrors = [];

  await new Promise(r => ws.onopen = r);
  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve } = pending.get(msg.id);
      pending.delete(msg.id);
      resolve(msg.result);
    } else if (msg.method === 'Runtime.consoleAPICalled' && msg.params.type === 'error') {
      consoleErrors.push(msg.params);
    }
  };

  await send('Page.enable');
  await send('Runtime.enable');
  await send('Network.enable');

  await sleep(2500);

  // 1. Check for horizontal overflow
  const overflowCheck = await send('Runtime.evaluate', {
    expression: `(() => {
      return {
        windowWidth: window.innerWidth,
        scrollWidth: document.documentElement.scrollWidth,
        hasOverflow: document.documentElement.scrollWidth > window.innerWidth
      };
    })()`,
    returnByValue: true
  });
  console.log('Horizontal Overflow Check:', overflowCheck.result?.value);

  // 2. Capture Menu / Hot Coffee section
  await send('Runtime.evaluate', {
    expression: `(() => {
      const el = document.getElementById('hot-coffee');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    })()`
  });
  await sleep(1200);

  let shot = await send('Page.captureScreenshot', { format: 'png' });
  const artifactDir = 'C:\\Users\\Joe Store\\.gemini\\antigravity-ide\\brain\\ee1769b2-0d26-4c5f-a3bf-cb5d6388db21';
  fs.writeFileSync(path.join(artifactDir, 'ambient_hot_coffee.png'), Buffer.from(shot.data, 'base64'));
  console.log('Saved ambient_hot_coffee.png');

  // 3. Scroll to Fresh Juice section
  await send('Runtime.evaluate', {
    expression: `(() => {
      const el = document.getElementById('fresh-juice');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    })()`
  });
  await sleep(1200);

  shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'ambient_fresh_juice.png'), Buffer.from(shot.data, 'base64'));
  console.log('Saved ambient_fresh_juice.png');

  // 4. Scroll to Soda Specials & Mojitos section
  await send('Runtime.evaluate', {
    expression: `(() => {
      const el = document.getElementById('soda-drinks');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    })()`
  });
  await sleep(1200);

  shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'ambient_soda_drinks.png'), Buffer.from(shot.data, 'base64'));
  console.log('Saved ambient_soda_drinks.png');

  // 5. Test Mobile Viewport (390x844)
  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true
  });
  await sleep(1000);

  await send('Runtime.evaluate', {
    expression: `(() => {
      const el = document.getElementById('milkshake');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    })()`
  });
  await sleep(1200);

  shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'ambient_milkshake_mobile.png'), Buffer.from(shot.data, 'base64'));
  console.log('Saved ambient_milkshake_mobile.png');

  // 6. Check Active vs Paused animations in DOM
  const animStatus = await send('Runtime.evaluate', {
    expression: `(() => {
      const active = document.querySelectorAll('.ambient-anim-active').length;
      const paused = document.querySelectorAll('.ambient-anim-paused').length;
      return { activeCount: active, pausedCount: paused };
    })()`,
    returnByValue: true
  });
  console.log('Animation Visibility State (IntersectionObserver):', animStatus.result?.value);
  console.log('Console Errors caught:', consoleErrors.length);

  ws.close();
  chromeProc.kill();
}

main().catch(console.error);
