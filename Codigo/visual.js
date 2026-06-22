// Archivo encargado del manejo visual de la aplicación.

function ocultarPantallas() {
  document.querySelector("#pantallaLogin").style.display = "none";
  document.querySelector("#pantallaRegistro").style.display = "none";
  document.querySelector("#pantallaPostulante").style.display = "none";
  document.querySelector("#pantallaAdmin").style.display = "none";
}

function mostrarLogin() {
  ocultarPantallas();
  document.querySelector("#pantallaLogin").style.display = "block";
}

function mostrarRegistro() {
  ocultarPantallas();
  document.querySelector("#pantallaRegistro").style.display = "block";
}

function mostrarPostulante() {
  ocultarPantallas();
  document.querySelector("#pantallaPostulante").style.display = "block";
}

function mostrarAdmin() {
  ocultarPantallas();
  document.querySelector("#pantallaAdmin").style.display = "block";
}

function cerrarSesion() {
    mostrarLogin();
    document.querySelector("#txtLoginUsuario").value = "";
    document.querySelector("#txtLoginContrasena").value = "";
}