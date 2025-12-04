import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDY7_1sThQ2RcWUZFQS4xEdoJDH8fGo2Gc",
  authDomain: "blog-portfolio--v2.firebaseapp.com",
  projectId: "blog-portfolio--v2",
  storageBucket: "blog-portfolio--v2.firebasestorage.app",
  messagingSenderId: "240662372580",
  appId: "1:240662372580:web:e08a76938ba425395a4cf1",
  measurementId: "G-LN4DV1RER3"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app); // <-- YOU NEED THIS

export default auth;
