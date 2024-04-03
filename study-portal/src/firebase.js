// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLg1ZCg7iMvrJ1IaDx6qPJbg6NBsnnj_I",
  authDomain: "university-a12b7.firebaseapp.com",
  projectId: "university-a12b7",
  storageBucket: "university-a12b7.appspot.com",
  messagingSenderId: "117923143150",
  appId: "1:117923143150:web:03a814d2ae114395a782ff",
  measurementId: "G-2BTND5D3MX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);

export const storage = getStorage(app);


const auth = getAuth(app);




const provider = new GoogleAuthProvider();

export {auth, provider}




