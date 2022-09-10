import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDNmzVJ9-pO-C6u0tISLl9id8JTz1qn95s",
  authDomain: "hotornot2-1ca8b.firebaseapp.com",
  projectId: "hotornot2-1ca8b",
  storageBucket: "hotornot2-1ca8b.appspot.com",
  messagingSenderId: "57526492988",
  appId: "1:57526492988:web:db66959b10caeb236c4839",
  measurementId: "G-BRKEN634QQ"
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export const whoresDB = collection(db, "whores")