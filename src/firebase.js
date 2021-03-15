import * as firebase from "firebase";
import api from "./api";
import { appActions } from "./data/appActions";
import { getPlayerData } from "./data/playerEffects";

export const initFirebase = () => {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  };
  // Initialize Firebase
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
};

export const listenAuthChanged = (handleUser, handleAnonymous) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is authenticated
      handleUser(user);
    } else {
      // Anonymous
      handleAnonymous();
    }
  });
};

export const signOutFromAuth = () => {
  firebase.auth().signOut();
};

export const signin = (email, password, alert, dispatch) => {
  dispatch({ type: appActions.APP_IS_LOADING });
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCreds) => {
      console.log(userCreds.user.uid);
    })
    .catch((err) => {
      console.log(err);
      alert("Error", err.message);
    });
};

export const signup = (
  email,
  password,
  playerName,
  alert,
  dispatch
) => {
  dispatch({ type: appActions.APP_IS_LOADING });
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCreds) => {
      // Create the player in firestore
      api.createPlayer(userCreds.user.uid, playerName).then(() => {
        console.log(userCreds.user.uid);
        alert("Success", "Your account was successfuly created!");
        dispatch(getPlayerData());
      });
    })
    .catch((err) => {
      console.log(err);
      alert("Error", err.message);
    });
};