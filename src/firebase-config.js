// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestorm} from 'firebase/firestore';
import {getStorage} from 'firebase/firebase-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7Hcr7STX6xJ3ggZLlqksZyQfxve-L8uE",
  authDomain: "my-articles-8f632.firebaseapp.com",
  projectId: "my-articles-8f632",
  storageBucket: "my-articles-8f632.appspot.com",
  messagingSenderId: "589293814151",
  appId: "1:589293814151:web:31af688b9a15f8ad289322"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;