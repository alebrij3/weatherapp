const { readInput, inquirerMenu, pause } = require('./helpers/inquirer');
const Searches = require('./models/searches');
require('colors');

const main = async () => {
  let searches = new Searches();
  let opt = '';
  do {
    opt = await inquirerMenu();
    switch (opt) {
      case 1:
        const userQuery = await readInput('Lugar:');
        await searches.place(userQuery);
        console.log('\nInformación del lugar\n'.cyan);
        console.log('Ciudad');
        console.log('lat:');
        console.log('lng');
        console.log('temp');
        console.log('    min');
        console.log('    max');
        break;
    }
    await pause();
    //console.clear();
  } while (opt !== 0);
};

main();
