function validarNombre(){
	var nombrecampo = document.getElementById('Nombre');
	var validacionombre = /^[A-Za-z\s]+$/;
	var errorNombre = document.getElementById('NombreError');

	if(nombrecampo.value == 0){
		errorNombre.innerHTML = "Rellene este campo";
		nombrecampo.classList.add("error");
		nombrecampo.classList.add("errorIcon");
		return false; 
	}
	else if(validacionombre.test(nombrecampo.value)){
		nombrecampo.classList.remove("error");
		nombrecampo.classList.remove("errorIcon");
		errorNombre.innerHTML = "";
		nombrecampo.classList.add("success");
		nombrecampo.classList.add("successIcon");
		return true; 
	}
	else {
		errorNombre.innerHTML = "Nombre inválido";
		nombrecampo.classList.add("error");
		nombrecampo.classList.add("errorIcon");
		return false; }
	}

function validarEmail(){
	var campoemail = document.getElementById('Email');
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
	var errorEmail = document.getElementById('emailError');

	if(campoemail.value == 0){
		errorEmail.innerHTML = "Rellene este campo";
		campoemail.classList.add("error");
		campoemail.classList.add("errorIcon");
		return false; 
	}
	else if(validEmail.test(campoemail.value) ){
		campoemail.classList.remove("error");
		campoemail.classList.remove("errorIcon");
		errorEmail.innerHTML = "";
		campoemail.classList.add("success");
		campoemail.classList.add("successIcon");
		return true; 
	}
	else {
		errorEmail.innerHTML = "Email inválido";
		campoemail.classList.add("error");
		campoemail.classList.add("errorIcon");
		return false; 
	}
} 

function validarClave(){
	var campocontra = document.getElementById('Clave');
	var validclave = /^[\s\S]{1,8}$/;
	var errorclave = document.getElementById('ClaveError');

	if(campocontra.value == 0){
		errorclave.innerHTML = "Rellene este campo";
		campocontra.classList.add("error");
		campocontra.classList.add("errorIcon");
		return false; }
	else if(validPassword.test(campocontra.value) ){
		campocontra.classList.remove("error");
		campocontra.classList.remove("errorIcon");
		errorclave.innerHTML = "";
		campocontra.classList.add("success");
		campocontra.classList.add("successIcon");
		return true; 
	}
	else {	
		errorclave.innerHTML = "No debe tener más de 8 caracteres";
		campocontra.classList.add("success");
		return false; }
}

function validarConfirm(){
	var campocontra = document.getElementById('Clave');
	var campoconfirm = document.getElementById('Conifrmacion');
	var errorConfirm = document.getElementById('ConfirmacionError');

	if(campoconfirm.value == 0){
		errorConfirm.innerHTML = "Rellene este campo";
		campoconfirm.classList.add("error");
		campoconfirm.classList.add("errorIcon");
		return false;
	 }
	else if (campocontra.value == campoconfirm.value ){
		campoconfirm.classList.remove("error");
		campoconfirm.classList.remove("errorIcon");
		errorConfirm.innerHTML = "";
		campoconfirm.classList.add("success");
		campoconfirm.classList.add("successIcon");
		return true; 
	}
	else {
		errorConfirm.innerHTML = "Las contraseñas no coinciden";
		campoconfirm.classList.add("error");
		campoconfirm.classList.add("errorIcon");
		return false; 
	} 
}

function borderButton(){
	var borderButton = document.getElementById('button');
	borderButton.onmouseover = () => {
		borderButton.classList.add('borderColor'); 	}
	borderButton.onmouseout = () => {	
		borderButton.classList.remove('borderColor'); 	}
}
borderButton()

function validarFormulario(){

	if (validarConfirm() && validarClave() && validarEmail() && validarNombre()){
		alert("La inscripción ha sido correcta");
		return true; }
	else {
		return false; }
}