import 'firebase/auth';
import firebase from 'firebase/app';
import axios from 'axios';
import apiKeys from '../apiKeys.json';

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

const getUsersBoards = () => new Promise((resolve, reject) => {
  const user = firebase.auth().currentUser;
  axios
    .get(`${baseUrl}/boards.json?orderBy="useruid"&equalTo="${user.uid}"`)
    .then((response) => {
      const userBoards = response.data;
      const boards = [];
      if (userBoards) {
        Object.keys(userBoards).forEach((boardId) => {
          boards.push(userBoards[boardId]);
        });
      }

      resolve(boards);
    })
    .catch((error) => reject(error));
});
const getSingleBoard = (boardUid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json?orderBy="boardUid"&equalTo="${boardUid}"`)
    .then((response) => {
      const board = Object.values(response.data);
      const thisboard = board[0];
      resolve(thisboard);
    })
    .catch((error) => reject(error));
});

export default {
  getAllBoards,
  getSingleBoard,
  getUsersBoards
};
