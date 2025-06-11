// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD68Byf28fWD-VqSdGBhHRC48xf43MzFdk",
  authDomain: "artevo-id-a350f.firebaseapp.com",
  projectId: "artevo-id-a350f",
  storageBucket: "artevo-id-a350f.firebasestorage.app",
  messagingSenderId: "912072853121",
  appId: "1:912072853121:web:50ff59264fc30d9d81ef80",
  measurementId: "G-P98406CZJR"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);