import { readdir } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const targetFolder = join(__dirname, './files');
const errorMessage = 'FS operation failed';

const list = async () => {
  readdir(targetFolder, (err, files) => {
    if (err) throw new Error(errorMessage);
    for (let fileName of files) {
      console.log(fileName);
    }
  });
};

await list();
