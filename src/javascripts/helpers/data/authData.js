import firebase from 'firebase/app';
import 'firebase/auth';

// import auth from '../../components/auth/auth';
// import navBar from '../../components/navBar/navBar';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $('#auth').addClass('hide');
      $('#home').removeClass('hide');
      $('#navbar-logout-button').removeClass('hide');
    } else {
      $('#navbar-logout-button').removeClass('hide');
      $('#auth').removeClass('hide');
      $('#home').addClass('hide');
    }
  });
};
export default { checkLoginStatus };
