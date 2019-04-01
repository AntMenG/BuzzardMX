const express = require('express');
const router = express.Router();

module.exports = (app) => {
  app.use('/', router);
};

router.get("/", (req, res) => {
    res.render("index", {
        title : "Software a tu Medida",
        main : true,
        service : false
    });
});