import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD9mExampleKey123456",
  authDomain: "firebaseauthapp-12345.firebaseapp.com",
  projectId: "firebaseauthapp-12345",
  storageBucket: "firebaseauthapp-12345.appspot.com",
  messagingSenderId: "9876543210",
  appId: "1:9876543210:web:abcdef123456",
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);