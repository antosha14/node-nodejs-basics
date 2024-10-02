import { createReadStream } from 'fs';

const fileLoc = './files/fileToRead.txt';

const read = async () => {
  createReadStream(fileLoc).pipe(process.stdout);
};

await read();
