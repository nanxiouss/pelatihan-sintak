// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXfUNU1x1B---GmHrB5oFYuML3e0zW-tY",
  authDomain: "pelatihan-sintak-f88e7.firebaseapp.com",
  projectId: "pelatihan-sintak-f88e7",
  storageBucket: "pelatihan-sintak-f88e7.firebasestorage.app",
  messagingSenderId: "1072451283008",
  appId: "1:1072451283008:web:ecfd36bc48f5713d3e97a5",
  measurementId: "G-JMPD2E47YT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
// const analytics = getAnalytics(app);
export { db };
