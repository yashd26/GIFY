import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNPNTCaqbc0w5MkzmF7CkJfKDSoDz1s0A",
  authDomain: "alphabi-2b486.firebaseapp.com",
  projectId: "alphabi-2b486",
  storageBucket: "alphabi-2b486.appspot.com",
  messagingSenderId: "184746894072",
  appId: "1:184746894072:web:29bbc46241fe45b132110d",
  measurementId: "G-7D9KYLNT40"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth };
