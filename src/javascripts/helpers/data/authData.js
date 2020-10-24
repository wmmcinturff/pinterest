import firebase from 'firebase/app';
import 'firebase/auth';
import auth from '../../components/auth/auth';
import navBar from '../../components/navBar/navBar';
import userData from './userData';
import view from '../viewHelper';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((userObj) => {
    view.viewListener('#', userObj);
    if (userObj) {
      const currentUser = userData.setCurrentUser(userObj);
      const { name } = currentUser;
      navBar.pinNavbar(name);
      auth.logoutButton();
    } else {
      navBar.pinNavbar();
      auth.loginButton();
    }
  });
};
export default { checkLoginStatus };
