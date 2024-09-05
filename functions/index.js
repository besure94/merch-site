// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.assignAdminRole = functions.https.onCall((data, context) => {

  if (context.auth.token.admin !== true) {
    throw new functions.https.HttpsError('permission-denied', 'Only admins can assign roles.');
  }

  const newAdminUid = data.uid;

  return admin.auth().setCustomUserClaims(newAdminUid, { admin: true }).then(() => {
    return admin.firestore().collection('users').doc(newAdminUid).update({
      role: 'admin'
    }).then(() => {
      return { message: `Success! User ${newAdminUid} has been granted admin rights.` };
    });
  }).catch(error => {
    throw new functions.https.HttpsError('internal-error', error.message);
  });

});
