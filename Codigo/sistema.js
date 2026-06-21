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
}