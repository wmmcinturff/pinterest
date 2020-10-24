import boardData from '../../helpers/data/boardData';
import board from '../cards/boardCard';

const viewAllBoards = (user) => {
  $('#app').html('');
  boardData.getAllBoards(user).then((response) => {
    if (response.length) {
      response.forEach((boardObj) => {
        $('#app').append(board.boardMaker(boardObj));
      });
    } else {
      $('#app').append('<h1>No Boards!</h1>');
    }
  });
};

export default { viewAllBoards };
