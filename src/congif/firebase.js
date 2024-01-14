// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQM1diQ2z8-01rb2Zuvg0jxmcucbeMCbo",
  authDomain: "auth-react-75431.firebaseapp.com",
  projectId: "auth-react-75431",
  storageBucket: "auth-react-75431.appspot.com",
  messagingSenderId: "969460282396",
  appId: "1:969460282396:web:865f77de4d3a81f9025bd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();