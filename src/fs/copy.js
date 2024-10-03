import { copyFile, mkdir, readdir } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const folderToCopy = join(__dirname, './files');
const targetDir = join(__dirname, './files_copy');
const errorMessage = 'FS operation failed';

const copy = async () => {
  readdir(folderToCopy, (err, files) => {
    if (err && err.code == 'ENOENT') {
      throw new Error(errorMessage);
    }

    mkdir(targetDir, err => {
      if (err && err.code == 'EEXIST') {
        throw new Error(errorMessage);
      }

      for (let file of files) {
        copyFile(`${folderToCopy}/${file}`, `${targetDir}/${file}`, err => {
          if (err) throw new Error(err);
        });
      }
    });
  });
};

await copy();
