import { readdir } from 'fs';

const targetFolder = './files';
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
