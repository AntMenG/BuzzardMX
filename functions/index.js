const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require("express");
const exphbs  = require('express-handlebars');
const glob = require('glob');

const app = express();

app.engine('hbs', exphbs({
    extname: '.hbs',
    layoutsDir: './app/views/layouts/',
    defaultLayout: 'main',
    partialsDir: [
        './app/views/partials/'
    ],
    helpers: {
        ifeq: function ( a, b, options) {
            if (a == b) {
                return options.fn(this)
            } else {
                return options.inverse(this)
            }
        }
    }
}));
app.set('views', './app/views');
app.set('view engine', 'hbs');

admin.initializeApp(
    functions.config().firebase
);

var controllers = glob.sync('./app/controllers/*.js');
controllers.forEach((controller) => {
  require(controller)(app);
});

app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err,
        title: 'error',
        main : false
    });
});

exports.app = functions.https.onRequest(app);
