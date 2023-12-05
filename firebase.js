// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoMU6wQWmCbZwwG471pKrcDPjx7x2g6Ls",
  authDomain: "tecnopoli-61802.firebaseapp.com",
  projectId: "tecnopoli-61802",
  storageBucket: "tecnopoli-61802.appspot.com",
  messagingSenderId: "31392800088",
  appId: "1:31392800088:web:33d0e853f68599d9a2d92d",
  measurementId: "G-6CVRBEJP6R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, app, auth  };