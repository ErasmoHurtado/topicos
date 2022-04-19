
//const { Sequelize, Model, DataTypes } = require('sequelize');
//const { database } = require('../../config');

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db2')

/*
const sequelize = new Sequelize(
    database2.database, 
    database2.username, 
    database2.password, {
        host: database2.localhost,
        dialect: 'postgres'
  });
*/
function GenerarCodigoAleatorioCampo2(){
  let num = Math.trunc(Math.random()*10000000000000)   
  return JSON.stringify(num);
  //console.log(res);
}

class User extends Model {}
User.init({
  usuario: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      //Esta es una manera de usar funciones para validar cosas
      //Son validaciones personalizadas
      customValidator(value) {
        if (value === "") {
          throw new Error("El campo no puede estar vacio ");
        }
      },
      isAlphanumeric: {
        args: true,
        msg: "El nombre solo puede contener letras y numeros"
      },
      len : {
        args: [4, 16],
        msg: "El nombre tiene que ser entre 4 y 16 caracteres"
      }
    }    
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      //Esta es una manera de usar funciones para validar cosas
      //Son validaciones personalizadas
      customValidator(value) {
        if (value === "") {
          throw new Error("El campo no puede estar vacio ");
        }
      },
      len : {
        args: [4, 12],
        msg: "El nombre tiene que ser entre 1 y 40 caracteres"
      }
    }    
  },  
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      customValidator(value) {
        if (value === "") {
          throw new Error("El campo no puede estar vacio ");
        }
      },
      isEmail:{
        args: true,
        msg: "El campo tiene que ser un correo valido"
      }
    }
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      //Esta es una manera de usar funciones para validar cosas
      //Son validaciones personalizadas
      customValidator(value) {
        if (value === "") {
          throw new Error("El campo no puede estar vacio ");
        }
      },
      len : {
        args: [1, 40],
        msg: "El nombre tiene que ser entre 1 y 40 caracteres"
      }
    }    
  },
  ci: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      //Esta es una manera de usar funciones para validar cosas
      //Son validaciones personalizadas
      customValidator(value) {
        if (value === 0) {
          throw new Error("El campo no puede estar vacio ");
        }
      },
      isNumeric: {
        args: true,
        msg: "El valor debe ser numerico"
      },
      len : {
        args: [7, 14],
        msg: "El nombre tiene que ser entre 7 y 14 caracteres"
      }
    }    
  },
  telefono: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      //Esta es una manera de usar funciones para validar cosas
      //Son validaciones personalizadas
      customValidator(value) {
        if (value === 0) {
          throw new Error("El campo no puede estar vacio ");
        }
      },
      isNumeric: {
        args: true,
        msg: "El valor debe ser numerico"
      },
      len : {
        args: [7, 14],
        msg: "El nombre tiene que ser entre 7 y 14 caracteres"
      }
    }    
  },
  
  verificado: {    
    type: DataTypes.INTEGER,
    defaultValue: 0  
  },  
  
  CodVerif: {    
    type: DataTypes.STRING,    
    defaultValue: GenerarCodigoAleatorioCampo2()
  },
   


  /*
  //Si el rol es 0 es usuario y si es 1 es administrador.
  role: {
    type: DataTypes.INTEGER,
    defaultValue: 0  
  }
  */
}, { sequelize, modelName: 'user' });

module.exports = User;
