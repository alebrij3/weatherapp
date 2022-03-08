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
          limit: 5,
        },
      });
      const res = await instance.get();
      return res.data.features.map((place) => ({
        id: place.id,
        name: place.place_name,
        lng: place.center[0],
        lat: place.center[0],
      }));
    } catch (e) {
      return [];
    }
  }
}

module.exports = Searches;
