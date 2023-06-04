
let primero = document.querySelector("form input");
primero.focus();
let reg_correo = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/; // Verifica un formato de correo electrónico
let reg_telefono = /^\d{10}$/; // 10 dígitos sin espacios ni otros carácteres


function validar() {
  let f_nombre = document.querySelector("#f_nombre");
  f_nombre.classList.remove("error");


  let f_apellido = document.querySelector("#f_apellido");
  f_apellido.classList.remove("error");
  let f_telefono = document.querySelector("#f_telefono");
  f_telefono.classList.remove("error");


  let f_mensaje = document.querySelector("#f_mensaje");
  f_mensaje.classList.remove("error");
  let f_email = document.querySelector("#f_email");
  f_email.classList.remove("error");
  let f_humano = document.querySelector("#f_humano");
  f_humano.parentNode.classList.remove("error");
  let lta_errores = document.querySelector("#errores");
  lta_errores.innerHTML = "";
  lta_errores.style.display = "none";
  let lta_mensajes = document.querySelector("#mensajes");
  let hubo_error = false;


  if (f_nombre.value.trim() == "") {
    f_nombre.classList.add("error");
    let p = document.createElement("p");
    p.innerHTML = "Falta su nombre";
    lta_errores.appendChild(p);
    hubo_error = true;
  }

  if (f_apellido.value.trim() == "") {
    f_apellido.classList.add("error");
    let p = document.createElement("p");
    p.innerHTML = "Falta su apellido";
    lta_errores.appendChild(p);
    hubo_error = true;
  }

  if (f_telefono.value.trim() == "") {
    f_telefono.classList.add("error");
    let p = document.createElement("p");
    p.innerHTML = "Falta su teléfono";
    lta_errores.appendChild(p);
    hubo_error = true;
  }

  if (f_mensaje.value.trim() == "") {
    f_mensaje.classList.add("error");
    let p = document.createElement("p");
    p.innerHTML = "Falta su mensaje";
    lta_errores.appendChild(p);
    hubo_error = true;

  } else if (f_mensaje.value.length > 200) {
    f_mensaje.classList.add("error");
    let p = document.createElement("p");
    p.innerHTML = "Longitud máxima del mensaje: 200";
    lta_errores.appendChild(p);
    hubo_error = true;
  }

  if (!f_humano.checked) {
    f_humano.parentNode.classList.add("error");
    let p = document.createElement("p");
    p.innerHTML = "¿Es usted un robot?";
    lta_errores.appendChild(p);
    hubo_error = true;
  }

  if (f_email.value.trim() != "" && !reg_correo.test(f_email.value)) {
    //if(!/^([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)?$/.test(f_email.value)){
    f_email.classList.add("error");
    let p = document.createElement("p");
    p.innerHTML = "Email inválido";
    lta_errores.appendChild(p);
    hubo_error = true;
  }

  if (f_telefono.value.trim() != "" && !reg_telefono.test(f_telefono.value)) {
    f_telefono.classList.add("error");
    let p = document.createElement("p");
    p.innerHTML = "Teléfono inválido (10 digitos sin espacios)";
    lta_errores.appendChild(p);
    hubo_error = true;
  }

  if (hubo_error) {
    lta_errores.style.display = "initial";
    return false;
  } else {
    let p = document.createElement("p");
    if (f_email.value != "") {
      p.innerHTML = f_nombre.value + " " + f_apellido.value + " (" + f_email.value + ") dijo:<br/>" + f_mensaje.value + ".";
    } else {
      p.innerHTML = f_nombre.value + " " + f_apellido.value + " dijo:<br/>" + f_mensaje.value + ".";
    }
    lta_mensajes.appendChild(p);
    document.forms["f_contacto"].reset();
    let primero = document.querySelector("form input");
    primero.focus();
  }

  return false;
}