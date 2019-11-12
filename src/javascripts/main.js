import 'bootstrap';
import firebase from 'firebase';
import apiKeys from './helpers/apiKeys.json';

import auth from './components/Auth/auth';
import authData from './helpers/data/authData';
import myNavbar from './components/MyNavbar/myNavbar';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStatus();
  auth.loginButton();
  myNavbar.logoutEvent();
};

init();
