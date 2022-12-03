import firebase from "firebase"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlVOtJ65TICq_HzIyDTpxxGSOtKaQV3j4",
  authDomain: "pwa-app-be75f.firebaseapp.com",
  projectId: "pwa-app-be75f",
  storageBucket: "pwa-app-be75f.appspot.com",
  messagingSenderId: "125066052085",
  appId: "1:125066052085:web:a8be229febacce2defe0bc",
  measurementId: "G-T5YM4YJ52R"
};

// Initialize Firebase
firebase. initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default firebase