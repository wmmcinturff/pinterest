import boardView from '../components/views/boardView';
import homePage from '../components/views/homePage';

const viewHelper = (id, user) => {
  switch (id) {
    case '#':
    case 'home':
      return homePage.viewHomepage();
    case 'boards-link':
      return boardView.viewAllBoards(user);
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
