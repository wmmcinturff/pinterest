import firebase from 'firebase/app';
import 'firebase/auth';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const loginButton = () => {
  const domString = `<div id="auth">
    <span style="font-size: 5em; color: Tomato;"><i class="fab fa-pinterest"></i></span>
    <h4>Welcome to Pinterest!</h4>
    <button id="google-auth" class="btn btn-primary btn-lg">
      <i class="fab fa-google"></i></i>Google Login
    </button>
  </div>`;

  $('#app').html(domString);
  $('#google-auth').on('click', signMeIn);
};

const logoutButton = () => {
  $('#navbar-logout-button').on('click', (e) => {
    e.preventDefault();
    window.sessionStorage.removeItem('ua');
    firebase.auth().signOut();
    window.location.href = '/';
  });
};

export default { loginButton, logoutButton };
