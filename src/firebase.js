import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGk8B6urV0bPxzPg01Yf92mhbmyViUnXE",
  authDomain: "tourism-4c805.firebaseapp.com",
  projectId: "tourism-4c805",
  storageBucket: "tourism-4c805.appspot.com",
  messagingSenderId: "488317027560",
  appId: "1:488317027560:web:b90e0481cdcdd95536b55d",
  measurementId: "G-NEH0849RD4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
export default app;
