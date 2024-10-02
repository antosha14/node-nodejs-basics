import { Transform } from 'stream';

const transform = async () => {
  const reverseTransformer = Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split('').reverse().join(''));
    },
  });
  process.stdin.pipe(reverseTransformer).pipe(process.stdout);
};

await transform();
