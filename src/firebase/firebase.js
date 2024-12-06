// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAybjZVKxfxCbv5VWYRop5RioRhFfbdK8g",
  authDomain: "myani-bb456.firebaseapp.com",
  projectId: "myani-bb456",
  storageBucket: "myani-bb456.firebasestorage.app",
  messagingSenderId: "640724607532",
  appId: "1:640724607532:web:ab0c0b13b6821d6ca22789",
  measurementId: "G-MJYXQMZB81",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
