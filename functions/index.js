const functions = require('firebase-functions');
const { app } = require('./config/express');

exports.app = functions.https.onRequest(app);
