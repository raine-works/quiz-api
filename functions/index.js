const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors({ origin: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// API Endpoints.
app.use('/api', require('./api/quiz'));

exports.app = functions.https.onRequest(app);