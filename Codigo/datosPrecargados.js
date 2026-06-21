// Archivo encargado de realizar la precarga inicial de datos del sistema.
// Atencion: Este codigo fue generado por ChatGPT.

function precargarDatos() {

    // =========================
    // ADMINISTRADORES
    // =========================

    let admin1 = new Admin(
        sistema.proximoIdAdmin++,
        "Carlos Rodriguez",
        "admin1",
        "Admin123"
    );

    let admin2 = new Admin(
        sistema.proximoIdAdmin++,
        "Maria Gonzalez",
        "admin2",
        "Admin123"
    );

    let admin3 = new Admin(
        sistema.proximoIdAdmin++,
        "Lucia Fernandez",
        "admin3",
        "Admin123"
    );

    sistema.agregarAdmin(admin1);
    sistema.agregarAdmin(admin2);
    sistema.agregarAdmin(admin3);

    // =========================
    // POSTULANTES
    // =========================

    let postulante1 = new Postulante(
        sistema.proximoIdPostulante++,
        "juan123",
        "Juan123",
        "Juan Perez",
        "Junior",
        "Tecnología"
    );

    let postulante2 = new Postulante(
        sistema.proximoIdPostulante++,
        "ana456",
        "Ana123",
        "Ana Lopez",
        "Semi-Senior",
        "Diseño"
    );

    let postulante3 = new Postulante(
        sistema.proximoIdPostulante++,
        "pedro789",
        "Pedro123",
        "Pedro Silva",
        "Senior",
        "Marketing"
    );

    sistema.agregarPostulante(postulante1);
    sistema.agregarPostulante(postulante2);
    sistema.agregarPostulante(postulante3);

    // =========================
    // OFERTAS LABORALES
    // =========================

    let oferta1 = new OfertaLaboral(
        sistema.generarIdOferta(),
        "Desarrollador Frontend",
        "TechSoft",
        "Desarrollo de interfaces web.",
        "Junior",
        "Tecnología",
        10,
        3,
        true,
        "Activa"
    );

    let oferta2 = new OfertaLaboral(
        sistema.generarIdOferta(),
        "Diseñador UX/UI",
        "CreativeStudio",
        "Diseño de experiencia de usuario.",
        "Semi-Senior",
        "Diseño",
        8,
        2,
        false,
        "Activa"
    );

    sistema.agregarOferta(oferta1);
    sistema.agregarOferta(oferta2);

    // =========================
    // POSTULACIONES
    // =========================

    let postulacion1 = new Postulacion(
        sistema.generarIdPostulacion(),
        postulante1.id,
        oferta1.id,
        "Pendiente"
    );

    let postulacion2 = new Postulacion(
        sistema.generarIdPostulacion(),
        postulante2.id,
        oferta2.id,
        "Aceptada"
    );

    sistema.agregarPostulacion(postulacion1);
    sistema.agregarPostulacion(postulacion2);
}