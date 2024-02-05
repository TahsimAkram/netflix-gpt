// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg3Gkh0oDaBBPfHwEvzTXM2LLQ5JAZhh8",
  authDomain: "netflixgpt-56ced.firebaseapp.com",
  projectId: "netflixgpt-56ced",
  storageBucket: "netflixgpt-56ced.appspot.com",
  messagingSenderId: "1079089939190",
  appId: "1:1079089939190:web:56854346236d1f8a9562d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();