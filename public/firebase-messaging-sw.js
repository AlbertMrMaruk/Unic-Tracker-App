importScripts("https://www.gstatic.com/firebasejs/7.13.2/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.13.2/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyCcqx6SqmE5_ua6ToGL7NAAI4m6cJQkRow",
  authDomain: "task-management-app-c0771.firebaseapp.com",
  projectId: "task-management-app-c0771",
  storageBucket: "task-management-app-c0771.appspot.com",
  messagingSenderId: "1095456840525",
  appId: "1:1095456840525:web:dd1cdbad277b6bfee5b504",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener("notificationclick", (event) => {
  if (event.action) {
    clients.openWindow(event.action);
  }
  event.notification.close();
});
