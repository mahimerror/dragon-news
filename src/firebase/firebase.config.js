// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdLV2NwVreAj79vCm79aZbMrvWxPJIi1I",
  authDomain: "dragon-news-aadad.firebaseapp.com",
  projectId: "dragon-news-aadad",
  storageBucket: "dragon-news-aadad.appspot.com",
  messagingSenderId: "889584909950",
  appId: "1:889584909950:web:f495d647249f664e08e22f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
