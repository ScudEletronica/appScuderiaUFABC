const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.LabOpen = functions.database.ref('/Status/Lab').onUpdate((change) => {
  const after = change.after.val();

  if (after === true) {
    const payload = {
      notification: {
        title: 'Lab Aberto',
        body: 'Alguém solicitou que o Lab fosse aberto',
        token: androidNotificationToken
      }
    };
    return admin.messaging().send(payload)
  }
  return null;
})