import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const fileLoc = join(__dirname, './files/fileToRead.txt');

const read = async () => {
  createReadStream(fileLoc).pipe(process.stdout);
};

await read();
