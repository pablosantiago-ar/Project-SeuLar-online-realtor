// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXNLkaAePdtVjuJWiiujdkUPnCBraAP38",
  authDomain: "realtor-clone-react-5042d.firebaseapp.com",
  projectId: "realtor-clone-react-5042d",
  storageBucket: "realtor-clone-react-5042d.appspot.com",
  messagingSenderId: "239130785362",
  appId: "1:239130785362:web:90b994ee01ea9c8cca918b"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()