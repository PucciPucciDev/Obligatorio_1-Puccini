// Archivo principal de la aplicación.
// Se encarga de iniciar el sistema y conectar los botones con sus funciones.

let sistema = new Sistema();

// Guarda el usuario que inició sesión actualmente.
let usuarioLogueado = null;
// Guarda si el usuario logueado es postulante o administrador.
let tipoUsuarioLogueado = "";

window.addEventListener("load", inicio);

function inicio() {
  precargarDatos();
  cargarEventos();
  mostrarLogin();
}

// Conecta los botones del HTML con las funciones principales del sistema.
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
 document.querySelector("#btnAdminCrearOferta").addEventListener("click", mostrarFormularioCrearOferta);
 document.querySelector("#btnAdminVerPostulaciones").addEventListener("click", mostrarPostulacionesPendientesAdmin);
 document.querySelector("#btnAdminEstadisticas").addEventListener("click", mostrarEstadisticasAdmin);
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

// Función que permite al postulante logueado postularse a una oferta laboral.
function postularme(idOferta) {
  // Verifica que el postulante no se haya postulado antes a la misma oferta.
  if (sistema.postulanteYaPostulado(usuarioLogueado.id, idOferta)) {
    alert("Ya te postulaste a esta oferta.");
    return;
  }
  // Crea una nueva postulación en estado pendiente.
  let nuevaPostulacion = new Postulacion(
      sistema.generarIdPostulacion(),
      usuarioLogueado.id,
      idOferta,
      "Pendiente"
  );
  // Agrega la postulación al sistema.
  sistema.agregarPostulacion(nuevaPostulacion);

  alert("Postulación realizada correctamente.");

   // Actualiza la sección de ofertas luego de postularse.
  mostrarSeccionOfertas();
}

// Función utilizada por el administrador para crear una nueva oferta laboral.
function crearOferta() {
  let titulo = document.querySelector("#txtTituloOferta").value;
  let empresa = document.querySelector("#txtEmpresaOferta").value;
  let descripcion = document.querySelector("#txtDescripcionOferta").value;
  let nivel = document.querySelector("#slcNivelOferta").value;
  let area = document.querySelector("#slcAreaOferta").value;
  let vacantes = Number(document.querySelector("#txtVacantesOferta").value);
  let destacada = document.querySelector("#chkDestacada").checked;

  // Validaciones básicas.
  if (
      titulo === "" ||
      empresa === "" ||
      descripcion === "" ||
      nivel === "" ||
      area === "" ||
      vacantes <= 0
  ) {
      alert("Complete todos los datos.");
      return;
  }

  // Crea la nueva oferta.
  let nuevaOferta = new OfertaLaboral(
      sistema.proximoIdOferta++,
      titulo,
      empresa,
      descripcion,
      nivel,
      area,
      vacantes,
      destacada,
      "Activa"
  );

  // Agrega la oferta al sistema.
  sistema.agregarOferta(nuevaOferta);
  alert("Oferta creada exitosamente.");
  mostrarFormularioCrearOferta();
}

// Función que permite al administrador aceptar una postulación pendiente.
function aceptarPostulacion(idPostulacion) {
  let postulacion = sistema.buscarPostulacionPorId(idPostulacion);
  if (postulacion !== null) {
      postulacion.estado = "Aceptada";
      let oferta = sistema.buscarOfertaPorId(postulacion.idOferta);
      oferta.vacantes--;
      alert("Postulación aceptada correctamente.");
      mostrarPostulacionesPendientesAdmin();
  }
}

// Función que permite al administrador rechazar una postulación pendiente.
function rechazarPostulacion(idPostulacion) {
  let postulacion = sistema.buscarPostulacionPorId(idPostulacion);
  if (postulacion !== null) {
      postulacion.estado = "Rechazada";
      alert("Postulación rechazada correctamente.");
      mostrarPostulacionesPendientesAdmin();
  }
}