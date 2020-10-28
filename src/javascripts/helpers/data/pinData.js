import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getBoardPins = (pinThang) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="boardUid"&equalTo="${pinThang}"`)
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

const getAllPins = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json`)
    .then((response) => {
      const thePins = response.data;
      const pinsThings = [];
      if (thePins) {
        Object.keys(thePins).forEach((pinId) => {
          pinsThings.push(thePins[pinId]);
        });
      }
      resolve(pinsThings);
    })
    .catch((error) => reject(error));
});

const getSinglePin = (pinUid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins/${pinUid}.json`).then((response) => {
    const thisPin = response.data;
    resolve(thisPin);
  }).catch((error) => reject(error));
});

const deletePin = (pinUid) => axios.delete(`${baseUrl}/pin/${pinUid}.json`);

export default {
  getBoardPins,
  getAllPins,
  getSinglePin,
  deletePin
};
