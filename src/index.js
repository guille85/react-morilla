import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

initializeApp({
  apiKey: "AIzaSyCmEHcH4uqK1qrLxnfwd0xGyzvgA3GxnLI",
  authDomain: "e-commerce-coder-2ddaf.firebaseapp.com",
  projectId: "e-commerce-coder-2ddaf",
  storageBucket: "e-commerce-coder-2ddaf.appspot.com",
  messagingSenderId: "393484025575",
  appId: "1:393484025575:web:df2f54bc3c7d2388072c42"
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// Import the functions you need from the SDKs you need
