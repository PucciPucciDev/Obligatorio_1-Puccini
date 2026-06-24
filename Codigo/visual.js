// Archivo encargado del manejo visual de la aplicación.

// Oculta todas las pantallas para luego mostrar solamente la que corresponda.
function ocultarPantallas(){
  document.querySelector("#pantallaLogin").style.display = "none";
  document.querySelector("#pantallaRegistro").style.display = "none";
  document.querySelector("#pantallaPostulante").style.display = "none";
  document.querySelector("#pantallaAdmin").style.display = "none";
}

// Muestra la pantalla de inicio de sesión.
function mostrarLogin(){
  ocultarPantallas();
  document.querySelector("#pantallaLogin").style.display = "flex";
}

// Muestra la pantalla de registro de postulantes.
function mostrarRegistro(){
  ocultarPantallas();
  document.querySelector("#pantallaRegistro").style.display = "flex";
}

// Muestra el panel principal del postulante.
function mostrarPostulante(){
  ocultarPantallas();
  document.querySelector("#pantallaPostulante").style.display = "block";
}

// Muestra el panel principal del administrador.
function mostrarAdmin(){
  ocultarPantallas();
  document.querySelector("#pantallaAdmin").style.display = "block";
}

// Cierra la sesión actual y limpia los campos del login.
function cerrarSesion(){
  mostrarLogin();
  document.querySelector("#txtLoginUsuario").value = "";
  document.querySelector("#txtLoginContrasena").value = "";
}

// Muestra la tabla de ofertas laborales disponibles para el postulante logueado.
function mostrarSeccionOfertas(){
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

// Carga en la tabla las ofertas compatibles con el postulante logueado.
function cargarTablaOfertasPostulante(){
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
function mostrarSeccionPostulaciones(){
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

// Carga las postulaciones del usuario logueado junto con su estado actual.
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

// Muestra las ofertas destacadas compatibles con el perfil del postulante.
function mostrarDestacadas(){
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

// Carga únicamente las ofertas destacadas, activas y compatibles con el postulante.
function cargarTablaDestacadas(){
  let tabla = document.querySelector("#tblDestacadas");
  tabla.innerHTML = "";

  for(let i = 0; i < sistema.ofertas.length; i++){
    let oferta = sistema.ofertas[i];
    // Verifica que la oferta destacada esté activa y sea compatible con la experiencia del postulante.
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

// Muestra el formulario que utiliza el administrador para crear ofertas laborales.
function mostrarFormularioCrearOferta(){
  let contenido = document.querySelector("#contenidoAdmin");

    contenido.innerHTML = 
    `
        <h2>Crear nueva oferta laboral</h2>

        <label>Título</label>
        <input type="text" id="txtTituloOferta">
        <label>Empresa</label>
        <input type="text" id="txtEmpresaOferta">
        <label>Descripción</label>
        <textarea id="txtDescripcionOferta"></textarea>
        <label>Nivel requerido</label>
        <select id="slcNivelOferta">
            <option value="">Seleccione...</option>
            <option value="Junior">Junior</option>
            <option value="Semi-Senior">Semi-Senior</option>
            <option value="Senior">Senior</option>
        </select>
        <label>Área</label>
        <select id="slcAreaOferta">
            <option value="">Seleccione...</option>
            <option value="Tecnología">Tecnología</option>
            <option value="Diseño">Diseño</option>
            <option value="Marketing">Marketing</option>
            <option value="Administración">Administración</option>
            <option value="Otros">Otros</option>
        </select>
        <label>Vacantes</label>
        <input type="number" id="txtVacantesOferta">
        <label>
            <input type="checkbox" id="chkDestacada">
            Oferta destacada
        </label>
        <br><br>
        <button id="btnCrearOferta">
            Crear oferta
        </button>
    `;

    document.querySelector("#btnCrearOferta").addEventListener("click", crearOferta);
}

//-------------------------------------------------------------------------//

// Muestra al administrador todas las postulaciones que todavía están pendientes.
function mostrarPostulacionesPendientesAdmin(){
  let contenido = document.querySelector("#contenidoAdmin");
  contenido.innerHTML = 
  `
      <h2>Postulaciones pendientes</h2>
      <table border="1">
          <thead>
              <tr>
                  <th>ID Postulación</th>
                  <th>Postulante</th>
                  <th>Oferta</th>
                  <th>Estado</th>
                  <th>Acciones</th>
              </tr>
          </thead>
          <tbody id="tblPostulacionesPendientes">
          </tbody>
      </table>
  `;

  cargarTablaPostulacionesPendientes();
}

// Muestra al administrador todas las ofertas del sistema.
function mostrarOfertasAdmin(){
    let contenido = document.querySelector("#contenidoAdmin");
    contenido.innerHTML = 
    `
      <h2>Listado de ofertas laborales</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Empresa</th>
            <th>Nivel</th>
            <th>Área</th>
            <th>Vacantes</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody id="tblOfertasAdmin">
        </tbody>
      </table>
    `;
    cargarTablaOfertasAdmin();
  }
  
  // Carga la tabla de ofertas para el administrador.
  function cargarTablaOfertasAdmin(){
    let tabla = document.querySelector("#tblOfertasAdmin");
    tabla.innerHTML = "";
    for (let i = 0; i < sistema.ofertas.length; i++) {
      let oferta = sistema.ofertas[i];
      tabla.innerHTML += 
      `
        <tr>
          <td>${oferta.id}</td>
          <td>${oferta.titulo}</td>
          <td>${oferta.empresa}</td>
          <td>${oferta.nivel}</td>
          <td>${oferta.area}</td>
          <td>${oferta.vacantes}</td>
          <td>${oferta.estado}</td>
          <td>
            <button onclick="mostrarFormularioEditarOferta('${oferta.id}')">
              Editar
            </button>
            <button onclick="cerrarOferta('${oferta.id}')">
              Cerrar
            </button>
          </td>
        </tr>
      `;
    }
  }

// Carga la tabla de postulaciones pendientes con botones para aceptar o rechazar.
function cargarTablaPostulacionesPendientes(){
  let tabla = document.querySelector("#tblPostulacionesPendientes");
  tabla.innerHTML = "";

  for (let i = 0; i < sistema.postulaciones.length; i++) {
      let postulacion = sistema.postulaciones[i];
      if (postulacion.estado === "Pendiente") {
          let postulante = sistema.buscarPostulantePorId(postulacion.idPostulante);
          let oferta = sistema.buscarOfertaPorId(postulacion.idOferta);
          tabla.innerHTML += 
          `
              <tr>
                  <td>${postulacion.id}</td>
                  <td>${postulante.nombreCompleto}</td>
                  <td>${oferta.titulo}</td>
                  <td>${postulacion.estado}</td>
                  <td>
                      <button onclick="aceptarPostulacion('${postulacion.id}')">
                          Aceptar
                      </button>

                      <button onclick="rechazarPostulacion('${postulacion.id}')">
                          Rechazar
                      </button>
                  </td>
              </tr>
          `;
      }
  }
}

// Muestra las estadísticas generales del sistema para el administrador.
function mostrarEstadisticasAdmin(){
  let contenido = document.querySelector("#contenidoAdmin");
  let totalActivas = sistema.contarOfertasPorEstado("Activa");
  let totalInactivas = sistema.contarOfertasPorEstado("Inactiva");
  let totalCerradas = sistema.contarOfertasPorEstado("Cerrada");
  let totalPostulantes = sistema.postulantes.length;
  let totalPostulaciones = sistema.postulaciones.length;
  contenido.innerHTML = 
  `
      <h2>Estadísticas generales</h2>
      <div class="tarjetasEstadisticas">
          <div class="tarjeta">
              <h3>Ofertas activas</h3>
              <p>${totalActivas}</p>
          </div>
          <div class="tarjeta">
              <h3>Ofertas inactivas</h3>
              <p>${totalInactivas}</p>
          </div>
          <div class="tarjeta">
              <h3>Ofertas cerradas</h3>
              <p>${totalCerradas}</p>
          </div>
          <div class="tarjeta">
              <h3>Postulantes</h3>
              <p>${totalPostulantes}</p>
          </div>
          <div class="tarjeta">
              <h3>Postulaciones</h3>
              <p>${totalPostulaciones}</p>
          </div>
      </div>
      <h2>Postulaciones por oferta</h2>
      <table border="1">
          <thead>
              <tr>
                  <th>Oferta</th>
                  <th>Pendientes</th>
                  <th>Aceptadas</th>
                  <th>Rechazadas</th>
                  <th>Total</th>
              </tr>
          </thead>
          <tbody id="tblEstadisticasOfertas">
          </tbody>
      </table>
  `;

  cargarTablaEstadisticasOfertas();
}

// Carga la tabla con el resumen de postulaciones por cada oferta laboral.
function cargarTablaEstadisticasOfertas(){
  let tabla = document.querySelector("#tblEstadisticasOfertas");
  tabla.innerHTML = "";

  for (let i = 0; i < sistema.ofertas.length; i++) {
      let oferta = sistema.ofertas[i];
      let pendientes = sistema.contarPostulacionesOfertaEstado(oferta.id, "Pendiente");
      let aceptadas = sistema.contarPostulacionesOfertaEstado(oferta.id, "Aceptada");
      let rechazadas = sistema.contarPostulacionesOfertaEstado(oferta.id, "Rechazada");
      let total = pendientes + aceptadas + rechazadas;
      tabla.innerHTML += 
      `
          <tr>
              <td>${oferta.titulo}</td>
              <td>${pendientes}</td>
              <td>${aceptadas}</td>
              <td>${rechazadas}</td>
              <td>${total}</td>
          </tr>
      `;
  }
}

// Muestra el formulario para editar una oferta existente.
function mostrarFormularioEditarOferta(idOferta){

    let oferta = sistema.buscarOfertaPorId(idOferta);
    let contenido = document.querySelector("#contenidoAdmin");
  
    contenido.innerHTML = 
    `
      <h2>Editar oferta laboral</h2>
      <input type="hidden" id="txtEditarIdOferta" value="${oferta.id}">
      <label>Título</label>
      <input type="text" id="txtEditarTituloOferta" value="${oferta.titulo}">
      <label>Empresa</label>
      <input type="text" id="txtEditarEmpresaOferta" value="${oferta.empresa}">
      <label>Descripción</label>
      <textarea id="txtEditarDescripcionOferta">${oferta.descripcion}</textarea>
      <label>Nivel requerido</label>
      <select id="slcEditarNivelOferta">
        <option value="Junior">Junior</option>
        <option value="Semi-Senior">Semi-Senior</option>
        <option value="Senior">Senior</option>
      </select>
      <label>Área</label>
      <select id="slcEditarAreaOferta">
        <option value="Tecnología">Tecnología</option>
        <option value="Diseño">Diseño</option>
        <option value="Marketing">Marketing</option>
        <option value="Administración">Administración</option>
        <option value="Otros">Otros</option>
      </select>
      <label>Límite de postulaciones</label>
      <input type="number" id="txtEditarLimiteOferta" value="${oferta.limitePostulaciones}">
      <label>Vacantes</label>
      <input type="number" id="txtEditarVacantesOferta" value="${oferta.vacantes}">
      <label>
        <input type="checkbox" id="chkEditarDestacada">
        Oferta destacada
      </label>
      <br><br>
      <button id="btnGuardarEdicionOferta">Guardar cambios</button>
      <button onclick="mostrarOfertasAdmin()">Volver</button>
    `;
  
    document.querySelector("#slcEditarNivelOferta").value = oferta.nivel;
    document.querySelector("#slcEditarAreaOferta").value = oferta.area;
    document.querySelector("#chkEditarDestacada").checked = oferta.destacada;
    document.querySelector("#btnGuardarEdicionOferta").addEventListener("click", guardarEdicionOferta);
  }