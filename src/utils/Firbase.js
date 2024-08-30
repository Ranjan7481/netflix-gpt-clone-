// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC95J63DTi7wN0CrTaC3nVrEPRuI6FLD3o",
  authDomain: "netflixgpt-1977f.firebaseapp.com",
  projectId: "netflixgpt-1977f",
  storageBucket: "netflixgpt-1977f.appspot.com",
  messagingSenderId: "389990185570",
  appId: "1:389990185570:web:ac1e508d78c117b64eaf3b",
  measurementId: "G-K4VNB3T5VC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();
