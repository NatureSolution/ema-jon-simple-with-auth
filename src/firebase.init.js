// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTOJRm5pyBvKjO7nkyqGUSAOvc1X5DepU",
  authDomain: "ema-jon-simple-fc139.firebaseapp.com",
  projectId: "ema-jon-simple-fc139",
  storageBucket: "ema-jon-simple-fc139.appspot.com",
  messagingSenderId: "586948243914",
  appId: "1:586948243914:web:d31e5c18ceaebf3aaf1f33",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
