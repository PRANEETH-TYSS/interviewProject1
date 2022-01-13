import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAWrlXZ2t7qagtxC9ikH2ksgLh7gCMI3ms",
  authDomain: "loginaunthentication.firebaseapp.com",
  projectId: "loginaunthentication",
  storageBucket: "loginaunthentication.appspot.com",
  messagingSenderId: "315806415757",
  appId: "1:315806415757:web:3c7f55f6f0492320b25bc4",
  measurementId: "G-5ZQ2J0VGLB",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { auth };
export default db;
export default firebase;
