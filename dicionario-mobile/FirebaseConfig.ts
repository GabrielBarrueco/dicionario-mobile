import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZ8UUX8ooFPixEv3U0UuTMZEbujmlIDL4",
  authDomain: "dicionario-mobile-app.firebaseapp.com",
  projectId: "dicionario-mobile-app",
  storageBucket: "dicionario-mobile-app.appspot.com",
  messagingSenderId: "72775846193",
  appId: "1:72775846193:web:07d78840462aca87830810"
};

const FIREBASE_APP = initializeApp(firebaseConfig);
export const  FIREBASE_AUTH = getAuth(FIREBASE_APP);
