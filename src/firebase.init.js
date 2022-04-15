// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDraRtVl5Kbtn-bl1q4QgTqv50C34Zfh14",
  authDomain: "red-onion-804c4.firebaseapp.com",
  projectId: "red-onion-804c4",
  storageBucket: "red-onion-804c4.appspot.com",
  messagingSenderId: "508233327012",
  appId: "1:508233327012:web:87d1752cf660739d53e131",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
