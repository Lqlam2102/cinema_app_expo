// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqI4hfrRLv-CMTXeNtpHGPWD3bXjGrrDI",
  authDomain: "cinema-app-7a89b.firebaseapp.com",
  projectId: "cinema-app-7a89b",
  storageBucket: "cinema-app-7a89b.appspot.com",
  messagingSenderId: "716591488797",
  appId: "1:716591488797:web:75a14b4d756cecacff4bf4",
  measurementId: "G-SG0R2P4WGV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
