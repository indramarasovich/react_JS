import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCMiJV0N_W8VfkA3B75b1deKA1nR-fUFm0",
  authDomain: "balooaccesorios-7710b.firebaseapp.com",
  projectId: "balooaccesorios-7710b",
  storageBucket: "balooaccesorios-7710b.appspot.com",
  messagingSenderId: "854809387087",
  appId: "1:854809387087:web:0ffe164165169ed7124a3a"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)