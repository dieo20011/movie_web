// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5X2qfc1K2bmLIJ7wmbJ4IDl4CJkCfcno",
  authDomain: "movie-f1943.firebaseapp.com",
  projectId: "movie-f1943",
  storageBucket: "movie-f1943.appspot.com",
  messagingSenderId: "865733690792",
  appId: "1:865733690792:web:610d4c62eebd82a6adc99d",
  measurementId: "G-TKRXXM0492"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);