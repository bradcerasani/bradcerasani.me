import { createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
import fetch from 'node-fetch';

async function download(url, filename, destination) {
  const streamPipeline = promisify(pipeline);
  const response = await fetch(url);

  if (!response.ok)
    throw new Error(`unexpected response ${response.statusText}`);

  await streamPipeline(
    response.body,
    createWriteStream(destination + filename)
  );
}

export default download;
