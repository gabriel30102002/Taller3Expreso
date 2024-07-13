var express = require('express');
var router = express.Router();
module.exports = router;

const Sequelize = require('sequelize');
const Cliente = require('../models').cliente;
const Pedido = require('../models').pedido;
const Producto = require('../models').producto;

router.get('/findAll/json', function(req, res, next) {  
    Cliente.findAll({  
        attributes: { exclude: ["updatedAt"] },
        include: [{  
            model: Pedido,  
            attributes: ["cliente_id","fecha","estado"],  
            through: { attributes: [] }  
        }],
        
        include: [{  
            model: Producto,  
            attributes: ["descripcion", "precio","stock"],  
            through: { attributes: [] }  
        }]  
    })  
    .then(clientes => {  
        res.json(clientes);  
    })  
    .catch(error => res.status(400).send(error)) 
});