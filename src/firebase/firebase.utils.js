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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
    console.log(snapShot)
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;