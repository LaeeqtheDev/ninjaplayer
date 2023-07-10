// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArYyfRx1_olexciNMDe1LaSWotrH2ToT8",
  authDomain: "ninjaplayer-392323.firebaseapp.com",
  projectId: "ninjaplayer-392323",
  storageBucket: "ninjaplayer-392323.appspot.com",
  messagingSenderId: "308533767838",
  appId: "1:308533767838:web:41080868a4eea5848fd58f",
  measurementId: "G-Y2G024SVR4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);