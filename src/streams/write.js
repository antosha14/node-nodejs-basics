import { createWriteStream } from 'fs';

const fileLoc = './files/fileToWrite.txt';

const write = async () => {
  const writableStream = createWriteStream(fileLoc);
  process.stdin.on('data', data => writableStream.write(data));
};

await write();
