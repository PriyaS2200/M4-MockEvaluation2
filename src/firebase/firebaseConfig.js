// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChCUKc1jnd0FpGP8VoulNNnuF_n-pDBTU",
  authDomain: "m4-mockeval2.firebaseapp.com",
  projectId: "m4-mockeval2",
  storageBucket: "m4-mockeval2.firebasestorage.app",
  messagingSenderId: "837414160411",
  appId: "1:837414160411:web:bf9a37388c2b804503d0be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;