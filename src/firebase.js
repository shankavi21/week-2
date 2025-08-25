// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGk8B6urV0bPxzPg01Yf92mhbmyViUnXE",
  authDomain: "tourism-4c805.firebaseapp.com",
  projectId: "tourism-4c805",
  storageBucket: "tourism-4c805.firebasestorage.app",
  messagingSenderId: "488317027560",
  appId: "1:488317027560:web:b90e0481cdcdd95536b55d",
  measurementId: "G-NEH0849RD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app; 
console.log();