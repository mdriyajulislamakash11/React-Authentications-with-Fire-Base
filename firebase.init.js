// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGJ0H8IQKQJ-Aqcotq5ixxJ4edCxRpymI",
  authDomain: "intro-react-projects.firebaseapp.com",
  projectId: "intro-react-projects",
  storageBucket: "intro-react-projects.firebasestorage.app",
  messagingSenderId: "1019956159538",
  appId: "1:1019956159538:web:33c0f72980a02cddd5082b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
