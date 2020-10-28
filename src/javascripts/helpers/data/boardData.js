import 'firebase/auth';
import firebase from 'firebase/app';
import axios from 'axios';
import apiKeys from '../apiKeys.json';
import pinData from './pinData';

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
const getSingleBoard = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json?orderBy="useruid"&equalTo="${firebaseKey}"`)
    .then((response) => {
      const thisBoard = Object.values(response.data);
      resolve(thisBoard);
    })
    .catch((error) => reject(error));
});

const deleteBoard = (boardId) => {
  pinData.getBoardPins(boardId)
    .then((response) => {
      response.forEach((item) => {
        pinData.deletePin(item.firebaseKey);
      });
    })
    .then(() => {
      getSingleBoard(boardId)
        .then((response) => {
          axios.delete(`${baseUrl}/boards/${response.firebaseKey}.json`);
        });
    });
};

export default {
  getAllBoards,
  getSingleBoard,
  getUsersBoards,
  deleteBoard
};
