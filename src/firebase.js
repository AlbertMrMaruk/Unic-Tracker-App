// const serviceAccount = require("./service-account.json");
// const admin = require("firebase-admin");

// /* initialise app */
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

// /* initialise firestore */
// const firestore = admin.firestore();
// firestore.settings({
//   timestampsInSnapshots: true,
// });
// const FIRESTORE_TOKEN_COLLECTION = "instance_tokens";

// async function storeAppInstanceToken(token) {
//   try {
//     return await firestore
//       .collection(FIRESTORE_TOKEN_COLLECTION)
//       .add({ token, createdAt: admin.firestore.FieldValue.serverTimestamp() });
//   } catch (err) {
//     console.log(`Error storing token [${token}] in firestore`, err);
//     return null;
//   }
// }

// const messaging = admin.messaging();

// function buildCommonMessage(title, body) {
//   return {
//     notification: {
//       title: title,
//       body: body,
//     },
//   };
// }

// /**
//  * Builds message with platform specific options
//  * Link: https://firebase.google.com/docs/reference/fcm/rest/v1/projects.messages
//  */
// function buildPlatformMessage(token, title, body) {
//   const fcmMessage = buildCommonMessage(title, body);

//   const webpush = {
//     headers: {
//       TTL: "0",
//     },
//     notification: {
//       icon: "https://img.icons8.com/color/96/e74c3c/ireland.png",
//     },
//     fcm_options: {
//       link: "https://gnib-visa-app.rharshad.com",
//     },
//   };

//   fcmMessage["token"] = token;
//   fcmMessage["webpush"] = webpush;
//   return fcmMessage;
// }

// async function sendFcmMessage(fcmMessage) {
//   try {
//     await messaging.send(fcmMessage);
//   } catch (err) {
//     console.log(err);
//   }
// }

// module.exports = {
//   buildPlatformMessage,
//   storeAppInstanceToken,
//   deleteAppInstanceToken,
//   sendFcmMessage,
// };
