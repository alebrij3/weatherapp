const axios = require('axios');
require('dotenv').config();

class Searches {
  history = ['Tegucigalpa', 'Madrid'];
  constructor() {
    //todo: read database if it exists
  }
  async place(place = '') {
    try {
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
        params: {
          access_token: process.env.MAPBOX,
          limit: 3,
        },
      });
      const res = await instance.get();
      console.log('this is the response', res.data);
      return [];
    } catch (e) {
      return [];
    }
  }
}

module.exports = Searches;
