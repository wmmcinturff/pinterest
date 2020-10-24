import axios from 'axios';
import apiKeys from '../apiKeys.json';
import 'firebase/auth';
// import firebase from 'firebase/app';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllBoards = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/boards.json`)
    .then((response) => {
      const boardResponse = response.data;
      const boardObject = [];
      if (boardResponse) {
        Object.keys(boardResponse).forEach((boardId) => {
          boardObject.push(boardResponse[boardId]);
        });
      }
      resolve(boardObject);
    })
    .catch((error) => reject(error));
});

export default {
  getAllBoards,
};
