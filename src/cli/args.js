const parseArgs = () => {
  const argumentsArray = process.argv.reduce((accumulator, arg, index, array) => {
    if (arg.startsWith('--')) {
      const argValue = `${arg.slice(2)} is ${array[index + 1]}`;
      return [...accumulator, argValue];
    }
    return accumulator;
  }, []);

  console.log(argumentsArray.join(', '));
};

parseArgs();
