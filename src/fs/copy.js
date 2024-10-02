import { copyFile, mkdir, readdir } from 'fs';

const dirName = './files';
const targetDir = './files_copy';
const errorMessage = 'FS operation failed';

const copy = async () => {
  readdir(dirName, (err, files) => {
    if (err && err.code == 'ENOENT') {
      throw new Error(errorMessage);
    }

    mkdir(targetDir, err => {
      if (err && err.code == 'EEXIST') {
        throw new Error(errorMessage);
      }

      for (let file of files) {
        copyFile(`${dirName}/${file}`, `${targetDir}/${file}`, err => {
          if (err) throw new Error(err);
        });
      }
    });
  });
};

await copy();
