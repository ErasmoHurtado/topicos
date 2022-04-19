const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	ci: /^\d{7,14}$/, // 7 a 14 numeros.
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	usuario: false,
	password: false,
	correo: false,
	nombre: false,
	ci: false,
	telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
			break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
			break;
		case "password2":
			validarPassword2();
			break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
			break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
			break;
		case "ci":
			validarCampo(expresiones.ci, e.target, 'ci');
			break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
			break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if (expresion.test(input.value)) {
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if (inputPassword1.value !== inputPassword2.value) {
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

/*
formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	//Esto es comentado por que no uso terminos y condiciones
	//const terminos = document.getElementById('terminos'); //Esto iria en el if: && terminos.checked
	if (campos.usuario && campos.password && campos.correo && campos.nombre && campos.ci && campos.telefono) {
		//formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});

		document.querySelectorAll('.formulario__mensaje-activo').forEach((icono) => {
			icono.classList.remove('formulario__mensaje-activo');
		});

		//Enviamos los datos por el metodo POST
		
				
		const formData = new FormData(formulario);
		const searchParams = new URLSearchParams();

		for (const pair of formData){
			searchParams.append(pair[0], pair[1]);
		}


		fetch('/api/users', {
			method: 'POST',			
			//
			//headers: {
				//'Content-Type': 'application/x-www-form-urlencoded',
			//},
									
			body: searchParams
		}).then(response => response.json())
			.then(formData => {
				//console.log('Success:', formData);
				console.log('Success:', "Exito, fueron enviados los datos del formData");
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
		console.log('me estas haciendo un click');
	}
});


*/



//********************************************************************************
					//Funcion de Pruebas
//********************************************************************************



/*
function VerificarFrontEnd(){		
	//Esto es comentado por que no uso terminos y condiciones
	//const terminos = document.getElementById('terminos'); //Esto iria en el if: && terminos.checked
	if (campos.usuario && campos.password && campos.correo && campos.nombre && campos.ci && campos.telefono) {
		//formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});

		document.querySelectorAll('.formulario__mensaje-activo').forEach((icono) => {
			icono.classList.remove('formulario__mensaje-activo');
		});

		//Enviamos los datos por el metodo POST
		
		/*		
		const formData = new FormData(formulario);
		const searchParams = new URLSearchParams();

		for (const pair of formData){
			searchParams.append(pair[0], pair[1]);
		}


		fetch('/api/users', {
			method: 'POST',			
			//
			//headers: {
				//'Content-Type': 'application/x-www-form-urlencoded',
			//},
									
			body: searchParams
		}).then(response => response.json())
			.then(formData => {
				//console.log('Success:', formData);
				console.log('Success:', "Exito, fueron enviados los datos del formData");
			})
			.catch((error) => {
				console.error('Error:', error);
			});

		
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
		console.log('me estas haciendo un click');
	}
};

module.exports = VerificarFrontEnd;
*/
