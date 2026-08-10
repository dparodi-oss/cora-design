# Tutor CoRA — visión de producto real (Fase 2, fuera de esta maqueta)

> **Este documento NO describe la maqueta de `CORA App.dc.html`.** Es la
> especificación de un sistema real (backend, base de datos, RAG, llamadas a
> la API de Claude) para cuando el Tutor CoRA se construya como producto de
> verdad — un proyecto de ingeniería separado, no un cambio de pantalla en
> este repositorio de diseño (que es estático, sin backend, sin build — ver
> `CLAUDE.md`). Se guarda aquí solo para no perderlo, tal como se acordó el
> 10 ago 2026.
>
> Lo único de esta visión que **sí** se refleja en la maqueta hoy es la
> parte visual: el panel de "Fuentes" al lado del chat y el aviso de "Modo
> Estudio activo" en la pantalla Tutor CoRA — con documentos de ejemplo,
> sin búsqueda real detrás. Ver `DESIGN.md`, sección "Tutor CoRA: historial
> por asignatura".

## 1. Visión en una frase

El tutor debe comportarse como un GPS: no solo sabe dónde está el
estudiante, sino que recalcula la ruta (qué preguntar, qué pista dar, qué
repasar) en cada interacción, según el nivel real de dominio y el estado
emocional detectado.

## 2. Características finales del tutor

### A. Perfilado dinámico del estudiante (Knowledge Tracing)
- Registro de dominio por concepto, de 0 a 100%, no una nota global.
- Curva de olvido: si un concepto no se practica en cierto tiempo, el tutor
  detecta el riesgo y propone repaso espaciado antes de avanzar a temas que
  dependen de él.
- Detección de gaps encadenados: si el estudiante falla en un tema avanzado
  (ej. integrales), el tutor debe poder rastrear si la causa real es un tema
  base más atrás (ej. álgebra) y proponer reforzar ahí primero.
- Nota de implementación: esto requiere una tabla/registro persistente por
  estudiante y por concepto (no puede vivir solo en el contexto de una
  conversación de Claude, que no tiene memoria entre sesiones).

### B. Diálogo socrático y andamiaje
- Regla de oro: preguntas factuales puntuales → respuesta directa.
  Preguntas de proceso/resolución → el tutor guía, no resuelve.
- Pistas degradadas: primera pista leve → si el estudiante sigue bloqueado,
  pista más explícita → nunca saltar directo a la solución salvo bloqueo
  total y frustración alta.
- El nivel de ayuda se ajusta según la frustración detectada (ver punto D),
  no es fijo.

### C. Ajuste de carga cognitiva y formato
- Si el estudiante responde rápido y bien de forma sostenida → subir la
  dificultad para evitar aburrimiento.
- Si encadena varios errores → bajar la dificultad o sugerir una pausa, no
  insistir con más de lo mismo.
- Multimodalidad bajo demanda: si una explicación textual no funciona, el
  tutor debe poder ofrecer una analogía distinta, un diagrama, o dividir el
  concepto en pasos más pequeños.

### D. Análisis de estado anímico y refuerzo
- Detección de frustración por señales de lenguaje (mensajes cortos,
  mayúsculas, tono, tiempo de respuesta) → el tutor lo nombra y ofrece
  alternativas ("¿probamos un enfoque distinto o lo retomamos más tarde?").
- Refuerzo positivo específico y contextual, no genérico: comparar el
  progreso actual del estudiante contra su propio historial, no contra un
  promedio de grupo (porque no hay datos de cohorte sin LMS).

### E. Anclaje al contenido real (RAG)
- El tutor consulta primero el material oficial del curso (PDFs, apuntes,
  libros de texto) antes de responder, para evitar alucinaciones.
- Carga de contenido: la realiza el equipo de desarrollo directamente en la
  base de conocimiento del sistema. No hay una interfaz de "subir archivo"
  para estudiantes o profesores en esta versión.
- Cuando el tutor no encuentra respaldo en el material cargado, debe decirlo
  explícitamente en vez de inventar.
- Citación de la fuente: cuando la respuesta se apoye en el material del
  curso, el tutor debe indicar de qué documento o sección proviene (ej.
  "según tu apunte de Clase 4..."). Esto sirve doble propósito: da
  transparencia, y puede usarse como pista ("revisa la sección 3 de tu PDF
  sobre esto") en vez de dar la respuesta completa — reforzando el
  andamiaje socrático (punto B) en vez de competir con él.

### F. Explicabilidad
- El tutor debe poder responder, si se le pregunta, por qué recomendó
  cierto ejercicio o por qué insiste en repasar cierto tema (ej. "porque tu
  dominio en este concepto bajó del 80% al 55% en las últimas dos
  semanas").
- El tutor debe distinguir claramente entre información que viene del
  material oficial del curso (con su fuente) y conocimiento general que
  aporta por su cuenta, para que el estudiante sepa qué es "de su profesor"
  y qué no.

### G. Ética y privacidad
- Los datos de perfil de cada estudiante deben quedar aislados por usuario
  (sin mezclarse entre estudiantes).
- No se comparte ni se infiere información sensible más allá de lo
  estrictamente académico (dominio de conceptos, patrones de estudio).

## 3. Tabla resumen

| Característica | ¿Depende de LMS? | Estado en esta versión |
|---|---|---|
| Knowledge tracing por concepto | No | ✅ Incluido |
| Curva de olvido / repaso espaciado | No | ✅ Incluido |
| Detección de gaps encadenados | No | ✅ Incluido |
| Diálogo socrático + pistas degradadas | No | ✅ Incluido |
| Ajuste de dificultad en tiempo real | No | ✅ Incluido |
| Detección de frustración | No | ✅ Incluido |
| RAG sobre material del curso | No (carga manual por dev) | ✅ Incluido |
| Citación de la fuente del material | No | ✅ Incluido |
| Explicabilidad de recomendaciones | No | ✅ Incluido |
| Prioridad por fechas de entrega reales | Sí (o carga dinámica) | ⏸️ Fase 2 |
| Comparación con cohortes | Sí | ⏸️ Fase 2 |
| Gamificación narrativa | Parcial | ⏸️ Fase 2 |
| Panel docente | Sí (o infraestructura propia) | ⏸️ Fase 2 |
| Interoperabilidad LTI/SCORM/xAPI | Sí | ⏸️ Fase 2 |

## 4. Fuera de alcance (Fase 2 / futuro)

- Integración con LMS (Moodle u otro) vía LTI/xAPI/SCORM.
- Sincronización dinámica de fechas de entrega y currículo.
- Panel de docente con visión agregada de grupo/cohorte.
- Gamificación con narrativas y comparación social.
- Ingesta de material por parte de profesores/estudiantes desde una
  interfaz (por ahora es tarea del equipo de desarrollo).

Estos puntos no se descartan, solo se posponen.

## 5. Guía de implementación para Claude Code (cuando se construya de verdad)

### 5.1 Arquitectura sugerida

```
Estudiante ⇄ Frontend (chat)
                 ⇅
            Backend (orquestador)
             ├── Llamada a Claude API con system prompt pedagógico
             ├── Base de datos (perfil de estudiante / knowledge tracing)
             └── Recuperación RAG (base de conocimiento del curso)
```

Flujo de una interacción típica:
1. El estudiante escribe un mensaje.
2. El backend recupera: (a) el perfil de dominio del estudiante, (b)
   fragmentos relevantes del material del curso vía RAG.
3. Se construye el prompt para Claude combinando: reglas pedagógicas fijas
   (system prompt) + contexto recuperado + historial reciente de la
   conversación.
4. Claude responde siguiendo las reglas socráticas / de pistas degradadas.
5. El backend analiza la interacción (¿acertó?, ¿cuánto tardó?, ¿mostró
   frustración?) y actualiza el perfil del estudiante.

### 5.2 Estructura de proyecto sugerida

```
tutor-ia/
├── knowledge-base/          # PDFs y material que carga el equipo de dev
├── src/
│   ├── api/                 # endpoints del backend
│   ├── prompts/
│   │   └── system-prompt.md # reglas pedagógicas fijas del tutor
│   ├── db/
│   │   └── schema.sql       # perfil de estudiante, dominio por concepto
│   └── rag/
│       ├── ingest.js        # procesa knowledge-base/ y genera embeddings
│       └── retrieve.js      # busca fragmentos relevantes por consulta
├── frontend/                # chat UI simple
├── package.json
└── README.md
```

### 5.3 Esquema mínimo de base de datos (punto de partida)

```sql
CREATE TABLE students (
  id TEXT PRIMARY KEY,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE concepts (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  parent_concept_id TEXT REFERENCES concepts(id) -- para detectar gaps encadenados
);

CREATE TABLE student_mastery (
  student_id TEXT REFERENCES students(id),
  concept_id TEXT REFERENCES concepts(id),
  mastery_level INTEGER CHECK (mastery_level BETWEEN 0 AND 100),
  last_practiced_at TIMESTAMP,
  PRIMARY KEY (student_id, concept_id)
);

CREATE TABLE interactions (
  id SERIAL PRIMARY KEY,
  student_id TEXT REFERENCES students(id),
  concept_id TEXT REFERENCES concepts(id),
  was_correct BOOLEAN,
  response_time_ms INTEGER,
  frustration_signal BOOLEAN,
  created_at TIMESTAMP DEFAULT now()
);
```

### 5.4 Borrador de system prompt (punto de partida para `system-prompt.md`)

```
Eres un tutor académico adaptativo. Reglas fijas:

1. Si la pregunta es factual y puntual, respóndela directo.
2. Si la pregunta implica resolver un problema o entender un proceso,
   NO des la respuesta directa. Pregunta primero qué ha intentado el
   estudiante y guíalo paso a paso.
3. Si el estudiante se bloquea, da una pista leve. Si sigue bloqueado,
   da una pista más explícita. Solo da la solución completa si el
   bloqueo persiste y hay señales claras de frustración alta.
4. Antes de responder cualquier pregunta de contenido, revisa el
   material del curso proporcionado en el contexto (RAG). Si no
   encuentras respaldo ahí, dilo explícitamente en vez de inventar.
5. Si detectas frustración (mensajes cortos, mayúsculas, tono cortante),
   nómbralo con empatía y ofrece una alternativa: enfoque distinto,
   ejemplo visual, o pausar.
6. El refuerzo positivo debe ser específico y comparado con el progreso
   propio del estudiante, nunca genérico ni comparado con otros.
7. Si el estudiante pregunta por qué recomendaste algo, explica con
   datos concretos de su historial de dominio.
8. Cuando bases una respuesta en el material del curso, indica de qué
   documento o sección proviene (ej. "según tu apunte de Clase 4...").
   Si la pregunta es de proceso (regla 2), prioriza usar esta cita como
   pista ("revisa la sección 3 de tu PDF sobre esto") en vez de dar la
   respuesta completa. Si no encuentras respaldo en el material
   cargado, dilo explícitamente en vez de inventar una fuente.
```

Esto es un punto de partida — conviene iterarlo dentro de Claude Code una
vez que se vea cómo responde en casos reales.

### 5.5 Cómo cargar el material curricular (paso a paso)

1. El equipo de desarrollo coloca los PDFs/apuntes del curso en
   `knowledge-base/`.
2. Se corre el script de ingesta (`ingest.js`) que trocea el material y
   genera embeddings.
3. Los embeddings se guardan en un almacén vectorial (para un piloto
   simple, incluso una tabla con similitud coseno en la misma base de
   datos es suficiente; no hace falta infraestructura pesada al inicio).
4. Cuando cambie el material, se repite el proceso manualmente (no hay
   sincronización automática en esta versión).

### 5.6 Lista de tareas sugerida para darle a Claude Code

1. Generar el scaffold del proyecto (backend + frontend simple de chat).
2. Implementar el esquema de base de datos (sección 5.3).
3. Implementar el script de ingesta RAG y la función de recuperación.
4. Implementar el system prompt (sección 5.4) y la lógica de llamada a la
   API de Claude, incluyendo el paso de contexto recuperado.
5. Implementar la lógica de actualización del perfil de estudiante tras
   cada interacción (acierto/error, tiempo de respuesta, señal de
   frustración).
6. Implementar la lógica de curva de olvido (revisar `last_practiced_at` y
   sugerir repaso si pasó cierto umbral de tiempo).
7. Probar el flujo completo con 2-3 conceptos de ejemplo y material real
   cargado.

### 5.7 Consideraciones de privacidad

- Los datos de `student_mastery` e `interactions` deben quedar aislados por
  `student_id`, sin mezclarse ni exponerse entre estudiantes.
- No enviar datos de estudiantes a servicios externos más allá de la
  llamada a la API de Claude necesaria para generar la respuesta.
