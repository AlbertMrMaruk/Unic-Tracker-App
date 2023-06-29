import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  isSupported,
  getMessaging,
  getToken,
  onMessage,
} from "firebase/messaging";

// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcqx6SqmE5_ua6ToGL7NAAI4m6cJQkRow",
  authDomain: "task-management-app-c0771.firebaseapp.com",
  projectId: "task-management-app-c0771",
  storageBucket: "task-management-app-c0771.appspot.com",
  messagingSenderId: "1095456840525",
  appId: "1:1095456840525:web:dd1cdbad277b6bfee5b504",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const supported = await isSupported().catch(() => false);
if (!supported) {
  alert("Your device is not supproted for web push notifications");
}
const sw = await window.navigator.serviceWorker.register("/sw.js");
window.Notification.requestPermission((permission) => {
  if (permission === "granted") {
    sw.showNotification("Weee");
  }
});

// const auth = getAuth();
// await signInWithEmailAndPassword(auth, "albery2015@mail.ru", "ALBert2002");
// console.log(auth.currentUser);

const messaging = getMessaging(app);
const token = await getToken(messaging, {
  serviceWorkerRegistration: sw,
});
console.log(token);
export const db = getFirestore();
