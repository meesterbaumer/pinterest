import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPinsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const demPins = response.data;
      console.log('pinsData section', response);
      const pins = [];
      Object.keys(demPins).forEach((fbId) => {
        demPins[fbId].id = fbId;
        pins.push(demPins[fbId]);
      });
      resolve(pins); // Hard code to only return first machine that comes back
    })
    .catch((error) => reject(error));
});

export default { getPinsByUid };
