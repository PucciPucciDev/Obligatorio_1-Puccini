//Crar las clases de usuarios Postulante y Admin, la clase Oferta y la clase Postulacion.

class Postulante {
    constructor(id, usuario, contrasena, nombreCompleto, experiencia, area) {
        this.id = id;
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.nombreCompleto = nombreCompleto;
        this.experiencia = experiencia;
        this.area = area;
    }
}

class Admin {
    constructor(id, nombre, usuario, contrasena) {
        this.id = id;
        this.nombre = nombre;
        this.usuario = usuario;
        this.contrasena = contrasena;
    }
}

class OfertaLaboral {
    constructor(id, titulo, empresa, descripcion, nivel, area, limitePostulaciones, vacantes, destacada, estado) {
        this.id = id;
        this.titulo = titulo;
        this.empresa = empresa;
        this.descripcion = descripcion;
        this.nivel = nivel;
        this.area = area;
        this.limitePostulaciones = limitePostulaciones;
        this.vacantes = vacantes;
        this.destacada = destacada;
        this.estado = estado;
    }
}

class Postulacion {
    constructor(id, idPostulante, idOferta, estado) {
        this.id = id;
        this.idPostulante = idPostulante;
        this.idOferta = idOferta;
        this.estado = estado;
    }
}