// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClt_aalmzClaSNs8AlulTiH8kbYN6KTYw",
  authDomain: "mundo-invertido-front-e-back.firebaseapp.com",
  projectId: "mundo-invertido-front-e-back",
  storageBucket: "mundo-invertido-front-e-back.appspot.com",
  messagingSenderId: "650664134153",
  appId: "1:650664134153:web:e8bcc891bea1934ce21ad8",
  measurementId: "G-VVWYLF7XTH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app