const http = require('http');
const fs = require('fs');

async function main() {
  const targets = await new Promise((res, rej) => {
    http.get('http://127.0.0.1:9222/json', r => {
      let d = ''; r.on('data', c => d += c); r.on('end', () => res(JSON.parse(d)));
    }).on('error', rej);
  });
  const page = targets.find(t => t.type === 'page') || targets[0];
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  let id = 1;
  const send = (method, params = {}) => new Promise(res => {
    const msgId = id++;
    const handler = (e) => {
      const msg = JSON.parse(e.data);
      if (msg.id === msgId) {
        ws.removeEventListener('message', handler);
        res(msg.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id: msgId, method, params }));
  });
  await new Promise(r => ws.onopen = r);
  await send('Page.enable');
  await send('Runtime.enable');

  await send('Runtime.evaluate', {
    expression: 'document.getElementById("fresh-juice").scrollIntoView({ behavior: "instant", block: "start" })'
  });
  await new Promise(r => setTimeout(r, 1000));
  const shot1 = await send('Page.captureScreenshot', { format: 'png' });
  await new Promise(r => setTimeout(r, 2000));
  const shot2 = await send('Page.captureScreenshot', { format: 'png' });

  const b1 = Buffer.from(shot1.data, 'base64');
  const b2 = Buffer.from(shot2.data, 'base64');
  console.log('Frame 1 size:', b1.length, 'Frame 2 size:', b2.length);
  console.log('Frames are visually distinct (actively animating):', !b1.equals(b2));
  ws.close();
}
main().catch(console.error);
