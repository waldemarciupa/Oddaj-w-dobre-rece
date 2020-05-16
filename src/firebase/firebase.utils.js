import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBNOYL-oHE8VHFtwafO62jcKh0UZyNGe-0",
    authDomain: "oddaj-rzeczy-d0566.firebaseapp.com",
    databaseURL: "https://oddaj-rzeczy-d0566.firebaseio.com",
    projectId: "oddaj-rzeczy-d0566",
    storageBucket: "oddaj-rzeczy-d0566.appspot.com",
    messagingSenderId: "1098956787208",
    appId: "1:1098956787208:web:9a1bdd46181854d67f4bbd",
    measurementId: "G-9RXD0VET99"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;