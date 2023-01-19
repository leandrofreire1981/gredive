/* // Import the functions you need from the SDKs you need

//import firebase from 'firebase'
//import { getAnalytics } from "firebase/analytics";
//import firebase from 'firebase/firestore'

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { firestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"

import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId
}; 

// Initialize Firebase
//firebase.initializeApp(firebaseConfig);


const app = initializeApp(firebaseConfig);
const firebase = getFirestore(app);
export default firebase
 */