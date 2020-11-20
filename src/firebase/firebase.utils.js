import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcyn45JAwVy_Opj6dDFL0xOznHPur2jZ8",
  authDomain: "crown-db-10553.firebaseapp.com",
  databaseURL: "https://crown-db-10553.firebaseio.com",
  projectId: "crown-db-10553",
  storageBucket: "crown-db-10553.appspot.com",
  messagingSenderId: "1089170697336",
  appId: "1:1089170697336:web:4a84330829c7204299918d",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
