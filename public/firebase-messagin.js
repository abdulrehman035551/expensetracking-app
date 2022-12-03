const firebase = require("firebase");

importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js');


firebase.initializeApp({
  apiKey: "AIzaSyAlVOtJ65TICq_HzIyDTpxxGSOtKaQV3j4",
  authDomain: "pwa-app-be75f.firebaseapp.com",
  projectId: "pwa-app-be75f",
  storageBucket: "pwa-app-be75f.appspot.com",
  messagingSenderId: "125066052085",
  appId: "1:125066052085:web:a8be229febacce2defe0bc",
  measurementId: "G-T5YM4YJ52R"
  })

  firebase.messaging()
