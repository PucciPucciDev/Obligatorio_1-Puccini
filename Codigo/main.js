// Archivo principal de la aplicación.
// Se encarga de iniciar el sistema y conectar los botones con sus funciones.

let sistema = new Sistema();
let usuarioLogueado = null;
let tipoUsuarioLogueado = "";
window.addEventListener("load", inicio);

function inicio() {
  precargarDatos();
  cargarEventos();
  mostrarLogin();
}

function cargarEventos() {
  document.querySelector("#btnLogin").addEventListener("click", Login);
  document.querySelector("#btnRegistro").addEventListener("click", registrarPostulante);
  document.querySelector("#btnIrRegistro").addEventListener("click", mostrarRegistro);
  document.querySelector("#btnIrLogin").addEventListener("click", mostrarLogin);
  document.querySelector("#btnCerrarSesionPostulante").addEventListener("click", cerrarSesion);
  document.querySelector("#btnCerrarSesionAdmin").addEventListener("click", cerrarSesion);
  document.querySelector("#btnVerOfertas").addEventListener("click", mostrarSeccionOfertas);
 document.querySelector("#btnVerPostulaciones").addEventListener("click", mostrarSeccionPostulaciones);
 document.querySelector("#btnVerDestacadas").addEventListener("click", mostrarDestacadas);
}

// Funcion para el login de usuarios
function Login() {
  let usuario = document.querySelector("#txtLoginUsuario").value;
  let contrasena = document.querySelector("#txtLoginContrasena").value;

  // Verifica si existe algún error en los datos ingresados.
  let mensajeError = validarLogin(usuario, contrasena);
  if (mensajeError !== "") {
    alert(mensajeError);
    return;
  }

  // Busca si existe un postulante con el usuario ingresado.
  let postulanteEncontrado = sistema.buscarPostulante(usuario);
  if (
    postulanteEncontrado !== null &&
    postulanteEncontrado.contrasena === contrasena
  ) {
    alert("Bienvenido postulante " + postulanteEncontrado.nombreCompleto);
    usuarioLogueado = postulanteEncontrado;
    tipoUsuarioLogueado = "postulante";
    mostrarPostulante();
    mostrarSeccionOfertas();
    return;
  }

  // Busca si existe un administrador con el usuario ingresado.
  let adminEncontrado = sistema.buscarAdmin(usuario);
  if (
    adminEncontrado !== null &&
    adminEncontrado.contrasena === contrasena
  ) {
    alert("Bienvenido administrador " + adminEncontrado.nombre);
    usuarioLogueado = adminEncontrado;
    tipoUsuarioLogueado = "admin";
    mostrarAdmin();
    return;
  }
  alert("Usuario o contraseña incorrectos.");
}

// Funcion para el registro de usuarios Postulantes
function registrarPostulante() {
  let usuario = document.querySelector("#txtRegistroUsuario").value;
  let contrasena = document.querySelector("#txtRegistroContrasena").value;
  let nombreCompleto = document.querySelector("#txtRegistroNombre").value;
  let experiencia = document.querySelector("#slcRegistroExperiencia").value;
  let area = document.querySelector("#slcRegistroArea").value;

  // Valida los datos ingresados en el registro.
  let mensajeError = validarRegistro(
    usuario,
    contrasena,
    nombreCompleto,
    experiencia,
    area
  );
  if (mensajeError !== "") {
    alert(mensajeError);
    return;
  }

  // Verifica que el usuario no exista previamente.
  if (sistema.existeUsuarioPostulante(usuario)) {
    alert("El nombre de usuario ya existe.");
    return;
  }

  // Crea nuevo postulante.
  let nuevoPostulante = new Postulante(
    sistema.proximoIdPostulante++,
    usuario,
    contrasena,
    nombreCompleto,
    experiencia,
    area
  );

  // Agregar el postulante al sistema.
  sistema.agregarPostulante(nuevoPostulante);
  alert("Registro realizado correctamente.");

  // Limpia los campos del formulario.
  document.querySelector("#txtRegistroUsuario").value = "";
  document.querySelector("#txtRegistroContrasena").value = "";
  document.querySelector("#txtRegistroNombre").value = "";
  document.querySelector("#slcRegistroExperiencia").value = "";
  document.querySelector("#slcRegistroArea").value = "";

  // Redirige nuevamente al login.
  mostrarLogin();
}

function postularme(idOferta) {
  if (sistema.postulanteYaPostulado(usuarioLogueado.id, idOferta)) {
    alert("Ya te postulaste a esta oferta.");
    return;
  }
  let nuevaPostulacion = new Postulacion(
      sistema.generarIdPostulacion(),
      usuarioLogueado.id,
      idOferta,
      "Pendiente"
  );
  sistema.agregarPostulacion(nuevaPostulacion);

  alert("Postulación realizada correctamente.");
  mostrarSeccionOfertas();
}
