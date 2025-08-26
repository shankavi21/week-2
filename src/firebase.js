// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
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

// Initialize Firestore
const db = getFirestore(app);

// Export both app (default) and db (named export)
export { db };
export default app;
