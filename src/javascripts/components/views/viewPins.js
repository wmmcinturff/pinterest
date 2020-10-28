import card from '../cards/pinCards';
import pinsView from '../../helpers/data/mergeData';

const viewPins = (boardUid) => {
  $('#app').html('');
  pinsView.getSingleBoardView(boardUid)
    .then((response) => {
      const { board, pins } = response;
      $('#app').html(`<div id="single-view">
                     <h1>${board.name} Pins</h1>
                     </div>`);
      if (pins.length) {
        pins.forEach((pin) => {
          $('#app').append(card.buildPinCard(pin));
        });
      } else {
        $('#app').append('<h1>NO PINS!</h1>');
      }
    });
};

export default { viewPins };

// const renderBoardPins = (boardId) => {
// $('#app').html('');
// pinData.getBoardPins(boardId).then((response) => {
// if (response.length) {
//  response.forEach((item) => {
// $('#app').append(card.buildPinCard(item));
// });
// } else {
// $('#app').append('<h2>No pins!</h2>');
//  }
// });
// };//
