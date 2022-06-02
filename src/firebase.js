// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHMemHxSmyFdW7eGnr8XgJLvVd_HDzphw",
  authDomain: "sparta-react-basic-fbb48.firebaseapp.com",
  projectId: "sparta-react-basic-fbb48",
  storageBucket: "sparta-react-basic-fbb48.appspot.com",
  messagingSenderId: "933431603814",
  appId: "1:933431603814:web:5579e72bd7cbda211e73a7",
  measurementId: "G-61Q2F23B4P"
};


initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);