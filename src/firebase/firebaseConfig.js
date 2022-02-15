// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAODKyPwt3vCVIi2bYW4xoB0sxz_EX_kcI",
  authDomain: "app-thegoodtaste.firebaseapp.com",
  projectId: "app-thegoodtaste",
  storageBucket: "app-thegoodtaste.appspot.com",
  messagingSenderId: "537621134226",
  appId: "1:537621134226:web:f12db8f82109598c919f4b",
  measurementId: "G-191HMZ8BXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);