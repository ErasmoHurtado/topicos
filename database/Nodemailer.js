const nodemailer = require("nodemailer");
const { nodemailuser } = require('../config')

async function envioCorreo(email) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    //let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: nodemailuser.user, // generated ethereal user
        pass: nodemailuser.pass,  // generated ethereal password
      },
    });

    var texto =  GenerarCodigoAleatorio();   

    const msg = {
      from: '"Prueba sobre utilizacion Nodemailder con Ethereal" <pruebaNodeMailEthe@example.com>', // sender address
      //to: "pruebaRecibido@example.com", // list of receivers
      to: email, // list of receivers
      subject: "Prueba de envio de un email", // Subject line
      //text: "Hola como estar tu", // plain text body
      text: texto, // plain text body
      //html: "<b>Hello world?</b>", // html body
    }

    // send mail with defined transport object
    const info = await transporter.sendMail(msg);
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
  //Este es el que envia el archivo
  //envioCorreo().catch(console.error);

  function GenerarCodigoAleatorio(){
      let num = parseInt(Math.random()*10000000000000) 
      var res = "Tu codigo de verificacion es el siguiente: " + num + " , con este numero puedes ir a verificar tu login.";
      return JSON.stringify(res);
      //console.log(res);
  }

  //GenerarCodigoAleatorio()
  //var textoEnviar = JSON.stringify(GenerarCodigoAleatorio())

  module.exports = envioCorreo;