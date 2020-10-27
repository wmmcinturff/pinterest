import boardData from './boardData';
import pinData from './pinData';
// REFERENCE: FB COWS2.0 //
const getSingleBoardView = (boardId) => new Promise((resolve, reject) => {
  boardData.getSingleBoard(boardId)
    .then((boardResponse) => {
      pinData.getboardPins(boardResponse.firebaseKey)
        .then((pinResponse) => {
          const mergedObject = { board: boardResponse, pins: pinResponse };
          resolve(mergedObject);
        });
    }).catch((error) => reject(error));
});

export default { getSingleBoardView };