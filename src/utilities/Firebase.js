import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS8e5MepIVe_B2j_En50bRwkIJSi_4pEA",
  authDomain: "clone-self.firebaseapp.com",
  projectId: "clone-self",
  storageBucket: "clone-self.appspot.com",
  messagingSenderId: "536564930641",
  appId: "1:536564930641:web:ee4ba5f1879825d9afc070",
  measurementId: "G-GMMMHYPGHX"
};
  const auth = firebase.auth();
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, firebaseApp, provider};
