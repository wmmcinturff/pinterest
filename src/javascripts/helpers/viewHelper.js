import boardView from '../components/views/boardView';
import pinsViews from '../components/views/pinsViews';

const viewHelper = (id, param) => {
  $('#app').html('');
  switch (id) {
    case 'boards-link':
      return boardView.viewBoards();
    case 'pins-link':
      return pinsViews.viewPins(param);
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = (view) => {
  viewHelper(view);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id);
  });

  $('body').on('click', '.card.cardBoard .see-board-pins', (e) => {
    const boardUid = e.currentTarget.id;
    viewHelper('pins-link', boardUid);
  });
};

export default { viewListener };
