// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtRTOUnwTc6Mla46elstpohqei1y1fwIk",
    authDomain: "hobbehub-58606.firebaseapp.com",
    projectId: "hobbehub-58606",
    storageBucket: "hobbehub-58606.firebasestorage.app",
    messagingSenderId: "104601899527",
    appId: "1:104601899527:web:4668fdebd3797ce9a890a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
ec const auth = getAuth(app);
