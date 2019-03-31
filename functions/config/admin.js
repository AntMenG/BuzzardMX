const admin = require('firebase-admin');

const serviceAccount = require('../sak.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://buzzardpage-18a37.firebaseio.com"
});

const db = admin.firestore();
// Colections
let clientes = db.collection('clientes');

module.exports = { admin, clientes };