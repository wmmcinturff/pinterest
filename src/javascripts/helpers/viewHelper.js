import boardView from '../components/views/boardView';

const viewHelper = (id, user) => {
  switch (id) {
    case 'boards-link':
      return boardView.viewAllBoards(user);
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = (view, user) => {
  viewHelper(view, user);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id, user);
  });
};

export default { viewListener };
