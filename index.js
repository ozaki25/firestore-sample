const admin = require('firebase-admin');
const functions = require('firebase-functions');

const serviceAccount = require('./serviceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://ippo-app.firebaseio.com',
});

const db = admin.firestore();

db.collection('users').add({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815,
  timestamp: admin.firestore.FieldValue.serverTimestamp(),
});

db.collection('users')
  .get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
    });
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });
