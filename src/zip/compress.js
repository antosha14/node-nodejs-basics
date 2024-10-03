import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const fileToCompress = join(__dirname, './files/fileToCompress.txt');
const compressedFile = join(__dirname, './files/archive.gz');

const compress = async () => {
  const gzip = createGzip();
  const source = createReadStream(fileToCompress);
  const destination = createWriteStream(compressedFile);
  source.pipe(gzip).pipe(destination);
};

await compress();
