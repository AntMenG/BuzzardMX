const express = require('express');
const router = express.Router();
const { clientes } = require('../../config/admin');

module.exports = (app) => {
  app.use('/service', router);
};

router.get("/web", (req, res) => {
    res.render("web", {
        title : "Comprar Web",
        main : false,
        service : true
    });
});

router.get("/mobile", (req, res) => {
    res.render("mobile", {
        title : "Comprar Web",
        main : false,
        service : true
    });
});

router.post('/sa', (req, res) => {
    let params = req.body;
    params.status = 'Espera';
    let nombre = params.nombre, 
        correo = params.correo, 
        numero = params.numero;
    if (nombre && correo && numero) {
        clientes.add(params).then(ref => {
            res.status(200).json({
                status: 'done',
                message: 'Gracias, atenderemos su petición en breve ',
                data: ref.id
            });
        }).catch(err => {
            res.status(500).json({
                status: 'err',
                message: 'Lo sentimos, a ocurrido un error interno'
            });
        });;
    } else {
        res.status(202).json({
            status: 'err',
            message: 'Debes de enviar nombre, correo y número'
        });
    }
});