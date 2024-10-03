import { createHash } from 'crypto';
import { readFile } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToFile = join(__dirname, './files/fileToCalculateHashFor.txt');

const calculateHash = async () => {
  try {
    readFile(
      pathToFile,
      {
        encoding: 'utf-8',
      },
      (err, data) => {
        if (err) throw err;
        console.log(createHash('sha256').update(data).digest('hex'));
      }
    );
  } catch (err) {}
};

await calculateHash();
