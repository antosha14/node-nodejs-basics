import { rm } from 'fs';

const fileToRemove = './files/fileToRemove.txt';
const errorMessage = 'FS operation failed';

const remove = async () => {
  rm(fileToRemove, err => {
    if (err) throw new Error(errorMessage);
  });
};

await remove();
