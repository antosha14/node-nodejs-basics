import { readFile } from 'fs';

const targetFile = './files/fileToRead.txt';
const errorMessage = 'FS operation failed';

const read = async () => {
  readFile(targetFile, 'utf-8', (err, data) => {
    if (err) throw new Error(errorMessage);
    console.log(data);
  });
};

await read();
