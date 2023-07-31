// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPzczHPxIgsEeVMbHZxBnTWHWgCCspi8w",
  authDomain: "netflix-clone-c1ac8.firebaseapp.com",
  projectId: "netflix-clone-c1ac8",
  storageBucket: "netflix-clone-c1ac8.appspot.com",
  messagingSenderId: "283993884510",
  appId: "1:283993884510:web:c02e31607e45d59c0cb1cf",
  measurementId: "G-W321PQK8M7"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);