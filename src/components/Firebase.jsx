// import React from "react";
// // import { FirebaseProvider } from "@useweb/use-firebase";
// import { initializeApp } from "firebase/app";
// import { getMessaging } from "firebase/messaging";

// function Firebase({ children }) {
//   const firebaseConfig = {
//     apiKey: "AIzaSyCcqx6SqmE5_ua6ToGL7NAAI4m6cJQkRow",
//     authDomain: "task-management-app-c0771.firebaseapp.com",
//     projectId: "task-management-app-c0771",
//     storageBucket: "task-management-app-c0771.appspot.com",
//     messagingSenderId: "1095456840525",
//     appId: "1:1095456840525:web:dd1cdbad277b6bfee5b504",
//   };

//   const firebaseApp = initializeApp(firebaseConfig);
//   const messaging = getMessaging(firebaseApp);

//   const envIsDev = process.env.NODE_ENV === "development";

//   const vapidKey =
//     "BItxnKJeRjNP3mv5WxBZvevhqPlYYj9Gtr6B-sTJxC3g104_yzrhlnJQUZ6IGFRPYyg9y6nSCDxrw2dck0GEv1M"; // vapidKey is required

//   return (
//     <FirebaseProvider
//       firebaseConfig={firebaseConfig}
//       firebaseApp={firebaseApp}
//       envIsDev={envIsDev}
//       messaging={messaging}
//       messagingOptions={{
//         vapidKey,
//       }}
//     >
//       {children}
//     </FirebaseProvider>
//   );
// }

// export default Firebase;
