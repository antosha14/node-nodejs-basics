import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

const fileToCompress = './files/fileToCompress.txt';
const compressedFile = './files/archive.gz';

const compress = async () => {
  const gzip = createGzip();
  const source = createReadStream(fileToCompress);
  const destination = createWriteStream(compressedFile);
  source.pipe(gzip).pipe(destination);
};

await compress();
