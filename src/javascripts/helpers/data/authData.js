import firebase from 'firebase/app';
import 'firebase/auth';

import auth from '../../components/auth/auth';
import navBar from '../../components/navBar/navBar';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // const currentUser = userData.setCurrentUser(user);
      navBar.pinNavbar();
      // viewHelper.viewListener('cows-link');
    } else {
      auth.loginButton();
      $('#nav').html('');
    }
  });
};
export default { checkLoginStatus };
