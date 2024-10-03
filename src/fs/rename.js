import { rename as renameNode, access, constants } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const fileToRename = join(__dirname, './files/wrongFilename.txt');
const targetPath = join(__dirname, './files/properFilename.md');
const errorMessage = 'FS operation failed';

const rename = async () => {
  access(targetPath, constants.F_OK, err => {
    if (!err) {
      throw new Error(errorMessage);
    }

    renameNode(fileToRename, targetPath, err => {
      if (err) throw new Error(errorMessage);
    });
  });
};

await rename();
