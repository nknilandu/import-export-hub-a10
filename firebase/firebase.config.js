// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmZcJObSbIEZYw6nz00XRcCIZZ8cTAFPI",
  authDomain: "import-export-hub-nk.firebaseapp.com",
  projectId: "import-export-hub-nk",
  storageBucket: "import-export-hub-nk.firebasestorage.app",
  messagingSenderId: "1064998007083",
  appId: "1:1064998007083:web:b2b83d68e2126a3344d56e",
  measurementId: "G-HVJ3V2KQDK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);