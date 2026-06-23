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
