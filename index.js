const {
  readInput,
  inquirerMenu,
  listPlaces,
  pause,
} = require('./helpers/inquirer');
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
        let places = await searches.place(userQuery);
        const [place, lng, lat] = await listPlaces(places);
        const info = await searches.weather(lat, lng);

        console.log('\nInformación del lugar\n'.cyan);
        console.log(`Lugar: ${place}`);
        console.log(`lat: ${lat}`);
        console.log(`lng: ${lng}`);
        console.log(`temp: ${info.main.temp}`);
        console.log(`    min: ${info.main.temp_min}`);
        console.log(`    max: ${info.main.temp_max}`);
        break;
    }
    await pause();
    //console.clear();
  } while (opt !== 0);
};

main();
