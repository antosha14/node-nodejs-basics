import { fork } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const scriptLocation = join(__dirname, './files/script.js');

const spawnChildProcess = async args => {
  fork(scriptLocation, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess();
