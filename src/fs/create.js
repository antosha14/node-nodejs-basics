import { open, writeFile } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, './files/fresh.txt');
const textContent = 'I am fresh and young';
const errorMessage = 'FS operation failed';

const create = async () => {
  open(filePath, 'wx', (err, fd) => {
    if (err) {
      if (err.code === 'EEXIST') {
        throw new Error(errorMessage);
      }
      throw err;
    }

    writeFile(fd, textContent, err => {
      if (err) throw err;
    });
  });
};

await create();
