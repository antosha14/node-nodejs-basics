import { rm } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const fileToRemove = join(__dirname, './files/fileToRemove.txt');
const errorMessage = 'FS operation failed';

const remove = async () => {
  rm(fileToRemove, err => {
    if (err) throw new Error(errorMessage);
  });
};

await remove();
