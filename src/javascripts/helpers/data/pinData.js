import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllPins = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json`).then((response) => {
    const thosePins = response.data;
    const pins = [];
    if (thosePins) {
      Object.keys(thosePins).forEach((pinId) => {
        pins.push(thosePins[pinId]);
      });
    }
    resolve(pins);
  }).catch((error) => reject(error));
});

const deletePin = (firebaseKey) => axios.delete(`${baseUrl}/pins/${firebaseKey}.json`);

const addPin = (data) => axios.post(`${baseUrl}/pins.json`, data)
  .then((response) => {
    const update = { firebaseKey: response.data.name };
    axios.patch(`${baseUrl}/pins/${response.data.name}.json`, update);
  }).catch((error) => console.warn(error));

const getBoardPins = (boardUid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="boardUid"&equalTo="${boardUid}"`)
    .then((response) => {
      const boardPins = response.data;
      const pins = [];
      if (boardPins) {
        Object.keys(boardPins).forEach((pinId) => {
          pins.push(boardPins[pinId]);
        });
      }
      resolve(pins);
    }).catch((error) => reject(error));
});

const getSinglePin = (cowFirebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins/${cowFirebaseKey}.json`).then((response) => {
    const datPin = response.data;
    resolve(datPin);
  }).catch((error) => reject(error));
});

const updatePin = (firebaseKey, pinObject) => axios.patch(`${baseUrl}/pins/${firebaseKey}.json`, pinObject);

export default {
  getAllPins,
  deletePin,
  addPin,
  getBoardPins,
  getSinglePin,
  updatePin
};
