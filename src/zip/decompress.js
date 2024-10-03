import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const fileToCompress = join(__dirname, './files/fileToCompress.txt');
const compressedFile = join(__dirname, './files/archive.gz');

const decompress = async () => {
  const unzip = createUnzip();
  const source = createReadStream(compressedFile);
  const destination = createWriteStream(fileToCompress);
  source.pipe(unzip).pipe(destination);
};

await decompress();
