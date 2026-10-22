// Datos del estudio. Reemplazar cada valor entre corchetes con los datos reales del perfil de Google.
export const estudio = {
  nombre: "[Nombre del Estudio]",
  rubro: "Estudio jurídico",
  titular: "[Nombre del abogado/a titular]",
  matricula: "[Tomo y folio / matrícula]",
  direccion: "[Dirección completa]",
  ciudad: "[Ciudad, Provincia]",
  telefono: "[Teléfono]",
  telefonoLink: "", // ej: +5491100000000
  whatsapp: "", // solo números con código de país, ej: 5491100000000
  mensajeWhatsapp: "Hola, quiero consultar por un tema legal.",
  horarios: [
    { dia: "Lunes a viernes", horas: "[Horario]" },
    { dia: "Sábados", horas: "[Horario]" },
  ],
  valoracion: null as number | null, // ej: 4.9
  cantidadResenas: null as number | null, // ej: 87
  mapaEmbedUrl: "", // URL "Insertar mapa" de Google Maps
  redes: [] as { nombre: string; url: string }[],
  areas: [
    { icono: "users", titulo: "[Área de práctica 1]", texto: "[Descripción breve según el perfil]" },
    { icono: "briefcase", titulo: "[Área de práctica 2]", texto: "[Descripción breve según el perfil]" },
    { icono: "home", titulo: "[Área de práctica 3]", texto: "[Descripción breve según el perfil]" },
    { icono: "shield", titulo: "[Área de práctica 4]", texto: "[Descripción breve según el perfil]" },
    { icono: "file", titulo: "[Área de práctica 5]", texto: "[Descripción breve según el perfil]" },
    { icono: "scale", titulo: "[Área de práctica 6]", texto: "[Descripción breve según el perfil]" },
  ],
  resenas: [
    { autor: "[Nombre de quien opinó]", texto: "[Reseña textual de Google, copiada tal cual]" },
    { autor: "[Nombre de quien opinó]", texto: "[Reseña textual de Google, copiada tal cual]" },
    { autor: "[Nombre de quien opinó]", texto: "[Reseña textual de Google, copiada tal cual]" },
  ],
};

export const waLink = () =>
  `https://wa.me/${estudio.whatsapp}?text=${encodeURIComponent(estudio.mensajeWhatsapp)}`;
