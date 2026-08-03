/* Catálogo de pantallas de CORA.
 *
 * Única fuente de verdad para el tablero (index.html) y el visor (pantalla.html).
 * Los `id` son los mismos valores que acepta la prop `startSection` de
 * `CORA App.dc.html`, y los `requiere` reflejan el mapa REQ de ese archivo.
 *
 * Si añades o quitas una pantalla en el diseño, actualiza también esta lista.
 */

var CORA_GROUPS = [
  { id: 'recomendador', label: '🟣 Recomendador', desc: 'El recorrido guiado: de un cuestionario inicial a una ruta académica elegida y su plan de acompañamiento.' },
  { id: 'academico',    label: '📚 Académico',    desc: 'Herramientas de estudio que el estudiante usa a diario una vez tiene su ruta.' },
  { id: 'ajustes',      label: '⚙️ Ajustes',      desc: 'Progreso, datos personales y preferencias de la cuenta.' }
];

var CORA_SCREENS = [
  {
    id: 'formulario', emoji: '⭕', label: 'Formulario', group: '🟣 Recomendador',
    desc: 'Cuestionario inicial que alimenta el motor de recomendación. Ofrece una opción rápida de 4 preguntas y guarda el avance automáticamente.',
    requiere: null
  },
  {
    id: 'mis-rutas', emoji: '📖', label: 'Mis Rutas', group: '🟣 Recomendador',
    desc: 'Las 7 carreras recomendadas, ordenadas por porcentaje de compatibilidad, con sus etiquetas y descripción.',
    requiere: 'formulario'
  },
  {
    id: 'ecosistema', emoji: '🌍', label: 'Ecosistema UC y CIE', group: '🟣 Recomendador',
    desc: 'Contexto institucional: 11.529 cursos, 80+ idiomas y 101 posgrados como complemento opcional a la carrera.',
    requiere: 'mis-rutas'
  },
  {
    id: 'malla', emoji: '📋', label: 'Elijo mi Ruta', group: '🟣 Recomendador',
    desc: 'Malla curricular por ciclos: créditos, tipo de curso, docente, horario y modalidad, con cursos electivos añadibles.',
    requiere: 'ecosistema'
  },
  {
    id: 'perfil-cora', emoji: '✨', label: 'Mi Perfil CoRA', group: '🟣 Recomendador',
    desc: 'Gráfico radar de 6 dimensiones — Aptitud, Gestión, Liderazgo, Determinación, Empatía y Flexibilidad — con recomendaciones.',
    requiere: 'malla'
  },
  {
    id: 'horizonte', emoji: '🌅', label: 'Veo mi Horizonte', group: '🟣 Recomendador',
    desc: 'Proyección laboral de la carrera elegida: la diferencia entre RUTA y HORIZONTE, y salarios por nivel de experiencia.',
    requiere: 'perfil-cora'
  },
  {
    id: 'acompanamiento', emoji: '⚠️', label: 'Acompañamiento', group: '🟣 Recomendador',
    desc: 'Plan personalizado para estudiantes en riesgo, con los tipos de apoyo disponibles: tutor, asesor y recursos.',
    requiere: 'horizonte'
  },

  {
    id: 'practico', emoji: '📝', label: 'Práctico para examen', group: '📚 Académico',
    desc: 'Generador de simulacros: se elige curso, temas y dificultad, y al terminar se revisa pregunta por pregunta.',
    requiere: 'acompanamiento'
  },
  {
    id: 'flashcards', emoji: '🎴', label: 'Mis flashcards', group: '📚 Académico',
    desc: 'Tarjetas de estudio para memorizar conceptos clave, con modo clásico y valoración por tarjeta.',
    requiere: 'acompanamiento'
  },
  {
    id: 'tutor', emoji: '👨‍🏫', label: 'Tutor CORA', group: '📚 Académico',
    desc: 'Chat de tutoría académica 24/7 que resuelve dudas y explica conceptos, diferenciado del rol de asesor.',
    requiere: 'acompanamiento'
  },

  {
    id: 'progreso', emoji: '📊', label: 'Mi progreso', group: '⚙️ Ajustes',
    desc: 'Avance por módulo, XP acumulada, racha de días y estadísticas detalladas del recorrido.',
    requiere: 'formulario'
  },
  {
    id: 'perfil', emoji: '👤', label: 'Perfil', group: '⚙️ Ajustes',
    desc: 'Información personal y académica del estudiante, con modo edición y sección de privacidad y datos.',
    requiere: 'formulario'
  },
  {
    id: 'configuracion', emoji: '⚙️', label: 'Configuración', group: '⚙️ Ajustes',
    desc: 'Accesibilidad (tamaño de texto), tema visual, notificaciones e información de ayuda.',
    requiere: 'formulario'
  }
];
