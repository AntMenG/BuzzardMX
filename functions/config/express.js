const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const exphbs  = require('express-handlebars');
const express = require("express");
const glob = require('glob');

const app = express();

app.engine('hbs', exphbs({
    extname: '.hbs',
    layoutsDir: rootPath + '/app/views/layouts/',
    defaultLayout: 'main',
    partialsDir: [
        rootPath + '/app/views/partials/'
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
app.set('views', rootPath + '/app/views');
app.set('view engine', 'hbs');

var controllers = glob.sync(rootPath + '/app/controllers/*.js');
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

module.exports = { app };