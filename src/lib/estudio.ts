// ⚠️ DATOS DE DEMOSTRACIÓN (ficticios) — solo para mostrar cómo queda la landing armada.
// Reemplazar TODO con los datos reales del perfil de Google de cada cliente.
export const estudio = {
  nombre: "Estudio Rico & Asociados",
  rubro: "Estudio jurídico",
  titular: "Dra. María Fernanda Rico",
  matricula: "Tombo N° 45.712, CPACF",
  direccion: "Av. Corrientes 1234, Piso 5°",
  ciudad: "Buenos Aires, CABA",
  telefono: "(011) 4567-8901",
  telefonoLink: "+541145678901",
  whatsapp: "5491145678901",
  mensajeWhatsapp: "Hola, quiero consultar por un tema legal.",
  horarios: [
    { dia: "Lunes a viernes", horas: "9:00 a 19:00" },
    { dia: "Sábados", horas: "9:00 a 13:00" },
  ],
  valoracion: 4.9 as number | null,
  cantidadResenas: 87 as number | null,
  mapaEmbedUrl: "", // URL "Insertar mapa" de Google Maps
  redes: [] as { nombre: string; url: string }[],
  areas: [
    { icono: "users", titulo: "Derecho de Familia", texto: "Divorcios, régimen de convivencia, alimentos y cuotas complementarias, con acompañamiento humano en cada etapa." },
    { icono: "briefcase", titulo: "Derecho Laboral", texto: "Despidos, trabas indemnizatorias, accidentes de trabajo y reclamos ante el Ministerio de Trabajo." },
    { icono: "home", titulo: "Derecho Inmobiliario", texto: "Contratos de locación, boletos de compraventa, usucapión y conflictos entre condóminos." },
    { icono: "shield", titulo: "Derecho Penal", texto: "Defensa en causas penales, finales de expediencia y acompañamiento desde la primera declaración." },
    { icono: "file", titulo: "Sucesiones y Testamentarias", texto: "Inicios, declaratorias de herederos y partición de bienes, con gestión completa de la documentación." },
    { icono: "scale", titulo: "Derecho Civil y Comercial", texto: "Contratos, cobros de deudas, daños y perjuicios, y resolución de conflictos entre particulares y empresas." },
  ],
  resenas: [
    { autor: "Gabriel Sosa", texto: "Excelente atención. Me llevaron un caso laboral con mucho orden y paciencia, siempre explicándome todo en criollo. Recomendadísimos." },
    { autor: "Lucía Ferrari", texto: "Muy profesionales. Resolvieron la sucesión de mi papá sin que tenga que viajar a Buenos Aires, todo por WhatsApp y a tiempo." },
    { autor: "Martín Quiroga", texto: "Honestos y claros desde la primera consulta. Te dicen qué se puede y qué no, sin vueltas ni promesas raras. Gracias por tanto." },
  ],
};

export const waLink = () =>
  `https://wa.me/${estudio.whatsapp}?text=${encodeURIComponent(estudio.mensajeWhatsapp)}`;
