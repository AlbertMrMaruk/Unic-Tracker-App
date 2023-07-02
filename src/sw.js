import { onBackgroundMessage } from "firebase/messaging/sw";
import { initializeApp } from "firebase/app";
import { getMessaging, isSupported } from "firebase/messaging/sw";
import { onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCcqx6SqmE5_ua6ToGL7NAAI4m6cJQkRow",
  authDomain: "task-management-app-c0771.firebaseapp.com",
  projectId: "task-management-app-c0771",
  storageBucket: "task-management-app-c0771.appspot.com",
  messagingSenderId: "1095456840525",
  appId: "1:1095456840525:web:dd1cdbad277b6bfee5b504",
};

const app = initializeApp(firebaseConfig);

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

const messaging = getMessaging(app);
onMessage(messaging, (payload) => {
  const { title, body, image } = payload ?? {};
  console.log("ddd");

  if (!title) {
    return;
  }
  self.registration.showNotification(title, {
    body,
    icon: image,
  });
});
onBackgroundMessage(messaging, ({ notification }) => {
  const { title, body, image } = notification ?? {};
  console.log("ddd");
  if (!title) {
    return;
  }

  self.registration.showNotification(title, {
    body,
    icon: image,
  });
});
console.log("SNRTTT");
isSupported()
  .then(() => {
    console.log("gg");
  })
  .catch((err) => console.error(err));
