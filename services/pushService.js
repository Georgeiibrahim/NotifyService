// const admin = require('firebase-admin');
// const serviceAccount = require('../firebaseServiceAccountKey.json');

// if (!admin.apps.length) {
//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//   });
// }

// exports.sendPushNotification = async (deviceToken, title, message) => {
//   const payload = {
//     notification: {
//       title,
//       body: message,
//     },
//   };

//   await admin.messaging().sendToDevice(deviceToken, payload);
// };
