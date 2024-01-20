// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbZelqUt6NoaFDaG7tNfAuM8R9Cr6Jvxg",
  authDomain: "codent-registration.firebaseapp.com",
  projectId: "codent-registration",
  storageBucket: "codent-registration.appspot.com",
  messagingSenderId: "1042253742679",
  appId: "1:1042253742679:web:4e004fbfc4f5f538dc5912",
  measurementId: "G-5EZMM0N4JJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);