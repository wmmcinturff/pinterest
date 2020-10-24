import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllBoards = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/board.json`)
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

const addBoard = (data) => axios
  .post(`${baseUrl}/boards.json`, data)
  .then((response) => {
    const update = { uid: response.data.name };
    axios.patch(`${baseUrl}/boards/${response.data.name}.json`, update);
  })
  .catch((error) => console.warn(error));

export default {
  getAllBoards, addBoard
};
