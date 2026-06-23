// Clase principal encargada de administrar y centralizar toda la información del sistema:
// postulantes, administradores, ofertas laborales y postulaciones.

class Sistema {
  constructor() {
    this.postulantes = [];
    this.admins = [];
    this.ofertas = [];
    this.postulaciones = [];

    this.proximoIdPostulante = 1;
    this.proximoIdAdmin = 1;
    this.proximoIdOferta = 1;
    this.proximoIdPostulacion = 1;
  }

  // Métodos utilizados para agregar y gestionar los datos dentro del sistema.
  agregarPostulante(postulante) {
    this.postulantes.push(postulante);
  }

  agregarAdmin(admin) {
    this.admins.push(admin);
  }

  agregarOferta(oferta) {
    this.ofertas.push(oferta);
  }

  agregarPostulacion(postulacion) {
    this.postulaciones.push(postulacion);
  }

  // Funciones utilizadas para generar IDs automáticos, como indica la letra.
  generarIdOferta() {
    let id = "JOB_OFFER_" + this.proximoIdOferta;
    this.proximoIdOferta++;
    return id;
  }

  generarIdPostulacion() {
    let id = "JOB_" + this.proximoIdPostulacion;
    this.proximoIdPostulacion++;
    return id;
  }

  // Funciones de búsqueda de usuarios dentro del sistema.
  buscarPostulante(usuario) {
    let usuarioBuscado = usuario.toLowerCase();
    for (let i = 0; i < this.postulantes.length; i++) {
      let postulanteActual = this.postulantes[i];
      if (postulanteActual.usuario.toLowerCase() === usuarioBuscado) {
        return postulanteActual;
      }
    }
    return null;
  }

  buscarAdmin(usuario) {
    let usuarioBuscado = usuario.toLowerCase();
    for (let i = 0; i < this.admins.length; i++) {
      let adminActual = this.admins[i];
      if (adminActual.usuario.toLowerCase() === usuarioBuscado) {
        return adminActual;
      }
    }
    return null;
  }

  // Verifica si ya existe un postulante con ese nombre de usuario.
  existeUsuarioPostulante(usuario) {
    let existe = false;
    for (let i = 0; i < this.postulantes.length; i++) {
      if (this.postulantes[i].usuario.toLowerCase() === usuario.toLowerCase()) {
        existe = true;
      }
    }
    return existe;
  }

  // Obtiene las ofertas disponibles para un postulante.
  obtenerOfertasParaPostulante(postulante) {
    let ofertasDisponibles = [];
    for (let i = 0; i < this.ofertas.length; i++) {
      let ofertaActual = this.ofertas[i];
      // Verifica que la oferta esté activa.
      if (ofertaActual.estado === "Activa") {
        // Verifica que la oferta sea compatible con la experiencia del postulante.
        if (ofertaActual.nivel === postulante.experiencia) {
          ofertasDisponibles.push(ofertaActual);
        }
      }
    }
    return ofertasDisponibles;
  }

  // Verifica si el postulante ya se postuló anteriormente a esa oferta.
  postulanteYaPostulado(idPostulante, idOferta) {
    for (let i = 0; i < this.postulaciones.length; i++) {
      let postulacion = this.postulaciones[i];
      if (
        postulacion.idPostulante === idPostulante &&
        postulacion.idOferta === idOferta
      ) {
        return true;
      }
    }
    return false;
  }

  // Busca una oferta laboral usando su identificador.
  buscarOfertaPorId(idOferta) {
    for (let i = 0; i < this.ofertas.length; i++) {
      if (this.ofertas[i].id === idOferta) {
        return this.ofertas[i];
      }
    }
    return null;
  }

  // Busca un postulante usando su identificador.
  buscarPostulantePorId(idPostulante) {
    for (let i = 0; i < this.postulantes.length; i++) {
      if (this.postulantes[i].id === idPostulante) {
        return this.postulantes[i];
      }
    }
    return null;
  }

  // Busca una postulación usando su identificador.
  buscarPostulacionPorId(idPostulacion) {
    for (let i = 0; i < this.postulaciones.length; i++) {
      if (this.postulaciones[i].id == idPostulacion) {
        return this.postulaciones[i];
      }
    }
    return null;
  }

  // Cuenta cuántas ofertas existen según su estado.
  contarOfertasPorEstado(estado) {
    let contador = 0;
    for (let i = 0; i < this.ofertas.length; i++) {
      if (this.ofertas[i].estado === estado) {
        contador++;
      }
    }
    return contador;
  }

  // Cuenta postulaciones de una oferta según su estado.
  contarPostulacionesOfertaEstado(idOferta, estado) {
    let contador = 0;
    for (let i = 0; i < this.postulaciones.length; i++) {
      if (
        this.postulaciones[i].idOferta === idOferta &&
        this.postulaciones[i].estado === estado
      ) {
        contador++;
      }
    }
    return contador;
  }
}
