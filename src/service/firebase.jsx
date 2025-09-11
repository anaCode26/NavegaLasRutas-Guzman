// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDN7BlYVvl_lvIHcwdosT4wHMT89wqSNaE",
	authDomain: "pet-commerce.firebaseapp.com",
	projectId: "pet-commerce",
	storageBucket: "pet-commerce.firebasestorage.app",
	messagingSenderId: "321035526921",
	appId: "1:321035526921:web:fb4ca4a67aae599b1ba9d8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
