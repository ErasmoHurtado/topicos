const { response } = require('express');
const express = require('express');
const { render, redirect } = require('express/lib/response');
const router = express.Router();
const User = require('../database/models/User');
//const nodemailer = require("nodemailer");
//const nodemailusu = require('../../config')
const NodemailFunction = require('../database/Nodemailer')
//const VerifFunction = require('../public/js/formulario')


//GET

router.get('/', (req, res) =>{
  //res.send("Holiiiiii")
  User.findAll().then(users => {
      res.json(users);
  })

})

//CREATE

//const num = Math.trunc(Math.random()*10000000000000)   

router.post('/', (req, res) =>{
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
          telefono: req.body.telefono,
          //codVerif: GenerarCodigoAleatorioCampo()
        }).then((user) => {
            console.log("Ha funcionado")
            //console.log(req.body);
            //NodemailFunction(req.body.correo).catch(console.error);;            
            //res.json(user)  //original
            res.render('verifwait')
            //__dirname = '/api/users/verificacion-wait'
            //console.log(__dirname + 'verifwait.ejs');
            //res.sendFile('/api/users/verificacion-wait');            
            //location.assign('http://localhost:3000/api/users/verificacion-wait')
            //location.assign('/api/users/verificacion-wait')
            //window.location.assign('http://localhost:3000/api/users/verificacion-wait')            
            //window.location.assign('/api/users/verificacion-wait')                        
            //res.render('verifwait')            
        }).catch(err =>{
            console.log("No ha funcionado")
            res.json(err);
            //const persona = req.body;
            //res.render('/', {persona:persona, validacion: false});
        })        
        //redirect('/api/users/verificacion-wait');
        //redirect('http://localhost:3000/api/users/verificacion-wait')
      })();      
      
});

//********************************************************************************
					//Funcion de Pruebas
//********************************************************************************
/*
router.post('/', (req, res)=>{
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
          //console.log(req.body.correo);
          //NodemailFunction(req.body.correo).catch(console.error);;            
          //res.json(user)  //original
          res.render('verifwait')
          //__dirname = '/api/users/verificacion-wait'
          //console.log(__dirname + 'verifwait.ejs');
          //res.sendFile('/api/users/verificacion-wait');            
          //location.assign('http://localhost:3000/api/users/verificacion-wait')
          //location.assign('/api/users/verificacion-wait')
          //window.location.assign('http://localhost:3000/api/users/verificacion-wait')            
          //window.location.assign('/api/users/verificacion-wait')                        
          //res.render('verifwait')            
      }).catch(err =>{
          console.log("No ha funcionado")
          res.json(err);
          //const persona = req.body;
          //res.render('/', {persona:persona, validacion: false});
      })        
      //redirect('/api/users/verificacion-wait');
      //redirect('http://localhost:3000/api/users/verificacion-wait')
    })();      
    
});
*/




module.exports = router;