import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyC-qfJmXn97yj2jdiSOi03ldaG6ixPcAZw",
  authDomain: "react-app-d68dc.firebaseapp.com",
  projectId: "react-app-d68dc",
  storageBucket: "react-app-d68dc.firebasestorage.app",
  messagingSenderId: "19738302388",
  appId: "1:19738302388:web:4b0c0bebf72ab2cea3c4e1"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);