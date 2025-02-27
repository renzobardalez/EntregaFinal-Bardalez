import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2J_oqcPrgLXQ99g1C9QprKlKifm_D7IM",
  authDomain: "e-commerce-rbardalez.firebaseapp.com",
  projectId: "e-commerce-rbardalez",
  storageBucket: "e-commerce-rbardalez.firebasestorage.app",
  messagingSenderId: "1009950300994",
  appId: "1:1009950300994:web:311c13521f0c2e6ed1c6db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
   </StrictMode>, //(Se comenta para evitar que se renderice dos veces al enviar datos a Firebase)
)
