// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdp6ILc95SX2_yhhzQFmQYsQNqcxkmb7Y",
  authDomain: "react-auth-9f853.firebaseapp.com",
  projectId: "react-auth-9f853",
  storageBucket: "react-auth-9f853.appspot.com",
  messagingSenderId: "440951732604",
  appId: "1:440951732604:web:99d2828acdd9a893c70cf9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);