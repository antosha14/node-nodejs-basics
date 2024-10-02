const parseEnv = () => {
  const envVariablesArray = Object.entries(process.env).reduce((accumulator, [key, value]) => {
    if (key.startsWith('RSS_')) {
      const envVariable = `${key}=${value}`;
      return [...accumulator, envVariable];
    }
    return accumulator;
  }, []);

  console.log(envVariablesArray.join('; '));
};

parseEnv();
