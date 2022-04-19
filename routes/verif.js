const { response } = require('express');
const express = require('express');
const { render, redirect } = require('express/lib/response');
const router = express.Router();
const User = require('../database/models/User');
//const nodemailer = require("nodemailer");
//const nodemailusu = require('../../config')
const NodemailFunction = require('../database/Nodemailer')
//const VerifFunction = require('../public/js/formulario')

router.post('/', (req, res)=>{
    console.log(req.body);
    /*
    (async () => {
      //console.log(req.body.usuario)      
        //sync por default esta activado  
        await User.sync({force: true});
        await User.create({                  
          usuario: req.body.usuario,
	        password: req.body.password,
          correo: req.body.correo,    
          nombre: req.body.nombre,
          ci: req.body.ci,
          telefono: req.body.telefono          
        }).then((user) => {
            console.log("Ha funcionado")
            res.render('verifwait')            
        }).catch(err =>{
            console.log("No ha funcionado")
            res.json(err);            
        })                
      })();      
    */
    res.render('verifsuccess')
      
});

module.exports = router;