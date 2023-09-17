
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyARMtPXO1oA_P6-7LVFnJnHujfQnq21Wo4",
  authDomain: "grameenshikhsasahyog.firebaseapp.com",
  databaseURL: "https://grameenshikhsasahyog-default-rtdb.firebaseio.com",
  projectId: "grameenshikhsasahyog",
  storageBucket: "grameenshikhsasahyog.appspot.com",
  messagingSenderId: "254773996494",
  appId: "1:254773996494:web:a1b2be9c18d1c28a82d99f",
  measurementId: "G-9VD0VM6KJJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

 