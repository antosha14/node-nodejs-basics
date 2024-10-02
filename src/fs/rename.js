import { rename as renameNode, access, constants } from 'fs';

const fileToRename = './files/wrongFilename.txt';
const targetPath = './files/properFilename.md';
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
