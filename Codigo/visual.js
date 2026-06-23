// Archivo encargado del manejo visual de la aplicación.

function ocultarPantallas() {
  document.querySelector("#pantallaLogin").style.display = "none";
  document.querySelector("#pantallaRegistro").style.display = "none";
  document.querySelector("#pantallaPostulante").style.display = "none";
  document.querySelector("#pantallaAdmin").style.display = "none";
}

function mostrarLogin() {
  ocultarPantallas();
  document.querySelector("#pantallaLogin").style.display = "flex";
}

function mostrarRegistro() {
  ocultarPantallas();
  document.querySelector("#pantallaRegistro").style.display = "flex";
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

// Aca se mostraran las ofertas en la pantalla usuario dentro del main.
function mostrarSeccionOfertas() {
  let contenido = document.querySelector("#contenidoPostulante");
  contenido.innerHTML = `
      <h2>Ofertas laborales disponibles</h2>

      <table border="1">
          <thead>
              <tr>
                  <th>Título</th>
                  <th>Empresa</th>
                  <th>Nivel</th>
                  <th>Área</th>
                  <th>Vacantes</th>
                  <th>Postularse</th>
              </tr>
          </thead>

          <tbody id="tblOfertasLaborales">
          </tbody>
      </table>
  `;
  cargarTablaOfertasPostulante();
}

// Con esta funcion cargaremos la tabla con Ofertas ya precargadas.
function cargarTablaOfertasPostulante() {
  let tabla = document.querySelector("#tblOfertasLaborales");
  tabla.innerHTML = "";

  let ofertas = sistema.obtenerOfertasParaPostulante(usuarioLogueado);
  for (let i = 0; i < ofertas.length; i++) {
    let oferta = ofertas[i];
    tabla.innerHTML += `
          <tr>
              <td>${oferta.titulo}</td>
              <td>${oferta.empresa}</td>
              <td>${oferta.nivel}</td>
              <td>${oferta.area}</td>
              <td>${oferta.vacantes}</td>
              <td>
                  <button onclick="postularme('${oferta.id}')">
                  Postularme
                  </button>
              </td>
          </tr>
      `;
  }
}

//-------------------------------------------------------------------------//

// Aca se mostraran las postulaciones del usuario Postulante.
function mostrarSeccionPostulaciones() {
  let contenido = document.querySelector("#contenidoPostulante");
  contenido.innerHTML = `
      <h2>Mis postulaciones</h2>
      <table border="1">
          <thead>
              <tr>
                  <th>Oferta</th>
                  <th>Empresa</th>
                  <th>Estado</th>
              </tr>
          </thead>
          <tbody id="tblMisPostulaciones">
          </tbody>
      </table>
  `;

  cargarTablaMisPostulaciones();
}

// Con esta funcion cargaremos la tabla de postulaciones del usuario Postulante.
// Podra ver todas con estado pendiente, aceptada o rechazada.
function cargarTablaMisPostulaciones() {
  let tabla = document.querySelector("#tblMisPostulaciones");
  tabla.innerHTML = "";

  for (let i = 0; i < sistema.postulaciones.length; i++) {
    let postulacion = sistema.postulaciones[i];
    if (postulacion.idPostulante === usuarioLogueado.id) {
      let oferta = sistema.buscarOfertaPorId(postulacion.idOferta);
      tabla.innerHTML += `
              <tr>
                  <td>${oferta.titulo}</td>
                  <td>${oferta.empresa}</td>
                  <td>${postulacion.estado}</td>
              </tr>
          `;
    }
  }
}

// Aca se mostraran las publicaciones destacadas en base a los datos del usuario Postulante.
function mostrarDestacadas() {
  let contenido = document.querySelector("#contenidoPostulante");
  contenido.innerHTML = `
      <h2>Ofertas destacadas</h2>
      <table border="1">
          <thead>
              <tr>
                  <th>Título</th>
                  <th>Empresa</th>
                  <th>Nivel</th>
                  <th>Área</th>
              </tr>
          </thead>
          <tbody id="tblDestacadas">
          </tbody>
      </table>
  `;

  cargarTablaDestacadas();
}

function cargarTablaDestacadas() {
  let tabla = document.querySelector("#tblDestacadas");
  tabla.innerHTML = "";

  for(let i = 0; i < sistema.ofertas.length; i++){
    let oferta = sistema.ofertas[i];
    // Que sea compatible con el usuario la propuesta destacada.
    if(
      oferta.destacada === true &&
      oferta.estado === "Activa" &&
      oferta.nivel === usuarioLogueado.experiencia){
      tabla.innerHTML += `
              <tr>
                  <td>${oferta.titulo}</td>
                  <td>${oferta.empresa}</td>
                  <td>${oferta.nivel}</td>
                  <td>${oferta.area}</td>
              </tr>
          `;
    }
  }
}
