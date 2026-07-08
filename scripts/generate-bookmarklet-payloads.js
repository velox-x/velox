const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const root = path.join(__dirname, '..');
const payloadDir = path.join(root, 'site', 'api', 'payload');
const key = process.env.BOOKMARKLET_PAYLOAD_KEY || 'LeviathanSecret123!@#';
const types = ['axiom', 'padre'];

function toBase64Url(buffer) {
  return buffer.toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

function encryptPayload(source, key) {
  const keyBytes = Buffer.from(key, 'utf8');
  const nonce = crypto.randomBytes(16);
  const sourceBytes = Buffer.from(source, 'utf8');
  const cipher = Buffer.alloc(sourceBytes.length);

  let counter = 0;
  for (let offset = 0; offset < sourceBytes.length; offset += 32) {
    const blockIndex = Buffer.alloc(4);
    blockIndex.writeUInt32BE(counter++, 0);
    const digest = crypto.createHash('sha256')
      .update(Buffer.concat([keyBytes, nonce, blockIndex]))
      .digest();

    for (let j = 0; j < digest.length && offset + j < sourceBytes.length; j++) {
      cipher[offset + j] = sourceBytes[offset + j] ^ digest[j];
    }
  }

  const hash = crypto.createHash('sha256').update(cipher).digest();
  return {
    n: toBase64Url(nonce),
    c: toBase64Url(cipher),
    h: toBase64Url(hash),
  };
}

function writePayload(type) {
  const sourcePath = path.join(root, type, type, 'loader.js');
  if (!fs.existsSync(sourcePath)) {
    throw new Error(`Missing loader source for ${type}: ${sourcePath}`);
  }
  const source = fs.readFileSync(sourcePath, 'utf8');
  const payload = encryptPayload(source, key);
  const outputPath = path.join(payloadDir, `${type}.json`);
  fs.writeFileSync(outputPath, JSON.stringify(payload, null, 2), 'utf8');
  console.log(`Generated payload for ${type}: ${outputPath}`);
}

fs.mkdirSync(payloadDir, { recursive: true });
for (const type of types) {
  writePayload(type);
}
console.log('Bookmarklet payload generation complete.');
