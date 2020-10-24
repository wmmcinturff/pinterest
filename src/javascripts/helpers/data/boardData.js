import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllBoards = (userId) => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/boards.json?orderBy="useruid"&equalTo="${userId}"`)
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
  getAllBoards
};
