// Ejecutando Funciones
 
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
document.getElementById("btn_ingreso").addEventListener("click", registroLogin);
//registro
document.getElementById("btn_ingreso_2").addEventListener("click", registroDatos);
 
window.addEventListener("resize", anchoPage);
 
 
 
//Declaracion de variables
 
//Login
 
var inputM = document.querySelector(".mail_a");
var inputPa = document.querySelector(".ContraseñaA");
 
//Registro
 
var inputAddress = document.querySelector(".address");
var inputDocument = document.querySelector(".document");
var inputMail = document.querySelector(".mail");
var inputName = document.querySelector(".name");
var inputPhone = document.querySelector(".phone");
var inputSurname = document.querySelector(".surname");
var inputPassword = document.querySelector(".password");
 
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");
 
 
 
//Funciones
 
 
function anchoPage() {
 
    if (window.innerWidth > 850) {
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }
    else {
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
    }
}
 
anchoPage();
 
function iniciarSesion() {
    if (window.innerWidth > 850) {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "10px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    }
    else {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
}
 
function register() {
    if (window.innerWidth > 850) {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    }
    else {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }
 
}
 
 
 
 
    //get
 
function registroLogin(event)
{
    event.preventDefault();
    axios({
        method: 'get',
        url: 'https://cesde-f928b-default-rtdb.firebaseio.com/user.json'
    })
    .then(function (response) {
        const mail_A = response.data['-N1uuBpr2NLcFON5xIi9'].mail;
        //andres@gmail.com
        const password_A= response.data['-N1uuBpr2NLcFON5xIi9'].password;
        //12345
        //ID de validacion 
        console.log(mail_A);
        console.log(password_A);
 
        if (inputM.value == mail_A && inputPa.value == password_A)
        {
            window.open("./Soccer.html")
        }
        else
        {
            alert ("Datos errados");
        }
    });
}
 
 
 
//post
 
function registroDatos(event) {
    event.preventDefault();
    axios({
        method: 'post',
        url: 'https://cesde-f928b-default-rtdb.firebaseio.com/user.json',
        data:
        {
            address: inputAddress.value,
            document: inputDocument.value,
            mail: inputMail.value,
            name: inputName.value,
            password: inputPassword.value,
            phone: inputPhone.value,
            surname: inputSurname.value
        }
    }).then(function (response) {
        alert("Datos ingresados correctamente");
        console.log(response);
        window.open = "iniciarSesion";
    }).catch(function (error) {
        alert("Datos errados", error)
        console.log(error);
    })
};
