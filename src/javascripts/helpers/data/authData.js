import firebase from 'firebase/app';
import 'firebase/auth';
import auth from '../../components/auth/auth';
import navBar from '../../components/navBar/navBar';
import userData from './userData';
import view from '../viewHelper';

// GOT LOGIN/LOGOUT EVENTS RENDERING AS DESIRED //
const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((userObj) => {
    if (userObj) {
      $('#auth').html('');
      const currentUser = userData.setCurrentUser(userObj);
      const { name } = currentUser;
      view.viewListener('boards-link');
      navBar.pinNavbar(name);
    } else {
      auth.loginButton();
      $('#nav').html('');
    }
  });
};
export default { checkLoginStatus };
