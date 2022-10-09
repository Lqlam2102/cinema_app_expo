// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import "firebase/compat/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyAqI4hfrRLv-CMTXeNtpHGPWD3bXjGrrDI",
//   authDomain: "cinema-app-7a89b.firebaseapp.com",
//   projectId: "cinema-app-7a89b",
//   storageBucket: "cinema-app-7a89b.appspot.com",
//   messagingSenderId: "716591488797",
//   appId: "1:716591488797:web:75a14b4d756cecacff4bf4",
//   measurementId: "G-SG0R2P4WGV",
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// const auth = firebase.auth();
// const db = firebase.firestore();
// export { db, auth };
// export default firebase;

// ----------------

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/analytics";

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
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();
export { db, auth };
export default firebase;
