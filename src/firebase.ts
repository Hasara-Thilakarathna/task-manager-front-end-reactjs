// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9nLFzxbr-an5Zev--Q_nsRI9BcS0-9vY",
    authDomain: "to-do-app-01-aa99e.firebaseapp.com",
    projectId: "to-do-app-01-aa99e",
    storageBucket: "to-do-app-01-aa99e.appspot.com",
    messagingSenderId: "570149861375",
    appId: "1:570149861375:web:517bf3259d6263f2b759ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {app,auth};