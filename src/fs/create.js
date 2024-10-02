import { open, writeFile } from 'node:fs';

const create = async () => {
  const filePath = './files/fresh.txt';
  const textContent = 'I am fresh and young';
  const errorMessage = 'FS operation failed';

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
