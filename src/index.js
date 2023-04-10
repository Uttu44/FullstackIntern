import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';


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

firebase.initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Router> */}
    <App />
    {/* </Router> */}
  </React.StrictMode>
);
reportWebVitals();
