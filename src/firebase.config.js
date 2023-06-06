import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcqx6SqmE5_ua6ToGL7NAAI4m6cJQkRow",
  authDomain: "task-management-app-c0771.firebaseapp.com",
  projectId: "task-management-app-c0771",
  storageBucket: "task-management-app-c0771.appspot.com",
  messagingSenderId: "1095456840525",
  appId: "1:1095456840525:web:dd1cdbad277b6bfee5b504",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
