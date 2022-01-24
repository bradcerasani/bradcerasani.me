const { createWriteStream } = require('fs');
const { pipeline } = require('stream');
const { promisify } = require('util');
const fetch = require('node-fetch');

module.exports = async (url, filename, destination) => {
  const streamPipeline = promisify(pipeline);
  const response = await fetch(url);

  if (!response.ok)
    throw new Error(`unexpected response ${response.statusText}`);

  await streamPipeline(
    response.body,
    createWriteStream(destination + filename)
  );
};
