// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB60sImjT4WtffAomEgv5nuO0KF0WLU5rM",
  authDomain: "signwave-c2a4f.firebaseapp.com",
  projectId: "signwave-c2a4f",
  storageBucket: "signwave-c2a4f.appspot.com",
  messagingSenderId: "1028100242756",
  appId: "1:1028100242756:web:a4c167b8f50e9988e2ab11",
  measurementId: "G-MRNV94RKSZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export default {auth}