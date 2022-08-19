// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBSo-YDTarbsJgs9CDiX3qBKfKIjxjXBAY",
    authDomain: "kampy-3.firebaseapp.com",
    projectId: "kampy-3",
    storageBucket: "kampy-3.appspot.com",
    messagingSenderId: "1072645436092",
    appId: "1:1072645436092:web:f18f9eb234cc42171a16b9",
    measurementId: "G-ZF7CBSGLLY"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export default db