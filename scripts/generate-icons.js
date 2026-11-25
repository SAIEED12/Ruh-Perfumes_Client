// Generates the app icons without external image tooling or native binaries.
// Run: node scripts/generate-icons.js
const fs = require("node:fs");
const path = require("node:path");
const zlib = require("node:zlib");

const SIZE = 512;
const OUT_DIR = path.join(__dirname, "..", "app");

const crcTable = (() => {
  const table = new Int32Array(256);
  for (let n = 0; n < 256; n += 1) {
    let c = n;
    for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c;
  }
  return table;
})();

const crc32 = (buffer) => {
  let c = 0xffffffff;
  for (const byte of buffer) c = crcTable[(c ^ byte) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
};

const chunk = (type, data) => {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);
  const body = Buffer.concat([Buffer.from(type, "ascii"), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body), 0);
  return Buffer.concat([length, body, crc]);
};

const mix = (a, b, t) => Math.round(a + (b - a) * Math.max(0, Math.min(1, t)));

const pixel = (x, y) => {
  const nx = (x - SIZE / 2) / (SIZE / 2);
  const ny = (y - SIZE / 2) / (SIZE / 2);
  const r = Math.hypot(nx, ny);
  const angle = Math.atan2(ny, nx);

  // Bordeaux vignette.
  const vignette = Math.max(0, 1 - r * 0.55);
  let red = mix(26, 74, vignette);
  let green = mix(10, 18, vignette);
  let blue = mix(20, 36, vignette);

  // Rose-gold rosette with eight soft petals.
  const petalRadius = 0.66 + 0.06 * Math.cos(8 * angle);
  const outer = r < petalRadius;
  const inner = r < 0.52;
  const diamond = Math.abs(nx) + Math.abs(ny) < 0.17;
  const center = r < 0.1;
  if (outer || inner || diamond || center) {
    const sheen = 0.72 + 0.28 * Math.max(0, Math.cos(angle - 0.6));
    red = mix(red, 201, sheen);
    green = mix(green, 164, sheen);
    blue = mix(blue, 106, sheen);
    if (inner) {
      red = mix(red, 155, 0.45);
      green = mix(green, 64, 0.45);
      blue = mix(blue, 86, 0.45);
    }
    if (diamond || center) {
      red = 251;
      green = 231;
      blue = 226;
    }
  }
  return [red, green, blue, 255];
};

const makePng = () => {
  const raw = Buffer.alloc(SIZE * (SIZE * 4 + 1));
  let offset = 0;
  for (let y = 0; y < SIZE; y += 1) {
    raw[offset] = 0; // no filter
    offset += 1;
    for (let x = 0; x < SIZE; x += 1) {
      const [r, g, b, a] = pixel(x, y);
      raw[offset++] = r;
      raw[offset++] = g;
      raw[offset++] = b;
      raw[offset++] = a;
    }
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(SIZE, 0);
  ihdr.writeUInt32BE(SIZE, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // RGBA
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", zlib.deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
};

const png = makePng();
fs.writeFileSync(path.join(OUT_DIR, "icon.png"), png);
fs.writeFileSync(path.join(OUT_DIR, "apple-icon.png"), png);
console.log("Wrote app/icon.png and app/apple-icon.png");
