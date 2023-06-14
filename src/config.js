import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyA-vJNwcnK9WuroCI8euIpGFD-l40j-Liw",
  authDomain: "finapp-a2153.firebaseapp.com",
  projectId: "finapp-a2153",
  storageBucket: "finapp-a2153.appspot.com",
  messagingSenderId: "675733130357",
  appId: "1:675733130357:web:7ba6a52985726c408ebc3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export {auth, googleProvider}