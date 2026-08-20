import sharp from "sharp";

async function extract(input, output, resize) {
  const { data, info } = await sharp(input).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const pixels = info.width * info.height;
  const alpha = Buffer.alloc(pixels, 255);
  const visited = new Uint8Array(pixels);
  const queue = new Uint32Array(pixels);
  let head = 0;
  let tail = 0;

  const isBackground = (index) => {
    const offset = index * info.channels;
    const red = data[offset];
    const green = data[offset + 1];
    const blue = data[offset + 2];
    const high = Math.max(red, green, blue);
    const low = Math.min(red, green, blue);
    return low > 185 && high - low < 34;
  };

  const enqueue = (index) => {
    if (!visited[index] && isBackground(index)) {
      visited[index] = 1;
      queue[tail++] = index;
    }
  };

  for (let x = 0; x < info.width; x += 1) {
    enqueue(x);
    enqueue((info.height - 1) * info.width + x);
  }
  for (let y = 1; y < info.height - 1; y += 1) {
    enqueue(y * info.width);
    enqueue(y * info.width + info.width - 1);
  }

  while (head < tail) {
    const index = queue[head++];
    alpha[index] = 0;
    const x = index % info.width;
    const y = Math.floor(index / info.width);
    if (x > 0) enqueue(index - 1);
    if (x + 1 < info.width) enqueue(index + 1);
    if (y > 0) enqueue(index - info.width);
    if (y + 1 < info.height) enqueue(index + info.width);
  }

  let image = sharp(data, { raw: info }).joinChannel(alpha, {
    raw: { width: info.width, height: info.height, channels: 1 },
  });
  if (resize) image = image.resize(resize, resize, { fit: "contain", kernel: "nearest" });
  await image.png().toFile(output);
}

const [input, output, size] = process.argv.slice(2);
await extract(input, output, size ? Number(size) : undefined);
