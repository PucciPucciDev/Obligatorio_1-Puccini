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

  let postulante4 = new Postulante(
    sistema.proximoIdPostulante++,
    "lucasdev",
    "Lucas123",
    "Lucas Martinez",
    "Junior",
    "Tecnología"
  );

  let postulante5 = new Postulante(
    sistema.proximoIdPostulante++,
    "mariaux",
    "Maria123",
    "Maria Fernandez",
    "Semi-Senior",
    "Diseño"
  );

  let postulante6 = new Postulante(
    sistema.proximoIdPostulante++,
    "carlitos",
    "Carlos123",
    "Carlos Rodriguez",
    "Senior",
    "Marketing"
  );

  let postulante7 = new Postulante(
    sistema.proximoIdPostulante++,
    "sofiiadmin",
    "Sofia123",
    "Sofia Gomez",
    "Junior",
    "Administración"
  );

  let postulante8 = new Postulante(
    sistema.proximoIdPostulante++,
    "diegotech",
    "Diego123",
    "Diego Alvarez",
    "Semi-Senior",
    "Tecnología"
  );

  let postulante9 = new Postulante(
    sistema.proximoIdPostulante++,
    "valentinaux",
    "Vale123",
    "Valentina Castro",
    "Senior",
    "Diseño"
  );

  let postulante10 = new Postulante(
    sistema.proximoIdPostulante++,
    "martinmkt",
    "Martin123",
    "Martin Suarez",
    "Junior",
    "Marketing"
  );

  let postulante11 = new Postulante(
    sistema.proximoIdPostulante++,
    "floradmin",
    "Flor123",
    "Florencia Diaz",
    "Semi-Senior",
    "Administración"
  );

  let postulante12 = new Postulante(
    sistema.proximoIdPostulante++,
    "nahuelit",
    "Nahuel123",
    "Nahuel Pereira",
    "Senior",
    "Tecnología"
  );

  let postulante13 = new Postulante(
    sistema.proximoIdPostulante++,
    "camidesign",
    "Cami123",
    "Camila Torres",
    "Junior",
    "Diseño"
  );

  let postulante14 = new Postulante(
    sistema.proximoIdPostulante++,
    "brunomkt",
    "Bruno123",
    "Bruno Silva",
    "Semi-Senior",
    "Marketing"
  );

  let postulante15 = new Postulante(
    sistema.proximoIdPostulante++,
    "lauraadm",
    "Laura123",
    "Laura Medina",
    "Senior",
    "Administración"
  );

  sistema.agregarPostulante(postulante1);
  sistema.agregarPostulante(postulante2);
  sistema.agregarPostulante(postulante3);
  sistema.agregarPostulante(postulante4);
  sistema.agregarPostulante(postulante5);
  sistema.agregarPostulante(postulante6);
  sistema.agregarPostulante(postulante7);
  sistema.agregarPostulante(postulante8);
  sistema.agregarPostulante(postulante9);
  sistema.agregarPostulante(postulante10);
  sistema.agregarPostulante(postulante11);
  sistema.agregarPostulante(postulante12);
  sistema.agregarPostulante(postulante13);
  sistema.agregarPostulante(postulante14);
  sistema.agregarPostulante(postulante15);

  // =========================
  // OFERTAS LABORALES
  // =========================

  let oferta1 = new OfertaLaboral(
    sistema.generarIdOferta(),
    "Frontend Developer",
    "Mercado Libre",
    "Desarrollo de interfaces web modernas con React.",
    "Junior",
    "Tecnología",
    12,
    3,
    true,
    "Activa"
  );

  let oferta2 = new OfertaLaboral(
    sistema.generarIdOferta(),
    "Backend Node.js",
    "Globant",
    "Desarrollo y mantenimiento de APIs REST.",
    "Semi-Senior",
    "Tecnología",
    8,
    2,
    true,
    "Activa"
  );

  let oferta3 = new OfertaLaboral(
    sistema.generarIdOferta(),
    "Diseñador UX/UI",
    "Microsoft",
    "Diseño de experiencias e interfaces digitales.",
    "Junior",
    "Diseño",
    6,
    1,
    false,
    "Activa"
  );

  let oferta4 = new OfertaLaboral(
    sistema.generarIdOferta(),
    "Analista Administrativo",
    "IBM",
    "Gestión administrativa y documentación interna.",
    "Junior",
    "Administración",
    10,
    4,
    false,
    "Activa"
  );

  let oferta5 = new OfertaLaboral(
    sistema.generarIdOferta(),
    "Marketing Digital",
    "Google",
    "Administración de campañas publicitarias.",
    "Semi-Senior",
    "Marketing",
    5,
    2,
    true,
    "Activa"
  );

  let oferta6 = new OfertaLaboral(
    sistema.generarIdOferta(),
    "QA Tester",
    "Oracle",
    "Pruebas manuales y automatizadas de software.",
    "Junior",
    "Tecnología",
    7,
    3,
    false,
    "Activa"
  );

  let oferta7 = new OfertaLaboral(
    sistema.generarIdOferta(),
    "Community Manager",
    "Meta",
    "Gestión de redes sociales y contenido digital.",
    "Junior",
    "Marketing",
    4,
    2,
    false,
    "Activa"
  );

  let oferta8 = new OfertaLaboral(
    sistema.generarIdOferta(),
    "Desarrollador React",
    "Amazon",
    "Desarrollo frontend para plataformas web.",
    "Semi-Senior",
    "Tecnología",
    9,
    2,
    true,
    "Activa"
  );

  let oferta9 = new OfertaLaboral(
    sistema.generarIdOferta(),
    "Help Desk",
    "Accenture",
    "Soporte técnico y resolución de incidencias.",
    "Junior",
    "Tecnología",
    15,
    5,
    false,
    "Activa"
  );

  let oferta10 = new OfertaLaboral(
    sistema.generarIdOferta(),
    "Asistente Contable",
    "PwC",
    "Control y registro de documentación contable.",
    "Junior",
    "Administración",
    6,
    2,
    false,
    "Activa"
  );

  let oferta11 = new OfertaLaboral(
    sistema.generarIdOferta(),
    "Analista de Datos",
    "Spotify",
    "Análisis y visualización de información empresarial.",
    "Senior",
    "Tecnología",
    3,
    1,
    true,
    "Activa"
  );

  let oferta12 = new OfertaLaboral(
    sistema.generarIdOferta(),
    "Soporte IT",
    "Samsung",
    "Mantenimiento y soporte de infraestructura tecnológica.",
    "Semi-Senior",
    "Tecnología",
    8,
    3,
    false,
    "Activa"
  );

  let oferta13 = new OfertaLaboral(
    sistema.generarIdOferta(),
    "Diseñador Gráfico",
    "Adobe",
    "Diseño gráfico para campañas digitales.",
    "Junior",
    "Diseño",
    5,
    2,
    true,
    "Activa"
  );

  let oferta14 = new OfertaLaboral(
    sistema.generarIdOferta(),
    "Especialista SEO",
    "Netflix",
    "Optimización SEO y posicionamiento web.",
    "Semi-Senior",
    "Marketing",
    4,
    1,
    false,
    "Activa"
  );

  let oferta15 = new OfertaLaboral(
    sistema.generarIdOferta(),
    "Administrador de Sistemas",
    "Intel",
    "Administración y monitoreo de servidores.",
    "Senior",
    "Tecnología",
    2,
    1,
    true,
    "Activa"
  );

  let oferta16 = new OfertaLaboral(
    sistema.generarIdOferta(),
    "Data Entry",
    "Deloitte",
    "Ingreso y control de datos administrativos.",
    "Junior",
    "Administración",
    10,
    4,
    false,
    "Activa"
  );

  let oferta17 = new OfertaLaboral(
    sistema.generarIdOferta(),
    "Analista Funcional",
    "SAP",
    "Relevamiento y análisis de requerimientos funcionales.",
    "Semi-Senior",
    "Tecnología",
    5,
    2,
    true,
    "Activa"
  );

  let oferta18 = new OfertaLaboral(
    sistema.generarIdOferta(),
    "Desarrollador Java",
    "Oracle",
    "Desarrollo backend de aplicaciones empresariales.",
    "Senior",
    "Tecnología",
    4,
    2,
    true,
    "Activa"
  );

  let oferta19 = new OfertaLaboral(
    sistema.generarIdOferta(),
    "Asistente de Marketing",
    "Coca-Cola",
    "Apoyo en campañas y análisis de mercado.",
    "Junior",
    "Marketing",
    7,
    3,
    false,
    "Activa"
  );

  let oferta20 = new OfertaLaboral(
    sistema.generarIdOferta(),
    "Administrador de Base de Datos",
    "IBM",
    "Administración y mantenimiento de bases de datos.",
    "Senior",
    "Tecnología",
    3,
    1,
    true,
    "Activa"
  );

  sistema.agregarOferta(oferta1);
  sistema.agregarOferta(oferta2);
  sistema.agregarOferta(oferta3);
  sistema.agregarOferta(oferta4);
  sistema.agregarOferta(oferta5);
  sistema.agregarOferta(oferta6);
  sistema.agregarOferta(oferta7);
  sistema.agregarOferta(oferta8);
  sistema.agregarOferta(oferta9);
  sistema.agregarOferta(oferta10);
  sistema.agregarOferta(oferta11);
  sistema.agregarOferta(oferta12);
  sistema.agregarOferta(oferta13);
  sistema.agregarOferta(oferta14);
  sistema.agregarOferta(oferta15);
  sistema.agregarOferta(oferta16);
  sistema.agregarOferta(oferta17);
  sistema.agregarOferta(oferta18);
  sistema.agregarOferta(oferta19);
  sistema.agregarOferta(oferta20);

  // =========================
  // POSTULACIONES
  // =========================

  let postulacion1 = new Postulacion(
    sistema.generarIdPostulacion(),
    1,
    "JOB_OFFER_1",
    "Pendiente"
  );
  let postulacion2 = new Postulacion(
    sistema.generarIdPostulacion(),
    2,
    "JOB_OFFER_2",
    "Pendiente"
  );
  let postulacion3 = new Postulacion(
    sistema.generarIdPostulacion(),
    3,
    "JOB_OFFER_3",
    "Pendiente"
  );
  let postulacion4 = new Postulacion(
    sistema.generarIdPostulacion(),
    1,
    "JOB_OFFER_4",
    "Pendiente"
  );
  let postulacion5 = new Postulacion(
    sistema.generarIdPostulacion(),
    2,
    "JOB_OFFER_5",
    "Pendiente"
  );
  let postulacion6 = new Postulacion(
    sistema.generarIdPostulacion(),
    3,
    "JOB_OFFER_6",
    "Pendiente"
  );
  let postulacion7 = new Postulacion(
    sistema.generarIdPostulacion(),
    1,
    "JOB_OFFER_7",
    "Aceptada"
  );
  let postulacion8 = new Postulacion(
    sistema.generarIdPostulacion(),
    2,
    "JOB_OFFER_8",
    "Aceptada"
  );
  let postulacion9 = new Postulacion(
    sistema.generarIdPostulacion(),
    3,
    "JOB_OFFER_9",
    "Aceptada"
  );
  let postulacion10 = new Postulacion(
    sistema.generarIdPostulacion(),
    1,
    "JOB_OFFER_10",
    "Aceptada"
  );
  let postulacion11 = new Postulacion(
    sistema.generarIdPostulacion(),
    2,
    "JOB_OFFER_11",
    "Aceptada"
  );
  let postulacion12 = new Postulacion(
    sistema.generarIdPostulacion(),
    3,
    "JOB_OFFER_12",
    "Aceptada"
  );
  let postulacion13 = new Postulacion(
    sistema.generarIdPostulacion(),
    1,
    "JOB_OFFER_13",
    "Rechazada"
  );
  let postulacion14 = new Postulacion(
    sistema.generarIdPostulacion(),
    2,
    "JOB_OFFER_14",
    "Rechazada"
  );
  let postulacion15 = new Postulacion(
    sistema.generarIdPostulacion(),
    3,
    "JOB_OFFER_15",
    "Rechazada"
  );
  let postulacion16 = new Postulacion(
    sistema.generarIdPostulacion(),
    1,
    "JOB_OFFER_16",
    "Rechazada"
  );
  let postulacion17 = new Postulacion(
    sistema.generarIdPostulacion(),
    2,
    "JOB_OFFER_17",
    "Rechazada"
  );
  let postulacion18 = new Postulacion(
    sistema.generarIdPostulacion(),
    3,
    "JOB_OFFER_18",
    "Rechazada"
  );
  let postulacion19 = new Postulacion(
    sistema.generarIdPostulacion(),
    1,
    "JOB_OFFER_19",
    "Pendiente"
  );
  let postulacion20 = new Postulacion(
    sistema.generarIdPostulacion(),
    2,
    "JOB_OFFER_20",
    "Pendiente"
  );

  sistema.agregarPostulacion(postulacion1);
  sistema.agregarPostulacion(postulacion2);
  sistema.agregarPostulacion(postulacion3);
  sistema.agregarPostulacion(postulacion4);
  sistema.agregarPostulacion(postulacion5);
  sistema.agregarPostulacion(postulacion6);
  sistema.agregarPostulacion(postulacion7);
  sistema.agregarPostulacion(postulacion8);
  sistema.agregarPostulacion(postulacion9);
  sistema.agregarPostulacion(postulacion10);
  sistema.agregarPostulacion(postulacion11);
  sistema.agregarPostulacion(postulacion12);
  sistema.agregarPostulacion(postulacion13);
  sistema.agregarPostulacion(postulacion14);
  sistema.agregarPostulacion(postulacion15);
  sistema.agregarPostulacion(postulacion16);
  sistema.agregarPostulacion(postulacion17);
  sistema.agregarPostulacion(postulacion18);
  sistema.agregarPostulacion(postulacion19);
  sistema.agregarPostulacion(postulacion20);
}
