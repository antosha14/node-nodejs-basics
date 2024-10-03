import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const fileLoc = join(__dirname, './files/fileToWrite.txt');

const write = async () => {
  const writableStream = createWriteStream(fileLoc);
  process.stdin.on('data', data => writableStream.write(data));
};

await write();
