import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
/*
export const doCreateUserWithEmailandPassword = (email, password) => auth.createUserWithEmailandPassword(email, password);
export const doSignInWithEmailandPassword = (email, password) => auth.signInWithEmailandPassword(email, password);
export const doPasswordReset = (email) => auth.sendPasswordReset(email);
export const doPasswordUpdate = (password) => auth.currentUser.updatePassword(password);
*/

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const emailAuthProvider = new firebase.auth.EmailAuthProvider();

export { firebase, googleAuthProvider, emailAuthProvider, database as default };