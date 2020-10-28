import boardView from '../components/views/boardView';
import viewPins from '../components/views/viewPins';

const viewHelper = (id, arg) => {
  $('#app').html('');
  switch (id) {
    case 'boards-link':
      return boardView.viewBoards();
    case 'pins-link':
      return viewPins.viewPins(arg);
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = (view) => {
  viewHelper(view);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id);
  });

  $('body').on('click', '.card.boardCards .see-board-pins', (e) => {
    const boardId = e.currentTarget.id;
    viewHelper('pins-link', boardId);
  });
};

export default { viewListener };
