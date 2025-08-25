// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXpvTdAbBVisSh2gi5eC9NRbkQnqUI_yg",
  authDomain: "form-b45fb.firebaseapp.com",
  projectId: "form-b45fb",
  storageBucket: "form-b45fb.firebasestorage.app",
  messagingSenderId: "111848961181",
  appId: "1:111848961181:web:b3767cebf9f01027c1d074",
  measurementId: "G-KLQKP1NJDD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);