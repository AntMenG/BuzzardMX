const express = require('express');
const router = express.Router();

module.exports = (app) => {
  app.use('/', router);
};

router.get("/", (req, res) => {
    res.render("index", {
        title : "Software a tu Medida",
        main : true
    });
})

router.get("/comprar_web", (req, res) => {
    res.render("comprar_w", {
        title : "Comprar Web",
        main : false
    });
})