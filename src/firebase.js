import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUNmaPciSFyrYlZOtD86g0h-WPjfPxzqI",
    authDomain: "your-ai-friend-6c07f.firebaseapp.com",
    projectId: "your-ai-friend-6c07f",
    storageBucket: "your-ai-friend-6c07f.appspot.com",
    messagingSenderId: "466976793157",
    appId: "1:466976793157:web:373c25cafaddbdb5a8b92c",
    measurementId: "G-RTH0298W48"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
