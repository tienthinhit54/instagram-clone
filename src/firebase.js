import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6z4S-DUGmrZMoLC3ooVVHzDEq4wyNRVY",
  authDomain: "instagram-clone-c8bd9.firebaseapp.com",
  projectId: "instagram-clone-c8bd9",
  storageBucket: "instagram-clone-c8bd9.appspot.com",
  messagingSenderId: "1031953014139",
  appId: "1:1031953014139:web:1c5c19fecf59d3020771de",
  measurementId: "G-NZBM17LNVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();