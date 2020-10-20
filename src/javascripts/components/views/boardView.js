import boardData from '../../helpers/data/boardData';
import boardCard from '../cards/boardCard';

const viewAllBoards = (user) => {
  $('#app').html('');
  $('#app').append('<div id="board-btn-area" class="button-area"></div>');
  $('#app').append('<div id="board-area"></div>');

  boardData.getAllBoards().then((response) => {
    if (response.length) {
      $('#board-area').html('');
      response.forEach((boardObj) => {
        $('#board-area').append(boardCard.boardMaker(boardObj));
        if (user) {
          if ($('#board-btn-area').is(':empty')) {
            $('#board-btn-area').append(
              '<button type="button" class="btn btn-success" id="add-board-btn"><i class="fas fa-plus-circle"></i>Add a New Board</button>'
            );
          }

          $(`#${boardObj.uid}`).append(
            `<a href="#" class="card-link update-link" id=${boardObj.uid}>Update Plane</a>`
          );
        }
      });
    } else {
      $('#board-area').append('<h1>No Boards!</h1>');
    }
  });
};

export default { viewAllBoards };
