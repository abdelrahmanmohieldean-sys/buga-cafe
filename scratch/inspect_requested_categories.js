const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const USER_DATA_DIR = 'C:\\Users\\Joe Store\\.gemini\\chrome-cdp-verify-final';
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
  console.log('Launching Chrome to inspect requested 4 categories...');
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

  await sleep(2500);

  const artifactDir = 'C:\\Users\\Joe Store\\.gemini\\antigravity-ide\\brain\\ee1769b2-0d26-4c5f-a3bf-cb5d6388db21';

  async function captureCategory(id, filename) {
    console.log(`Scrolling to category #${id}...`);
    await send('Runtime.evaluate', {
      expression: `(() => {
        const el = document.getElementById('${id}');
        if (el) {
          el.scrollIntoView({ behavior: 'instant', block: 'start' });
        }
      })()`
    });
    await sleep(1500);
    const shot = await send('Page.captureScreenshot', { format: 'png' });
    const out = path.join(artifactDir, filename);
    fs.writeFileSync(out, Buffer.from(shot.data, 'base64'));
    console.log(`Saved ${filename}`);
  }

  // 1. Hot Coffee
  await captureCategory('hot-coffee', 'verify_hot_coffee.png');

  // 2. Cold Coffee
  await captureCategory('cold-coffee', 'verify_cold_coffee.png');

  // 3. Milkshake
  await captureCategory('milkshake', 'verify_milkshake.png');

  // 4. Fresh Juice
  await captureCategory('fresh-juice', 'verify_fresh_juice.png');

  ws.close();
  chromeProc.kill();
  console.log('All 4 categories captured successfully.');
}

main().catch(console.error);
