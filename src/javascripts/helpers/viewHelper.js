import board from '../components/views/boardView';

const viewHelper = (id, user) => {
  switch (id) {
    case 'boards-link':
      return board.viewAllBoards(user);
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = (view) => {
  viewHelper(view);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id);
  });
};

export default { viewListener };
