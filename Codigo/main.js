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
  document.querySelector("#btnAdminVerOfertas").addEventListener("click", mostrarOfertasAdmin);
}

// Muestra mensajes en pantalla.
function mostrarMensaje(idMensaje, texto, tipo) {
  let mensaje = document.querySelector(idMensaje);
  mensaje.innerHTML = texto;
  if (tipo === "exito") {
    mensaje.className = "mensajeExito";
  } else {
    mensaje.className = "mensajeError";
  }
}

// Limpia mensajes anteriores.
function limpiarMensaje(idMensaje) {
  document.querySelector(idMensaje).innerHTML = "";
  document.querySelector(idMensaje).className = "";
}

// Funcion para el login de usuarios.
function Login() {
  limpiarMensaje("#msgLogin");
  let usuario = document.querySelector("#txtLoginUsuario").value;
  let contrasena = document.querySelector("#txtLoginContrasena").value;
  // Verifica si existe algún error en los datos ingresados.
  let mensajeError = validarLogin(usuario, contrasena);
  if (mensajeError !== "") {
    mostrarMensaje("#msgLogin", mensajeError, "error");
    return;
  }
  // Busca si existe un postulante con el usuario ingresado.
  let postulanteEncontrado = sistema.buscarPostulante(usuario);
  if (
    postulanteEncontrado !== null &&
    postulanteEncontrado.contrasena === contrasena
  ) {
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
    usuarioLogueado = adminEncontrado;
    tipoUsuarioLogueado = "admin";
    mostrarAdmin();

    return;
  }
  mostrarMensaje("#msgLogin", "Usuario o contraseña incorrectos.", "error");
}

// Funcion para el registro de usuarios postulantes.
function registrarPostulante() {
  limpiarMensaje("#msgRegistro");

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
    mostrarMensaje("#msgRegistro", mensajeError, "error");
    return;
  }
  // Verifica que el usuario no exista previamente.
  if (sistema.existeUsuarioPostulante(usuario)) {
    mostrarMensaje("#msgRegistro", "El nombre de usuario ya existe.", "error");
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

  // Agrega el postulante al sistema.
  sistema.agregarPostulante(nuevoPostulante);
  mostrarMensaje("#msgRegistro", "Registro completado correctamente.", "exito");
  // Limpia los campos del formulario.
  document.querySelector("#txtRegistroUsuario").value = "";
  document.querySelector("#txtRegistroContrasena").value = "";
  document.querySelector("#txtRegistroNombre").value = "";
  document.querySelector("#slcRegistroExperiencia").value = "";
  document.querySelector("#slcRegistroArea").value = "";
}

// Función que permite al postulante logueado postularse a una oferta laboral.
function postularme(idOferta) {
  // Verifica que el postulante no se haya postulado antes a la misma oferta.
  if (sistema.postulanteYaPostulado(usuarioLogueado.id, idOferta)) {
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
  mostrarFormularioCrearOferta();
}

// Función que permite al administrador aceptar una postulación pendiente.
function aceptarPostulacion(idPostulacion) {
  let postulacion = sistema.buscarPostulacionPorId(idPostulacion);
  if (postulacion !== null) {
    postulacion.estado = "Aceptada";
    let oferta = sistema.buscarOfertaPorId(postulacion.idOferta);
    oferta.vacantes--;
    mostrarPostulacionesPendientesAdmin();
  }
}

// Función que permite al administrador rechazar una postulación pendiente.
function rechazarPostulacion(idPostulacion) {
  let postulacion = sistema.buscarPostulacionPorId(idPostulacion);
  if (postulacion !== null) {
    postulacion.estado = "Rechazada";
    mostrarPostulacionesPendientesAdmin();
  }
}

// Cierra una oferta laboral sin eliminarla del sistema.
function cerrarOferta(idOferta) {
  let oferta = sistema.buscarOfertaPorId(idOferta);
  if (oferta !== null) {
    oferta.estado = "Cerrada";
    mostrarOfertasAdmin();
  }
}

// Guarda los cambios realizados sobre una oferta laboral.
function guardarEdicionOferta() {
  let idOferta = document.querySelector("#txtEditarIdOferta").value;
  let oferta = sistema.buscarOfertaPorId(idOferta);
  let titulo = document.querySelector("#txtEditarTituloOferta").value;
  let empresa = document.querySelector("#txtEditarEmpresaOferta").value;
  let descripcion = document.querySelector("#txtEditarDescripcionOferta").value;
  let nivel = document.querySelector("#slcEditarNivelOferta").value;
  let area = document.querySelector("#slcEditarAreaOferta").value;
  let limite = Number(document.querySelector("#txtEditarLimiteOferta").value);
  let vacantes = Number(document.querySelector("#txtEditarVacantesOferta").value);
  let destacada = document.querySelector("#chkEditarDestacada").checked;

  if(
    titulo === "" ||
    empresa === "" ||
    descripcion === "" ||
    nivel === "" ||
    area === "" ||
    limite <= 0 ||
    vacantes <= 0 ||
    limite < vacantes
  ){
    return;
  }
  if(oferta !== null){
    oferta.titulo = titulo;
    oferta.empresa = empresa;
    oferta.descripcion = descripcion;
    oferta.nivel = nivel;
    oferta.area = area;
    oferta.limitePostulaciones = limite;
    oferta.vacantes = vacantes;
    oferta.destacada = destacada;
    mostrarOfertasAdmin();
  }
}