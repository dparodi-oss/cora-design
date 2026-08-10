/* Catálogo de pantallas de CoRA.
 *
 * Única fuente de verdad para el tablero (index.html) y el visor (pantalla.html).
 * Los `id` son los mismos valores que acepta la prop `startSection` de
 * `CORA App.dc.html`, y los `requiere` reflejan el mapa REQ de ese archivo.
 *
 * Si añades o quitas una pantalla en el diseño, actualiza también esta lista.
 */

var CORA_GROUPS = [
  { id: 'inicio',       label: '🏠 Inicio',       desc: 'La puerta de entrada a CoRA — fuera del recorrido del Recomendador.' },
  { id: 'recomendador', label: '🟣 Recomendador', desc: 'El recorrido guiado: de un cuestionario inicial a una ruta académica elegida y su plan de acompañamiento.' },
  { id: 'academico',    label: '📚 Académico',    desc: 'Herramientas de estudio que el estudiante usa a diario una vez tiene su ruta.' },
  { id: 'ajustes',      label: '⚙️ Ajustes',      desc: 'Progreso, datos personales y preferencias de la cuenta.' }
];

var CORA_SCREENS = [
  {
    id: 'inicio', emoji: '🏠', label: 'Inicio', group: '🏠 Inicio',
    desc: 'Qué es CoRA y el contexto académico del estudiante — el punto de partida antes del Recomendador.',
    requiere: null
  },
  {
    id: 'formulario', emoji: '⭕', label: 'CoRA me conoce', group: '🟣 Recomendador',
    desc: 'El comparador entre la versión completa y la rápida, y el cuestionario elegido, para alimentar el motor de recomendación.',
    requiere: null
  },
  {
    id: 'mis-rutas', emoji: '📖', label: 'Mis Rutas', group: '🟣 Recomendador',
    desc: 'Las rutas que devuelve el algoritmo, con sus asignaturas consultables antes de elegir y distinguiendo malla regular de ruta compuesta.',
    requiere: 'formulario'
  },
  {
    id: 'ecosistema', emoji: '🌍', label: 'Ecosistema CIE', group: '🟣 Recomendador',
    desc: 'CoRA recomienda primero cursos de continua, posgrado, instituto e idiomas; después se explora la oferta completa del CIE.',
    requiere: 'mis-rutas'
  },
  {
    id: 'malla', emoji: '📋', label: 'Elijo mi Ruta', group: '🟣 Recomendador',
    desc: 'Los 10 ciclos de la carrera, con las asignaturas de tu ruta mucho más resaltadas que la matrícula regular y los electivos.',
    requiere: 'ecosistema'
  },
  {
    id: 'perfil-cora', emoji: '✨', label: 'Mi Perfil CoRA', group: '🟣 Recomendador',
    desc: 'Cuestionario 18REST y perfil de identidad resultante: código, arquetipo, radar de 6 dimensiones y recomendaciones.',
    requiere: 'malla'
  },
  {
    id: 'horizonte', emoji: '🌅', label: 'Veo mi Horizonte', group: '🟣 Recomendador',
    desc: 'Proyección laboral de la carrera elegida: la diferencia entre RUTA y HORIZONTE, y salarios por nivel de experiencia.',
    requiere: 'perfil-cora'
  },
  {
    id: 'acompanamiento', emoji: '⚠️', label: 'Acompañamiento', group: '🟣 Recomendador',
    desc: 'Predictibilidad académica: cruza tus notas con el histórico de la asignatura, anticipa las que se te pueden complicar y propone plan y tutoría.',
    requiere: 'horizonte'
  },

  {
    id: 'tutor', emoji: '💬', label: 'Tutor CoRA', group: '📚 Académico',
    desc: 'Chat académico 24/7, con conciencia del sílabo y la semana del ciclo. Distinto del Asistente CoRA (widget flotante de ayuda general, ver pantalla Inicio).',
    requiere: 'acompanamiento'
  },
  {
    id: 'practico', emoji: '📝', label: 'Práctico para examen', group: '📚 Académico',
    desc: 'Generador de simulacros: se elige asignatura, temas y dificultad, y al terminar se revisa pregunta por pregunta.',
    requiere: 'acompanamiento'
  },
  {
    id: 'flashcards', emoji: '🎴', label: 'Mis flashcards', group: '📚 Académico',
    desc: 'Tarjetas de estudio para memorizar conceptos clave, con modo clásico y valoración por tarjeta.',
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
    desc: 'Tema claro/oscuro, notificaciones, reporte de problemas, soporte, términos y cierre de sesión individual o en todos los dispositivos.',
    requiere: 'formulario'
  }
];

/* Variantes visuales pendientes de decisión.
 *
 * Son la MISMA pantalla renderizada con una prop distinta, para poder
 * compararlas una al lado de otra en el tablero. Cuando se elija una,
 * se fija como valor por defecto de la prop y se borra este bloque.
 */
var CORA_VARIANTS = [
  {
    id: 'ctx-dashboard', screen: 'inicio', props: { contextVariant: 'dashboard' },
    emoji: '📊', label: 'Contexto · Dashboard',
    desc: 'Cuatro métricas en rejilla, barra de avance y chips con las notas de las últimas asignaturas. La más informativa.'
  },
  {
    id: 'ctx-tarjeta', screen: 'inicio', props: { contextVariant: 'tarjeta' },
    emoji: '🗂️', label: 'Contexto · Tarjeta',
    desc: 'Dos tarjetas enfrentadas: el ciclo en morado sólido y el detalle de notas al lado. La más jerárquica.'
  },
  {
    id: 'ctx-banner', screen: 'inicio', props: { contextVariant: 'banner' },
    emoji: '📐', label: 'Contexto · Banner',
    desc: 'Una sola franja horizontal con lo esencial. La más discreta: deja el foco en el formulario.'
  }
];
