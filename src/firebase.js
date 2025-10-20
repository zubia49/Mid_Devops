import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1ny9p_pw5STQeyWd4d_q2oZ06RcLvK3I",
  authDomain: "react-e1ccc.firebaseapp.com",
  projectId: "react-e1ccc",
  storageBucket: "react-e1ccc.appspot.com",
  messagingSenderId: "337405843489",
  appId: "1:337405843489:web:872f91d16045c12f08eb60",
  measurementId: "G-6FKNDBK2B3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
