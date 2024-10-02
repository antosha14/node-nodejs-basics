import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';

const fileToCompress = './files/fileToCompress.txt';
const compressedFile = './files/archive.gz';

const decompress = async () => {
  const unzip = createUnzip();
  const source = createReadStream(compressedFile);
  const destination = createWriteStream(fileToCompress);
  source.pipe(unzip).pipe(destination);
};

await decompress();
