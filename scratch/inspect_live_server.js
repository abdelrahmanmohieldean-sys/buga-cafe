const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const USER_DATA_DIR = 'C:\\Users\\Joe Store\\.gemini\\chrome-cdp-fresh';
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

  await new Promise(r => ws.onopen = r);
  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve } = pending.get(msg.id);
      pending.delete(msg.id);
      resolve(msg.result);
    }
  };

  await send('Page.enable');
  await send('Runtime.enable');

  await sleep(3000);

  // 1. Inspect DOM Elements
  const domInspection = await send('Runtime.evaluate', {
    expression: `(() => {
      const videos = Array.from(document.querySelectorAll('video')).map(v => ({
        src: v.src,
        currentSrc: v.currentSrc,
        paused: v.paused,
        currentTime: v.currentTime
      }));

      const sections = Array.from(document.querySelectorAll('section[id]')).map(s => {
        const ambient = s.querySelector('[class*="ambient-anim-"]');
        return {
          id: s.id,
          hasAmbient: !!ambient,
          ambientClass: ambient ? ambient.className : null,
          hasVideo: !!s.querySelector('video')
        };
      });

      return {
        totalVideos: videos.length,
        videos,
        totalCategorySections: sections.length,
        sections
      };
    })()`,
    returnByValue: true
  });

  console.log('--- LIVE DOM INSPECTION ---');
  console.log(JSON.stringify(domInspection.result?.value, null, 2));

  const artifactDir = 'C:\\Users\\Joe Store\\.gemini\\antigravity-ide\\brain\\ee1769b2-0d26-4c5f-a3bf-cb5d6388db21';

  // 2. Capture Hero view
  let shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'live_hero_view.png'), Buffer.from(shot.data, 'base64'));
  console.log('Saved live_hero_view.png');

  // 3. Scroll to and capture Hot Coffee
  await send('Runtime.evaluate', {
    expression: `(() => {
      const el = document.getElementById('hot-coffee');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    })()`
  });
  await sleep(1500);
  shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'live_hot_coffee_view.png'), Buffer.from(shot.data, 'base64'));
  console.log('Saved live_hot_coffee_view.png');

  // 4. Scroll to and capture Cold Coffee
  await send('Runtime.evaluate', {
    expression: `(() => {
      const el = document.getElementById('cold-coffee');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    })()`
  });
  await sleep(1500);
  shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'live_cold_coffee_view.png'), Buffer.from(shot.data, 'base64'));
  console.log('Saved live_cold_coffee_view.png');

  // 5. Scroll to and capture Hot Chocolate
  await send('Runtime.evaluate', {
    expression: `(() => {
      const el = document.getElementById('hot-chocolate');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    })()`
  });
  await sleep(1500);
  shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'live_hot_chocolate_view.png'), Buffer.from(shot.data, 'base64'));
  console.log('Saved live_hot_chocolate_view.png');

  // 6. Scroll to and capture Soda Drinks
  await send('Runtime.evaluate', {
    expression: `(() => {
      const el = document.getElementById('soda-drinks');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    })()`
  });
  await sleep(1500);
  shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'live_soda_drinks_view.png'), Buffer.from(shot.data, 'base64'));
  console.log('Saved live_soda_drinks_view.png');

  ws.close();
  chromeProc.kill();
}

main().catch(console.error);
