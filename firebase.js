// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2aD4CMEWMK8P3WekpHJdUb2i9y7EaPaQ",
  authDomain: "taskflow-f80f6.firebaseapp.com",
  projectId: "taskflow-f80f6",
  storageBucket: "taskflow-f80f6.appspot.com",
  messagingSenderId: "779189095271",
  appId: "1:779189095271:web:dcdfd5cf2d580ff2e6bdc2",
  measurementId: "G-CHC067L7SR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);