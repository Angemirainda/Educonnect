// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{push,ref,getDatabase,onValue} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBPQckLQ40PTAYwQqPA2bwIHDpLJE-kHuk",
    authDomain: "educonnect-40ba7.firebaseapp.com",
    databaseURL: "https://educonnect-40ba7-default-rtdb.firebaseio.com",
    projectId: "educonnect-40ba7",
    storageBucket: "educonnect-40ba7.firebasestorage.app",
    messagingSenderId: "496617575595",
    appId: "1:496617575595:web:2137861cd98a35c89b53ee",
    measurementId: "G-6028HCXK8Z"
  };
  
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export{ref, push,onValue} ;// Export the database reference for use in other files