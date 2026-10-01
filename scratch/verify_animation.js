const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

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
  const chromeProc = spawn(CHROME_PATH, [
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${USER_DATA_DIR}`,
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
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
  const send = (method, params = {}) => new Promise((resolve) => {
    const msgId = id++;
    const handler = (e) => {
      const msg = JSON.parse(e.data);
      if (msg.id === msgId) {
        ws.removeEventListener('message', handler);
        resolve(msg.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id: msgId, method, params }));
  });

  await new Promise(r => ws.onopen = r);
  await send('Page.enable');
  await send('Runtime.enable');

  await sleep(1500);
  const time1 = await send('Runtime.evaluate', {
    expression: 'document.querySelector("video") ? document.querySelector("video").currentTime : -1',
    returnByValue: true
  });

  await sleep(2000);
  const time2 = await send('Runtime.evaluate', {
    expression: 'document.querySelector("video") ? document.querySelector("video").currentTime : -1',
    returnByValue: true
  });

  console.log('Video currentTime at T+1.5s:', time1.result?.value);
  console.log('Video currentTime at T+3.5s:', time2.result?.value);
  console.log('Animation advancing delta (seconds):', time2.result?.value - time1.result?.value);

  ws.close();
  chromeProc.kill();
}

main().catch(console.error);
