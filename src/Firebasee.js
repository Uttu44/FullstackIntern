// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcGS9BF-Xk4BD6KabJhntblMxhpf_FT6I",
  authDomain: "full-stack-internship.firebaseapp.com",
  databaseURL: "https://full-stack-internship-default-rtdb.firebaseio.com",
  projectId: "full-stack-internship",
  storageBucket: "full-stack-internship.appspot.com",
  messagingSenderId: "292453962304",
  appId: "1:292453962304:web:c79c9ae378e24a7d62c5a5",
  measurementId: "G-FJY1KVVR0K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

const analytics = getAnalytics(app);