// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database'; // Import for Realtime Database

const firebaseConfig = {
    apiKey: "AIzaSyC_WNNRlKO3iggvkwhXIsGAcqEDyKSmRE8",
    authDomain: "tennis-tournament-b08da.firebaseapp.com",
    projectId: "tennis-tournament-b08da",
    storageBucket: "tennis-tournament-b08da.appspot.com",
    messagingSenderId: "1088726627081",
    appId: "1:1088726627081:web:bae875bda5d63d70d6d9d8",
    measurementId: "G-DBEGVLKSFY"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp); // Add this line for Realtime Database

export { auth, database }; // Export database along with auth
