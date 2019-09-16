const admin = require('firebase-admin');
const functions = require('firebase-functions');

const serviceAccount = require('./serviceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://ippo-app.firebaseio.com',
});

const db = admin.firestore();

const docRef = db.collection('users').doc('alovelace');

const setAda = docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815,
});
