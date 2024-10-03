import { cpus } from 'os';
import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const workerFile = join(__dirname, './worker.js');

const cpuCoreQuantity = cpus().length;
const results = [];

const performCalculations = async () => {
  const workers = [];
  for (let i = 0; i < cpuCoreQuantity; i++) {
    const worker = new Worker(workerFile, { workerData: i + 10 });
    workers.push(worker);

    worker.on('message', message => {
      results.push({ status: 'resolved', data: message });
    });

    worker.on('error', error => {
      results.push({ status: 'error', data: null });
    });
  }

  Promise.all(
    workers.map(
      worker =>
        new Promise(resolve => {
          worker.on('message', resolve);
          worker.on('error', resolve);
        })
    )
  ).then(() => {
    console.log(results);
  });
};

await performCalculations();
