// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0dlHz8XjZf_O7KKGaDbC3jsa883DnjHw",
  authDomain: "twitter-clone-b5263.firebaseapp.com",
  projectId: "twitter-clone-b5263",
  storageBucket: "twitter-clone-b5263.appspot.com",
  messagingSenderId: "283601658942",
  appId: "1:283601658942:web:790487be91542e15aadd6f",
  measurementId: "G-XN9QG2VD9D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const db = getFirestore(app);
