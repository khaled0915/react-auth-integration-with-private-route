// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2_qZYdf3Lo4PQ04L98YmdGICVvJlKZxw",
  authDomain: "react-auth-integration-564d7.firebaseapp.com",
  projectId: "react-auth-integration-564d7",
  storageBucket: "react-auth-integration-564d7.appspot.com",
  messagingSenderId: "253032296631",
  appId: "1:253032296631:web:684dfc0ac9fc49ebbc9d32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth ;