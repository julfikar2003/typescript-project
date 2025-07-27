// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqMw90UtayMgIfXz_7vOzpoASphKel66U",
  authDomain: "typescript-project-a971d.firebaseapp.com",
  projectId: "typescript-project-a971d",
  storageBucket: "typescript-project-a971d.firebasestorage.app",
  messagingSenderId: "109365989461",
  appId: "1:109365989461:web:247a512d518a20934e04dc",
  measurementId: "G-6FJWWHBRFD"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
