const { readInput, inquirerMenu } = require('./helpers/inquirer');

const main = async () => {
  let opt = '';
  do {
    opt = await inquirerMenu();
  } while (opt !== 0);
};

main();
