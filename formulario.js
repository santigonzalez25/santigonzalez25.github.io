const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const lastNameInput = document.getElementById("lastName");
const dniInput = document.getElementById("dni");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Antes de enviar, valido
  if (!validateName(nameInput.value)) {
    alert("Por favor, introduzca un nombre válido");
    nameInput.focus();
  } else if (!validateName(lastNameInput.value)) {
    alert("Por favor, introduzca un apellido válido");
    lastNameInput.focus();
  } else if (!validateDni(dniInput.value)) {
    alert("Por favor, introduzca un documento válido");
    dniInput.focus();
  } else if (!validatePhone(phoneInput.value)) {
    alert("Por favor, introduzca un teléfono válido (10 números)");
    phoneInput.focus();
  } else if (!validateEmail(emailInput.value)) {
    alert("Por favor, introduzca un correo electrónico válido");
    emailInput.focus();
  } else {
    form.submit(); // Envio el formulario si todo está OK
    alert("¡Gracias por contactarte con nosotros! Recibirás nuestra respuesta pronto");
  }
});

function validateName(name) {
  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; // Solo letras, espacios y acentos
  return regex.test(name);
}

function validateDni(dni) {
  const regex = /^\d{8}$/; // 8 dígitos 
  return regex.test(dni);
}

function validatePhone(phone) {
  const regex = /^\d{10}$/; // 10 dígitos sin espacios ni otros caracteres
  return regex.test(phone);
}

function validateEmail(email) {
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/; // Verifica un formato de correo electrónico
  return regex.test(email);
}
