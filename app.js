
const express = require('express')
const app = express()
const sequelize = require('./database/db')
//const User = require('./database/models/User')
//const router = require('./routes/users')
//const router = require('./routes/users')
//const body_parser = require('body-parser')
const nodemailer = require("nodemailer");



//Setting
const port = 3000

//Middleware
//para poder rellenar el req.body
//Osea cuando se manda cosas por un formulario web
app.use(express.json());
//app.use(express.urlencoded({extended: false}))
app.use(express.urlencoded({extended: true}))

//app.use(body_parser.json());
//app.use(body_parser.urlencoded({extended: true}))
//app.use(body_parser.urlencoded({extended: false}))



//Archivos estaticos
//Cargar CSS en nodejs
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'))
//app.use('/img', express.static(__dirname + 'public/img'))

//Set de views
//aqui se puede establecer el uso del conjunto de hojas ejs
app.set('views', './views');
app.set('view engine', 'ejs');

//Rutas
app.get('/', (req, res) => {  
  res.render('create');  
  //res.render('enviarParam');  
  //res.sendFile(__dirname + 'views/index.ejs')
  //next();
});

app.get('/api/users/create', (req, res) => {
  res.render('create');  
  //res.render('enviarParam');  
  //res.sendFile(__dirname + 'views/index.ejs')
  //next();
});

app.get('/api/users/verificacion-wait', (req, res) => {
  res.render('verifwait');    
});

app.get('/api/users/verificacion-success', (req, res) => {
  res.render('verifsuccess');    
});


app.use('/api/posts', require('./routes/posts'));
app.use('/api/users', require('./routes/users'));
app.use('/', require('./routes/users'));

app.use('/api/users/create', require('./routes/users'));

app.use('/api/users/verificacion-success', require('./routes/verif'));






//GenerarCodigoAleatorioCampo()
/*
function GenerarCodigoAleatorioCampo(){
  let num = Math.trunc(Math.random()*10000000000000)   
  return num;
  //console.log(res);
}
*/



/*
  app.post('/', (req, res) =>{
  //console.log(htmlData);
  //const router = require('./routes/users')  
    let formData = req.body;
    console.log(formData);
})
*/

//Arranque del servidor
app.listen(port, () => {
  console.log(`**La app ha arrancado en el puerto: http://localhost:${port}`)
  console.log(`**La app de creacion de usuario es: http://localhost:${port}/api/users/create`)
  console.log(`**La app de verificacion de usuario es: http://localhost:${port}/api/users/verificacion-wait`)

  //console.log(GenerarCodigoAleatorioCampo())
  
  //Conectarse a la Base de datos
  
  //Este solo esta autentificando la BD pero no la recreara
  sequelize.authenticate().then(() => {
      console.log("Nos hemos conectado a la base de datos")
  }).catch(error => {
    console.log('Se ha producido un error', error)
  })
  
  //Esta busca recrear la base de datos
  //force: true hace por default un DROP TABLES
  /*
  sequalize.sync({ force: false }).then(() => {
    console.log("Nos hemos conectado a la base de datos");
  }).catch(error => {
    console.log('Se ha producido un error', error);
  })
  */
});
