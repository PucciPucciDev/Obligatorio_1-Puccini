// Archivo encargado de validar datos ingresados por el usuario.

// =========================
// VALIDACIONES GENERALES
// =========================

//Valida que el campo no este vacio.
function campoVacio(texto) {
    if (texto.trim() === "") {
      return true;
    }
    return false;
  }
  
  //Valida que el largo tenga minimo 5 caracteres.
  function largoMinimo(texto, cantidad) {
    if (texto.length >= cantidad) {
      return true;
    }
    return false;
  }
  
  // =========================
  // VALIDACIONES DE LOGIN
  // =========================
  
  function validarLogin(usuario, contrasena) {
    if (campoVacio(usuario)) {
      return "Debe ingresar el usuario.";
    }
    if (campoVacio(contrasena)) {
      return "Debe ingresar la contraseña.";
    }
    return "";
  }
  
  // =========================
  // VALIDACIONES DE REGISTRO
  // Requisitos para el registro de postulantes:
  // - El usuario debe tener mínimo 5 caracteres.
  // - El sistema no diferencia mayúsculas y minúsculas en el usuario.
  // - La contraseña debe tener mínimo 5 caracteres.
  // - La contraseña debe contener al menos:
  //      * Una letra mayúscula.
  //      * Una letra minúscula.
  //      * Un número.
  // - El postulante debe seleccionar:
  //      * Nivel de experiencia.
  //      * Área de interés.
  // =========================
  
  function tieneMayuscula(texto) {
    for (let i = 0; i < texto.length; i++) {
      let letra = texto.charAt(i);
      if (letra >= "A" && letra <= "Z") {
        return true;
      }
    }
    return false;
  }
  
  function tieneMinuscula(texto) {
    for (let i = 0; i < texto.length; i++) {
      let letra = texto.charAt(i);
      if (letra >= "a" && letra <= "z") {
        return true;
      }
    }
    return false;
  }
  
  function tieneNumero(texto) {
    for (let i = 0; i < texto.length; i++) {
      let letra = texto.charAt(i);
      if (letra >= "0" && letra <= "9") {
        return true;
      }
    }
    return false;
  }
  
  function validarContrasenaRegistro(contrasena) {
    if (!largoMinimo(contrasena, 5)) {
      return "La contraseña debe tener mínimo 5 caracteres.";
    }
    if (!tieneMayuscula(contrasena)) {
      return "La contraseña debe tener al menos una mayúscula.";
    }
    if (!tieneMinuscula(contrasena)) {
      return "La contraseña debe tener al menos una minúscula.";
    }
    if (!tieneNumero(contrasena)) {
      return "La contraseña debe tener al menos un número.";
    }
    return "";
  }
  
  function validarRegistro(
    usuario,
    contrasena,
    nombreCompleto,
    experiencia,
    area
  ) {
    if (campoVacio(usuario)) {
      return "Debe ingresar un usuario.";
    }
    if (!largoMinimo(usuario, 5)) {
      return "El usuario debe tener mínimo 5 caracteres.";
    }
    if (campoVacio(contrasena)) {
      return "Debe ingresar una contraseña.";
    }
    let errorContrasena = validarContrasenaRegistro(contrasena);
    if (errorContrasena !== "") {
      return errorContrasena;
    }
    if (campoVacio(nombreCompleto)) {
      return "Debe ingresar el nombre completo.";
    }
    if (campoVacio(experiencia)) {
      return "Debe seleccionar un nivel de experiencia.";
    }
    if (campoVacio(area)) {
      return "Debe seleccionar un área de interés.";
    }
    return "";
  }
  