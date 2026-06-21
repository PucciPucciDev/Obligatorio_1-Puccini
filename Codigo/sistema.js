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
}
