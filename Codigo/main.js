// Archivo principal de la aplicación.
// Se encarga de iniciar el sistema y conectar los botones con sus funciones.

let sistema = new Sistema();
window.addEventListener("load", inicio);

function inicio() {
    precargarDatos();
    cargarEventos();
}

function cargarEventos() {
    document.querySelector("#btnLogin")
    .addEventListener("click", Login);
    document.querySelector("#btnRegistro")
    .addEventListener("click", registrarPostulante);
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

    // Verifica que el postulante exista y que la contraseña coincida.
    let postulanteEncontrado = sistema.buscarPostulante(usuario);
    if (postulanteEncontrado !== null &&
        postulanteEncontrado.contrasena === contrasena) {
        alert("Bienvenido postulante " + postulanteEncontrado.nombreCompleto);
        return;
    }

    // Verifica que el administrador exista y que la contraseña coincida.
    let adminEncontrado = sistema.buscarAdmin(usuario);
    if (adminEncontrado !== null &&
        adminEncontrado.contrasena === contrasena) {
        alert("Bienvenido administrador " + adminEncontrado.nombre);
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
    let mensajeError = validarRegistro(usuario, contrasena, nombreCompleto, experiencia, area);
    if (mensajeError !== "") {
        alert(mensajeError);
        return;
    }

    // Verifica que el usuario no exista previamente.
    let usuarioExistente = sistema.buscarPostulante(usuario);
    if (usuarioExistente !== null) {
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
}