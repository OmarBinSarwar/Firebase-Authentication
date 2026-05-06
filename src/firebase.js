import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5_BIu3kOdTzcNe5Z3Zefm8IJhvaMzogQ",
  authDomain: "project-361f8.firebaseapp.com",
  projectId: "project-361f8",
  storageBucket: "project-361f8.firebasestorage.app",
  messagingSenderId: "495792670374",
  appId: "1:495792670374:web:8f8d383bdf2b78e71f9667",
  measurementId: "G-CQMBCP6C4M"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);