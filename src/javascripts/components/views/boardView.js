import boardData from '../../helpers/data/boardData';
import board from '../cards/boardCard';

const viewBoards = () => {
  $('#app').html('<h1>Boards</h1>');
  boardData.getAllBoards().then((response) => {
    if (response.length) {
      response.forEach((boardObj) => {
        $('#app').append(board.boardMaker(boardObj));
      });
    } else {
      $('#app').append('<h2>No Boards!</h2>');
    }
  });
};

export default { viewBoards };
