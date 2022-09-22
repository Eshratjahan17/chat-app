// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEJoaLALvMMDarr8Ol1ZNs2cDyD4fsa8g",
  authDomain: "chat-app-3c0f2.firebaseapp.com",
  projectId: "chat-app-3c0f2",
  storageBucket: "chat-app-3c0f2.appspot.com",
  messagingSenderId: "281264930244",
  appId: "1:281264930244:web:02aad64baeb92f10aab891",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
