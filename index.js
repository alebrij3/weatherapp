const { readInput, inquirerMenu, pause } = require('./helpers/inquirer');

const main = async () => {
  let opt = '';
  do {
    opt = await inquirerMenu();
  } while (opt !== 0);

  await pause();
};

main();
