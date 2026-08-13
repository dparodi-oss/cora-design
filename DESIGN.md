# CoRA — Sistema de diseño

Contrato de diseño de **CoRA**, el producto de orientación académica de la
Universidad Continental (Perú). Este documento es la fuente de verdad: si un
cambio contradice lo que está aquí, el cambio está mal.

Léelo entero antes de tocar `CORA App.dc.html`.

---

## 1. Qué es esto y qué no es

| | |
|---|---|
| **Es** | El diseño de las 15 pantallas de CoRA, en HTML plano con estilos en línea. |
| **No es** | Una aplicación. No hay backend, ni build, ni framework que instalar. |
| **Objetivo** | Afinar el diseño. Todo lo que se ve es maqueta con datos de ejemplo. |

Todo el diseño vive en **un solo archivo**: `CORA App.dc.html`. Las 15 pantallas
están dentro de él y se muestran según la prop `startSection`.

**El nombre del producto se escribe siempre "CoRA"** — C mayúscula, o minúscula,
R y A mayúsculas. Nunca "CORA" (todo mayúsculas), ni siquiera en textos o
etiquetas que ya están en mayúsculas por estilo (`text-transform:uppercase`):
el texto real detrás sigue siendo "CoRA".

**El sustantivo es "asignatura", no "curso".** Aplica a las materias de la
malla curricular del estudiante (asignaturas que cursa, que le puede
complicar, que refuerza, etc.). Los programas del Ecosistema CIE (Centro de
Idiomas, Instituto, Continua, Posgrado) siguen llamándose "cursos" — son
oferta externa/complementaria, no asignaturas de la malla; no mezclar los
dos términos.

---

## 2. Principios

1. **El morado manda.** `#7B68EE` es la marca. Aparece en el logo, en la
   navegación activa, en los botones primarios y en los acentos. No lo sustituyas
   por otro morado ni introduzcas un segundo color de marca.
2. **Superficies claras, tinta profunda.** Fondo lavanda muy claro, tarjetas
   blancas, texto casi negro con matiz violeta. Nunca gris neutro puro para el texto principal.
3. **Bordes generosos.** Radios de 12 y 16 px. Nada con esquinas vivas salvo
   líneas divisorias.
4. **Sombras suaves, casi planas.** La jerarquía la da el color y el espaciado,
   no la profundidad.
5. **Español siempre.** Etiquetas, títulos, textos de ayuda y mensajes de error.
6. **Emoji como iconografía de sección.** Cada pantalla tiene su emoji fijo; los
   iconos de línea (Lucide) se usan para acciones y estados.

---

## 3. Tokens

### 3.1 Color

Los valores son literales: en este proyecto se escriben directamente en el
atributo `style`. No hay variables CSS que resolver.

#### Marca

| Uso | Valor |
|---|---|
| Primario (marca, activo, botones) | `#7B68EE` |
| Primario oscuro (hover de enlaces) | `#6A58DC` |
| Primario profundo (degradados) | `#5346C8` |
| Índigo de apoyo (degradados) | `#4f46e5` |
| Halo morado (sombras de color) | `#e9d5ff` |
| Lavanda de superficie | `#faf5ff` |
| Borde lavanda | `#f3e8ff` |

#### Base

| Uso | Valor |
|---|---|
| Fondo de página | `#F8F7FF` |
| Superficie / tarjeta | `#ffffff` |
| Texto principal | `#1A1040` |
| Texto secundario | `#4b5563` |
| Texto terciario | `#6b7280` |
| Texto tenue / etiquetas | `#9ca3af` |
| Borde de tarjeta | `#f3f4f6` |
| Borde marcado | `#e5e7eb` |
| Fondo sutil | `#f9fafb` |

#### Semánticos

| Estado | Fondo | Borde | Texto / acento |
|---|---|---|---|
| Éxito | `#f0fdf4` | `#bbf7d0` | `#15803d` · sólido `#22c55e` |
| Información | `#eff6ff` | `#dbeafe` | `#1d4ed8` · sólido `#3b82f6` |
| Aviso | `#fff7ed` | `#ffedd5` | `#b45309` · sólido `#c2410c` |
| Error | `#fef2f2` | `#fee2e2` | `#dc2626` |

**Regla:** los estados semánticos siempre van en trío — fondo claro, borde a
juego y texto oscuro del mismo matiz. Nunca texto de color sobre fondo blanco sin su contenedor.

#### Degradados

```
linear-gradient(to right,#7B68EE,#5346C8)         /* barras de acento */
linear-gradient(to right,#7B68EE,#4f46e5)
linear-gradient(to bottom right,#7B68EE,#4f46e5)  /* bloques destacados */
linear-gradient(to bottom right,#faf5ff,#eef2ff)  /* fondos suaves */
linear-gradient(to bottom right,#c084fc,#4f46e5)  /* avatar / insignias */
```

### 3.2 Tipografía

Dos familias, cargadas desde Google Fonts en el `<helmet>`:

- **Poppins** (500/600/700/800) — títulos, cifras destacadas, nombre de marca.
  Se declara explícitamente: `font-family:Poppins,sans-serif`.
- **Inter** (400/500/600) — todo lo demás. Es la fuente por defecto del cuerpo;
  no hace falta declararla.

**Escala real en uso** (px):

| Tamaño | Dónde |
|---|---|
| `36` / `30` | Cifras heroicas (CoRAzones, porcentajes grandes) |
| `24` | Título de pantalla (`h1`) |
| `20` / `18` | Títulos de sección y de tarjeta |
| `16` | Subtítulo destacado |
| `14` | Texto de cuerpo y botones ← **el más usado tras 12** |
| `12` | Texto de apoyo, etiquetas, chips ← **el más usado** |
| `10` / `9` | Encabezados de grupo en mayúsculas, micro-etiquetas |

**Pesos:** `500` (normal enfatizado), `600` (semi), `700` (títulos y botones),
`900` (solo cifras heroicas). No se usa `400` explícito ni `800`.

Los encabezados de grupo de la barra lateral van a `9px`, `700`,
`text-transform:uppercase`, `letter-spacing:.1em`, color `#9ca3af`.

> En elementos `<button>` hay que repetir `font-family:inherit`: el navegador no
> hereda la fuente en controles de formulario.

### 3.3 Espaciado

Escala de 2 px, concentrada en pocos valores.

- **`gap`:** `4` · `6` · `8` · `12` · `16` px. (`8` es el valor por defecto.)
- **`padding` de tarjeta:** `20` px estándar, `24` px en tarjetas amplias,
  `16` px en compactas.
- **`padding` de página (`<main>`):** `24` px.
- **`margin-bottom` entre tarjetas:** `16` px.

### 3.4 Radio de borde

| Valor | Uso |
|---|---|
| `16px` | Tarjetas, paneles, botones grandes ← el más común |
| `12px` | Controles, elementos de navegación, tooltips, marca |
| `9999px` | Chips, insignias, avatares, indicadores circulares |
| `8px` / `4px` | Solo detalles menores (barras de progreso finas) |

### 3.5 Sombras

Tres, y ninguna más:

```css
/* Reposo — tarjetas, barra lateral, cabecera */
box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1)

/* Elevada — botón primario, elemento de navegación activo (sombra teñida) */
box-shadow:0 10px 15px -3px #e9d5ff,0 4px 6px -4px #e9d5ff

/* Modal */
box-shadow:0 25px 50px -12px rgba(0,0,0,.25)
```

**Regla:** los elementos morados proyectan sombra morada (`#e9d5ff`), no negra.

### 3.6 Bordes

`border:1px solid #f3f4f6` en tarjetas. `#f3e8ff` cuando el elemento es de
marca. `rgba(243,232,255,.6)` en las divisiones estructurales (barra lateral,
cabecera).

---

## 4. Anatomía de una pantalla

Las 15 pantallas comparten el mismo esqueleto. **No lo cambies para una sola pantalla.**

```
┌────────────┬──────────────────────────────────────────────┐
│  <aside>   │  <header>  racha · CoRAzones · campana · avatar │  sticky, top:0
│  300px     ├──────────────────────────────────────────────┤
│  fija      │  <main>                                      │
│  100vh     │    migas de pan                              │
│            │    h1 + subtítulo                            │
│  marca     │    tarjetas…                                 │
│  3 grupos  │                                              │  max-width:1024px
│  de nav    │                                              │  padding:24px
└────────────┴──────────────────────────────────────────────┘
```

- **Contenedor raíz:** `min-height:100vh; background:#F8F7FF; display:flex;
  font-family:Inter,sans-serif; color:#1A1040`.
- **`<aside>`:** `width:240px`, `position:fixed`, `height:100vh`, fondo blanco,
  `z-index:30`.
- **Columna derecha:** `flex:1; margin-left:240px` — el margen compensa la barra fija.
- **`<header>`:** `position:sticky; top:0; z-index:20`, fondo `rgba(255,255,255,.9)`
  con `backdrop-filter:blur(8px)`.
- **`<main>`:** `max-width:1024px`, `padding:24px`.

### Navegación

Cuatro grupos fijos, en este orden — el antiguo grupo único "🟣 Recomendador"
se partió en dos el 11 ago 2026, tras feedback del equipo de innovación
("¿hay algún paso uno, paso dos, paso tres?... la parte académica se pierde
ahí"): no tenía sentido mostrar con el mismo peso visual una pantalla que se
hace una sola vez y una pantalla a la que se vuelve todo el ciclo. Los dos
grupos se renombraron el mismo día, tras la petición explícita del
estudiante que probó el flujo, a nombres en primera persona en vez de
nombres de sistema:

| Grupo | Encabezado | Pantallas |
|---|---|---|
| Crea tu Ruta | `🟣 CREA TU RUTA` (colapsable, con contador) | CoRA me conoce · Mis Rutas · Ecosistema CIE · Elijo mi Ruta |
| Explora CoRA | `✨ EXPLORA CORA` (fijo, sin contador) | Mi Perfil CoRA · Veo mi Horizonte · Crea mi CV |
| CoRA Académico | `📚 CORA ACADÉMICO` | Acompañamiento Académico · Tutor CoRA · Práctico para examen · Mis flashcards |
| Ajustes | `⚙️ AJUSTES` | Mi progreso · Perfil · Configuración |

**Acompañamiento Académico es la primera subsección de "CoRA Académico"
(12 ago 2026, a pedido explícito) — antes vivía en "Explora CoRA".** Sigue
siendo la única pantalla del grupo con `REQ`/candado, pero ese `REQ` cambió
el mismo día (ver más abajo, "Acompañamiento se activa apenas termina Crea
tu Ruta"): ya no exige `"cv"`, exige `"malla"`. Tutor, Práctico y Flashcards
siguen sin `REQ`. Se movió en los tres lugares que antes la agrupaban con
Explora CoRA: `v.navReco`/`v.navAca` (sidebar y tarjetas de "Explora todo
CoRA" en Inicio, que reusan esas mismas listas), `recoIds`/`acaIds` en Mi
Progreso (`v.progressGroups` — Explora CoRA pasó de 4 a 3, CoRA Académico de
3 a 4) y su propia miga de pan, que decía "✨ Explora CoRA" y ahora dice
"📚 CoRA Académico".

**Acompañamiento se activa apenas termina "Crea tu Ruta" (12 ago 2026, a
pedido explícito) — antes exigía terminar todo "Explora CoRA".**
`this.REQ.acompanamiento` pasó de `"cv"` a `"malla"`: como la cadena de
`REQ` ya encadena mis-rutas → ecosistema → malla, exigir `"malla"` alcanza
para exigir los 4 pasos de "Crea tu Ruta" sin tener que sumar los tres de
"Explora CoRA" (perfil-cora, horizonte, cv) — antes el estudiante tenía que
recorrer todo el Recomendador antes de que se activara su plan de
acompañamiento, aunque ese plan no depende de nada de lo que se contesta en
Mi Perfil CoRA, Horizonte o el CV. El botón "Continuar a Acompañamiento
Académico →" al final de Crea mi CV (`v.cvNext`) sigue funcionando igual —
solo que ahora, cuando el estudiante llega ahí, Acompañamiento ya estaba
desbloqueado desde antes.

**"Crea tu Ruta" son las 4 pantallas que se hacen una sola vez**
para armar la ruta — siguen encadenadas por el mismo `REQ` de siempre, esto
es solo una reorganización visual, no un cambio en las reglas de
desbloqueo. El contador (`v.configCounter`, "X de 4") sale del mismo
`s.completed` que ya alimentaba Mi Progreso, filtrado a
`configIds = ["formulario","mis-rutas","ecosistema","malla"]` (esta misma
constante decide, más abajo, en qué grupo cae la pantalla que aparece en el
modal "Acceso Bloqueado" — ver "Entrada a CoRA").

El grupo se puede colapsar (`s.configCollapsed`, botón con chevron) y se
colapsa **solo una vez, automáticamente**, al confirmar la malla —
`v.mallaConfirm` compara contra `s.completed` de antes de completar para no
volver a tocar el colapso si el estudiante ya lo había decidido él mismo.
Sigue siendo clicable estando colapsado: nada impide volver a "Elijo mi
Ruta" para reconsiderar la ruta elegida.

**"Explora CoRA" no lleva contador ni numeración** — son pantallas de
referencia continua (el perfil no cambia todos los días pero se consulta;
Horizonte cambia de modo según el ciclo; Acompañamiento es un plan vivo),
no un trámite con un final. Por eso su ventanita de contexto (ver
"Ventanita stepper" más abajo) tampoco muestra "Paso X de Y".

Esta misma separación se refleja en Mi Progreso: la barra que antes decía
"🟣 Recomendador 0/7" ahora son varias barras, una por grupo
(`v.progressGroups`) — mismo dato, agrupado igual que el menú. Desde que
Acompañamiento se movió a CoRA Académico (12 ago 2026), son "🟣 Crea tu
Ruta X/4", "✨ Explora CoRA X/3" y "📚 CoRA Académico X/4".

**Migas de pan desactualizadas, corregido (revisión UX 11 ago 2026).** El
renombrado del sidebar nunca llegó a la línea de navegación ("miga de pan")
que aparece arriba del título en cada pantalla — 8 apariciones en 7
pantallas seguían diciendo "Recomendador" con el emoji viejo de cada una
(⭕ en CoRA me conoce/Mis Rutas/Ecosistema CIE, 📋 en Elijo mi Ruta, ✨ en
Mi Perfil CoRA, 🌅 en Horizonte, 📄 en Crea mi CV, ⚠️ en Acompañamiento).
Quedaron todas alineadas con el grupo real al que pertenece cada pantalla:
"🟣 Crea tu Ruta" (formulario/mis-rutas/ecosistema/malla) o "✨ Explora
CoRA" (perfil-cora/horizonte/cv). La miga de Acompañamiento cambió de
nuevo el 12 ago 2026, a "📚 CoRA Académico", al moverse a ese grupo. Nota
aparte: el título "Desglose — Recomendador" en Mi Progreso (línea ~2883)
no se tocó porque ese bloque sí lista los 8 pasos completos de los tres
grupos del Recomendador/Académico a la vez — no hay un solo nombre de
grupo al que mapear 1:1 ahí; si se quiere renombrar también, hace falta
decidir un nombre nuevo que cubra a todos.

**Las migas de pan de Tutor CoRA / Práctico / Flashcards siguen sin
actualizar ("⭕ Académico" / "🎴 Académico" / "👨‍🏫 Académico" en vez de
"📚 CoRA Académico")** — detectado en la misma revisión UX del 11 ago 2026,
no forma parte de este cambio (que solo tocó la miga de Acompañamiento, la
única de las cuatro pantallas del grupo que cambió de grupo real). Sigue
pendiente si se quiere corregir.

### Popup de bienvenida: qué es CoRA (11 ago 2026)

Antes de que el estudiante toque nada en Inicio, aparece un popup grande y
único explicando **qué es CoRA** — distinto de la "Guía" de 4 pasos que ya
existía (`ONBOARDING`, botón "Guía" del header): esa explica **cómo se usa**
la plataforma paso a paso (orden del recorrido, herramientas del día a día,
el Asistente CoRA); este nuevo popup explica la misión antes de eso, sin
que el estudiante tenga que abrirlo — aparece solo.

- **Cuándo aparece:** `v.showIntroModal = on("inicio") && !s.seenIntro`.
  Se muestra la primera vez que se llega a Inicio en la sesión (`s.seenIntro`
  arranca en `false`) y nunca más — ni volviendo a Inicio, ni cerrando
  sesión y entrando de nuevo (no se resetea, mismo patrón que
  `s.hasVisitedBefore` para el saludo de la pantalla de elección).
- **Contenido:** logo de CoRA, "¡Bienvenido a CoRA! 👋", dos frases (qué es
  CoRA — sistema de recomendación y acompañamiento académico y profesional
  para estudiantes de la Universidad Continental — y qué se puede hacer acá
  — explorar y descubrir, según tus intereses y necesidades, rutas,
  asignaturas y recomendaciones), y una grilla de 2×2 con los mismos 4
  grupos del sidebar (`v.introPillars` — 🟣 Crea tu Ruta, ✨ Explora CoRA,
  📚 CoRA Académico, ⚙️ Ajustes, cada uno con una frase de 1 línea) — no
  inventa un mapa nuevo, resume el que ya existe en el menú.
- **Dos salidas, nunca una sola:** "🟣 Empezar con CoRA me conoce →"
  (`v.introStart`, botón protagonista con sombra) marca `seenIntro:true` Y
  navega directo a `formulario` — para el estudiante que quiere que el
  sistema lo guíe ya mismo, como pidió el diseñador. "Explorar por mi
  cuenta" (`v.introDismiss`, enlace chico) solo cierra el popup y deja al
  estudiante en Inicio, sin forzar el recorrido guiado a quien prefiere
  mirar por su cuenta primero.

### Inicio: dashboard con 2 estados (inicial / completo)

"Inicio" (`v.showLanding`, sección `inicio`) dejó de ser solo la pantalla de
bienvenida "Qué es CoRA" — ahora es un dashboard visual con gráficos reales,
que junta piezas de varias partes de CoRA en una sola vista. Segunda vuelta
de diseño (11 ago 2026) tras feedback directo: la primera versión era muy
plana (solo texto en tarjetas) y mezclaba todo en un solo estado; esta
versión corrige ambas cosas. Benchmark de referencia (2 imágenes): un
dashboard tipo Robotech (dona de progreso, línea de tendencia, calendario) y
uno tipo EduAdmin (tarjetas de curso con barra, gráfico de área, "upcoming
lessons"). **Deliberadamente no se copiaron las fotos de personas** de esas
referencias (avatares de compañeros/profesores) — CoRA no tiene datos de
personas reales que mostrar, e inventar caras de estudiantes/profesores
violaría la regla 10 (nunca datos inventados que parezcan reales); en su
lugar, todo el peso visual lo llevan gráficos hechos de datos reales e
iconos de línea, el mismo lenguaje que ya usa el resto de la app.

**Los 2 estados, y por qué el corte está ahí:** `v.dashRouteReady` es
`true` solo cuando los 4 pasos de "Crea tu Ruta" están completos (malla
confirmada) — se recalcula en el propio bloque de Inicio (no reusa
`v.configDoneAll`, definido más abajo en el archivo) para no depender del
orden de ejecución entre bloques de `renderVals`. Las alertas de riesgo y
"Próximamente" quedan ocultas hasta ese punto — no porque el dato no exista
(`this.PREDICT`/`this.SYLLABUS` son fijos, no dependen del estado), sino
porque conceptualmente no tiene sentido mostrarlas antes: son screens de
"Explora CoRA"/seguimiento continuo, y sin ruta confirmada todavía no hay
nada que seguir.

De arriba hacia abajo:

1. **Saludo** (`v.dashGreeting`) — "Hola, {{ primer nombre }} 👋".
2. **Tu avance** — dona de progreso (SVG, `stroke-dasharray` sobre un
   círculo, mismo patrón de atributos-vía-`{{ }}` que ya usa el radar de
   Perfil CoRA — el "Expected length" en consola es el mismo ruido cosmético
   de siempre, no significa que esté roto) + línea de tendencia del
   promedio por ciclo (`v.dashGradeLine`/`v.dashGradeArea`/`v.dashGradeDots`,
   de `this.TAKEN` agrupado por ciclo — 3 puntos reales, no las 9 notas
   sueltas que se verían ruidosas). **La dona cambia de significado según el
   estado**: antes de `dashRouteReady`, es el avance de "Crea tu Ruta" (0-4)
   con un botón "Sigue con: {{ siguiente paso }} →"; después, es el avance
   general (`s.completed.length/14`) con un badge "✓ Crea tu Ruta completa" —
   para que se sienta que sube de nivel, no que se queda pegada en 100%.
3. **📅 Próximamente** (`v.dashUpcoming`/`v.dashHasUpcoming`, solo si
   `dashRouteReady`) — tira con scroll horizontal, tarjetas estilo "página de
   calendario" (mes chico arriba, número de día grande — `v.dashUpcoming`
   separa `fecha` en `day`/`month`) en vez de una fila de texto plano.
   Evaluaciones reales de `this.SYLLABUS` (las 4 asignaturas del ciclo
   actual) cuya semana sea `>= this.STUDENT.cycleWeek`, ordenadas por semana,
   tope de 4. Clic manda al Tutor CoRA de esa asignatura. **Se oculta entera
   si no hay ninguna próxima.**
4. **⚠️ A vigilar** (`v.dashRisk`/`v.dashHasRisk`, solo si `dashRouteReady`)
   — mismas alertas de `this.PREDICT` que ya usa Acompañamiento, solo
   `alto`/`medio`, ordenadas con las del ciclo actual primero. Clic manda a
   Acompañamiento Académico. **Se oculta entera si no hay alto/medio.**
   Importante: NO existe un "riesgo" calculado para las asignaturas que el
   estudiante lleva ahora mismo (`this.PREDICT` es sobre ciclos futuros) — no
   se inventó uno nuevo para esta sección, a propósito.
5. **🗺️ Explora todo CoRA** (`v.dashGroups`, **siempre visible, en los dos
   estados**) — el mapa completo, en el lenguaje del estudiante: los mismos
   4 grupos y nombres del sidebar (Crea tu Ruta / Explora CoRA / CoRA
   Académico / Ajustes), nunca "pantalla 3 de 15". Reusa `v.navConfig`/
   `v.navReco`/`v.navAca`/`v.navSet` tal cual (ya calculados para el sidebar,
   con su `done`/`locked`) y les agrega `cardStyle`/`iconCircleStyle`/
   `cardIconColor` propios para el formato de tarjeta grande (`dashToCard`),
   sin tocar el dato original. Lo bloqueado se ve atenuado con candado — se
   activa solo a medida que avanza, igual que en el sidebar; **nunca hay que
   elegir entre verlo aquí o en el menú, ambos navegan al mismo lugar.**
6. **📍 Tu progreso** — el bloque de estadísticas que antes tenía 3
   variantes pendientes de decisión (dashboard/tarjeta/banner). Se
   **retiraron las 3** (decisión propia: con un dashboard nuevo completo,
   mantener 3 versiones sueltas de solo este pedacito ya no tenía sentido).
   `this.props.contextVariant` se quitó del esquema de props (`data-props`)
   y `CORA_VARIANTS` en `screens.js` quedó vacío.
7. **Qué es CoRA (condensado)** — una tira de una sola línea + 3 chips de
   ícono, al final, no al inicio — es contenido que ya existía y se
   conservó, pero con mucho menos peso visual que los widgets accionables.
8. **CTA final, según si ya hay ruta** (`v.dashHasRoute`/`v.dashNoRoute`) —
   sin cambios: sin ruta, "Continuar con CoRA me conoce →"; con ruta, la
   franja "Tu ruta: {{ nombre }} · {{ %}} avanzado" (respeta el candado
   normal si falta un paso, como el chip del sidebar).

`startSection` en el esquema de props (`data-props`) tenía un gap real: no
incluía `"cv"` en su lista de opciones — quedó corregido en el mismo cambio.

### Entrada a CoRA: login y "Tu ruta actual"

Antes de las 15 pantallas hay una pantalla más, sin sidebar ni header, que
es la puerta real de entrada (`s.authStep`: `"login"` → `"done"`).

**La pantalla de elección intermedia se retiró y se volvió a poner en la
misma sesión (11 ago 2026).** Primero se quitó: "Hola, {{nombre}} / ¿Qué
quieres hacer hoy?" pasó a saltarse porque el dashboard de Inicio ya hacía
ese mismo trabajo (su CTA final ya cambiaba solo entre "Continuar con CoRA
me conoce" y la franja "Tu ruta"). Pero al probar el flujo real de login
(abriendo `CORA App.dc.html` directo, sin `pantalla.html`/`index.html`, que
son los que se saltan el login para revisar pantallas sueltas), se pidió
que la pregunta volviera — el dashboard resuelve bien "qué mostrar", pero no
reemplaza el gesto de preguntar explícitamente al entrar. `s.authStep` ahora
tiene tres valores: `"login"` → `"choice"` → `"done"`.

1. **Bienvenido a CoRA** (`v.showLogin`) — correo institucional + contraseña
   (maqueta, sin autenticación real: cualquier correo no vacío pasa,
   `v.loginSubmit`). Solo pide el correo para poder saludar por su nombre en
   el paso siguiente; no hay validación de dominio ni de formato a propósito
   — es una pantalla de diseño, no un formulario funcional. El encabezado
   dice "Bienvenido" (no "Inicia sesión" ni "Autenticación") a propósito,
   tras revisar Coursera/Duolingo/Notion: en apps de bajo riesgo el login se
   comunica como algo cálido, no como un trámite — nada de candados grandes
   ni lenguaje institucional formal.
   Debajo del botón, dos enlaces chicos y secundarios (mismo criterio del
   benchmark: no deben competir visualmente con "Iniciar sesión") — "Crear tu
   contraseña" y "¿Olvidaste tu contraseña?" (`v.loginShowSetPw`/
   `v.loginShowForgotPw`, guardan `s.loginNote`). Como no hay autenticación
   real que restablecer, cada uno solo muestra una nota explicando qué haría
   ese enlace en la versión final — así no queda como un enlace roto, pero
   tampoco se simula una recuperación de contraseña que no existe.
2. **¿Qué quieres hacer hoy?** (`v.showChoice`, `s.authStep === "choice"`) —
   "Hola, {{ primer nombre }} 👋" + "Bienvenido a CoRA" o "Bienvenido de
   vuelta a CoRA" (`v.choiceWelcome`, ver más abajo) + un contenido que
   cambia según si ya existe una ruta (`v.choiceHasRoute`/`v.choiceNoRoute`,
   dos `sc-if` hermanos sobre `!!s.selectedRoute`):
   - **Sin ruta todavía** — dos tarjetas del mismo tamaño, mismo borde,
     mismo hover, sin ninguna etiqueta "recomendado": **"🟣 Crear mi primera
     ruta"** y **"✨ Continuar explorando CoRA"**.
   - **Con ruta ya elegida** — ya no tiene sentido decir "primera ruta" ni
     mostrar dos tarjetas neutrales: una sola tarjeta protagonista
     **"Continuar con {{ s.selectedRoute }}"** con el avance real
     (`v.choiceRoutePct`, mismo cálculo que Mi Progreso:
     `completed.length / 14 × 100`), y "¿Quieres armar una ruta distinta?
     Crear otra ruta →" como enlace de texto debajo, no como segunda
     tarjeta del mismo peso — bajado a acción secundaria a propósito.
   - **"Decidir después"** — enlace chico y gris debajo de todo, en ambos
     casos, para quien abre la pantalla sin querer comprometerse todavía a
     ninguna de las dos rutas.

   **Los cuatro caminos llevan al mismo lugar: `v.chooseGoInicio` → Inicio
   (11 ago 2026, tercer ajuste de esta misma pantalla el mismo día).**
   Se probaron dos versiones antes de esta:
   1. Cada botón con su propio destino profundo (`chooseCreateRoute` →
      `formulario`, `chooseExplore` → `acompanamiento`, replicando el
      diseño original de esta pantalla).
   2. Solo "Explorar" corregido a `inicio` (para no chocar con Acompañamiento
      sin avance previo), "Crear ruta" seguía yendo a `mis-rutas`/`formulario`.

   Both se dejaron de lado por el mismo problema: **"Continuar explorando
   CoRA" desde una cuenta sin ningún avance caía directo en el modal
   "Acceso Bloqueado"**, justo después de elegir — mal primer momento.
   La solución no fue parchear caso por caso, sino notar que **Inicio ya
   resuelve solo qué mostrar primero** (su CTA final ya dice "Continuar con
   CoRA me conoce" sin ruta, o "Tu ruta: X% avanzado" con ruta — ver más
   abajo, "Inicio: dashboard con 2 estados"). Los cuatro botones de esta
   pantalla (las dos tarjetas, el enlace "Crear otra ruta" y "Decidir
   después") comparten ahora un solo handler, `v.chooseGoInicio`, que
   siempre hace `authStep:"done", section:"inicio"` — sin `REQ` que pueda
   bloquear, sin candado posible viniendo de aquí. La pantalla queda como
   lo que en el fondo siempre fue: un momento cálido de bienvenida que
   capta la intención (para el tono, no para la ruta de navegación) antes
   de entregar al estudiante al hub que ya sabe qué mostrarle.

   **Saludo de primera vez / de vuelta (`v.choiceWelcome`).** Como esta
   maqueta no tiene autenticación real, `s.hasVisitedBefore` (arranca en
   `false`, nunca se resetea — ni al cerrar sesión) es la única forma de
   distinguir "primera vez en esta sesión del navegador" de "ya entraste
   antes". Se congela en `s.choiceReturning` justo en `v.loginSubmit`,
   ANTES de poner `hasVisitedBefore` en `true` — si se leyera
   `hasVisitedBefore` directo en la pantalla de elección, siempre daría
   "de vuelta" porque `loginSubmit` ya la marcó en `true` un instante antes.

**Por qué la pantalla de login se salta en el tablero y en el visor, pero no
al abrir el archivo directo.** El gate real es `v.appUnlocked = this.props.unlockAll
|| s.authStep === "done"`. La prop candidata obvia era `startSection`
("si vino con una pantalla fijada, es una vista previa") pero **no
funciona**: `startSection` tiene un valor por defecto (`"inicio"`) en el
propio `data-props` del componente, así que siempre llega con algo — nunca
es un buen indicador de "esto es una vista previa de herramienta". `unlockAll`
sí sirve: su default es `false`, y tanto `pantalla.html` como `index.html` lo
mandan en `true` explícitamente al arrancar el iframe (`__dcSetProps`) — es
la señal real de "esto es una carga de la herramienta de diseño, no un
arranque real de un estudiante". Si alguna vez se agrega una prop nueva de
vista previa, revisar que también mande `unlockAll:true`, o el login se
volverá a colar en el tablero.

**"Tu ruta actual" — recordatorio persistente bajo Inicio.** Un chip fijo en
el sidebar, justo debajo del ítem "Inicio" (`v.hasCurrentRoute = !!s.selectedRoute`,
`v.currentRouteLabel`), visible en todas las pantallas una vez que existe una
ruta. Tocarlo llama a `this.nav("malla")` — el mismo `nav()` de siempre, con
el mismo bloqueo por `REQ`: si la ruta ya se eligió en Mis Rutas pero
Ecosistema CIE o la malla todavía no se completaron, el chip lleva al modal
de bloqueo normal en vez de saltarse pasos; una vez que "Elijo mi Ruta" está
completo, lleva directo ahí. No es un enlace nuevo con su propia lógica —
es la forma de que el estudiante, sin recordar en qué pantalla quedó, vuelva
al lugar donde ve el detalle completo de la ruta que ya eligió.

Antes decía "en RECOMENDADOR" a secas; con el sidebar partido en dos grupos
(arriba), ese texto quedó ambiguo. Ahora `v.blockedGroupLabel` calcula "CREA
TU RUTA" o "EXPLORA CORA" según si `s.blocked` está en el mismo `configIds`
que ya usa el contador del sidebar — un solo dato, sin duplicar la lista de
ids en dos lugares.

**"Crea tu Ruta" se atenúa cuando ya está completa.** Antes, el grupo del
sidebar se colapsaba solo (una vez) al terminar el paso 4, pero el
encabezado se veía igual de "activo" que cuando faltaba algo. Ahora, cuando
`configDone === configIds.length` (`v.configDoneAll`), el encabezado:
- baja de opacidad y pasa a escala de grises (`v.configHeaderStyle`, objeto
  con `opacity` y `filter` — sigue siendo clickeable, solo se le quita
  protagonismo visual);
- cambia el contador "N de 4" por un pill verde "✓ Completado"
  (`v.configDoneBadge`, mismo verde `#15803d`/`#dcfce7` que otros badges de
  "hecho" en la app);
- al pasar el mouse por encima aparece un tip morado (mismo estilo visual
  que `Tip.dc.html`, pero disparado por `onMouseEnter`/`onMouseLeave` sobre
  todo el encabezado — no por un ícono "?" aparte) explicando: "Ya armaste
  tu ruta — puedes revisarla aquí o seguir directo con Acompañamiento, más
  abajo" (`s.configTipOpen`, `v.configTipShow`/`v.configTipHide`).

El clic sigue expandiendo/colapsando igual que siempre (`v.toggleConfig`) —
la idea es que se vea "hecho, de lado" pero nunca se pierda el acceso a
revisar la ruta creada.

**Candado preventivo en los ítems del sidebar todavía no alcanzables.**
Antes, un ítem sin desbloquear se veía igual que uno disponible — el
estudiante solo se enteraba de que le faltaba algo al hacer clic y topar con
el modal "Acceso Bloqueado". Ahora `navItem(id, icon, label)` calcula
`locked` con el mismo `this.REQ[id]` que ya usa `this.nav()` (si hay
prerequisito, no está en `s.completed` y no es `unlockAll`), y eso alimenta
tres señales a la vez, no solo una:
- **Opacidad** — `item.style` baja a `opacity:0.5` cuando está bloqueado.
- **Candado** — el mismo espacio donde iría el ✓ de "hecho" muestra un
  ícono `lock` gris cuando no hay ✓ posible porque está bloqueado (son
  mutuamente excluyentes: nunca puede estar `done` y `locked` a la vez).
- **Tooltip** — al pasar el mouse por *todo* el botón (no un ícono "?"
  aparte, mismo criterio que el tip de "Crea tu Ruta") aparece "Necesitas
  completar '{{ this.NAMES[req] }}' primero." Como puede haber varios
  ítems bloqueados a la vez, un solo `s.lockedTipId` (no un booleano por
  ítem) guarda cuál está bajo el mouse en cada momento.

El clic sigue funcionando exactamente igual que antes (`this.nav(id)`, con
su propio modal si corresponde) — el candado es una advertencia antes del
clic, no un cambio en qué pasa después del clic.

**Nombres de pantalla en "Explora CoRA": "Veo mi horizonte profesional" y
"Acompañamiento Académico".** Antes eran "Veo mi Horizonte" y
"Acompañamiento" a secas. El cambio es de nombre visible, no de `id` (regla
5: los `id` de sección — `horizonte`, `acompanamiento` — no se tocan, están
enlazados con `REQ`, `screens.js` y las URL). `this.NAMES` es la fuente
central (usada por el modal "Acceso Bloqueado", los candados del sidebar y
las metas de Mi Progreso), así que renombrar ahí ya propaga a casi todo;
además se actualizaron a mano el breadcrumb y el `<h1>` de cada pantalla,
los botones "Continuar a...", la pantalla de elección post-login y
`screens.js` (para que el tablero y el selector de `pantalla.html`
coincidan). El `<h1>` de Horizonte sigue diciendo "🌅 Tu Horizonte Laboral"
a propósito — es un título de contenido, distinto del nombre de navegación.

**Los ítems de Explora CoRA ya no tienen tooltip propio — solo el grupo.**
Cada ítem (Mi Perfil CoRA, Veo mi horizonte profesional, Crea mi CV,
Acompañamiento Académico) seguía mostrando su candado + tooltip individual
("Necesitas completar 'X' primero") heredado de `navItem()`, igual que
"Crea tu Ruta"/"Académico"/"Ajustes". Por pedido explícito, se le quitaron
el `onMouseEnter`/`onMouseLeave` y el `<sc-if value="{{ item.showLockTip }}">`
solo a la plantilla de `navReco` — el candado (ícono + opacidad) se queda,
lo único que se fue es el mensaje al pasar el mouse, porque el grupo entero
ya tiene su propio tooltip explicando lo mismo una sola vez. Las otras tres
listas (`navConfig`, `navAca`, `navSet`) no se tocaron: siguen mostrando su
tooltip por ítem igual que antes — `navItem()` en `renderVals()` sigue
calculando `showLockTip`/`lockTipText` para todos por igual, es solo la
plantilla de Explora CoRA la que dejó de usarlos.

**"📚 CORA ACADÉMICO"** (antes "📚 ACADÉMICO") — mismo patrón que "⚙️
AJUSTES": un `<p>` fijo, nunca colapsable. A diferencia de "🟣 CREA TU RUTA"
(que sí se puede colapsar porque es un trámite que se hace una sola vez),
Académico y Ajustes son secciones de uso diario — quedan siempre abiertas
a propósito, no hay `configCollapsed`-equivalente para ninguna de las dos.

**Tutor CoRA / Práctico / Flashcards ya no dependen de terminar el
Recomendador — están siempre disponibles.** Antes `REQ` exigía
`"acompanamiento"` para los tres; se quitaron esas tres entradas de `REQ`
(no se reemplazaron por otra cosa — simplemente no tienen prerequisito), así
que `navItem()` calcula `locked:false` para siempre y el candado desaparece
solo. En su lugar, cada ítem tiene su propio tooltip **informativo** (qué es
esa herramienta, no "te falta completar X") — `s.acaTipId` guarda cuál está
bajo el mouse, con `ACA_INFO` como fuente de los 3 textos cortos. Es un
mecanismo aparte del candado/tooltip de bloqueo que sigue usando el resto de
grupos (`lockedTipId`) — aquí no hay nada que bloquear, así que no tendría
sentido reusar ese mismo campo de estado.

**"⚙️ Ajustes" (Mi progreso / Perfil / Configuración) tampoco depende ya de
terminar el cuestionario (revisión UX, 11 ago 2026).** Mismo arreglo que ya
se había hecho para Tutor/Práctico/Flashcards, aplicado ahora a este grupo:
antes `REQ` pedía `"formulario"` para los tres, así que aparecían con
candado hasta responder el cuestionario — pero son pantallas de cuenta
(datos personales, tema, notificaciones, tu propio avance), no pasos del
recorrido, y deben verse siempre abiertas igual que Académico. Se quitaron
las tres entradas de `REQ` (sin reemplazo, igual que con Académico) —
`navItem()` calcula `locked:false` para siempre y el candado desaparece
solo, sin tocar ningún otro mecanismo.

**Tooltip sobre "✨ EXPLORA CORA":** aclara que todo el grupo se desbloquea
al terminar los 4 pasos de "Crea tu Ruta". Mismo mecanismo que el tip de
"Crea tu Ruta" (`onMouseEnter`/`onMouseLeave` sobre el propio texto,
`s.recoTipOpen`) — pero aquí es un solo tip para todo el grupo, no uno por
ítem (a diferencia del candado individual de cada pantalla bloqueada, que
sigue diciendo qué paso específico falta).

**Nota sobre caché al probar cambios de texto:** el servidor local
(`python -m http.server`) no manda cabeceras que eviten el caché, así que el
navegador puede quedarse con una copia vieja de `CORA App.dc.html` o
`screens.js` aunque el archivo en disco ya esté actualizado — sobre todo el
`<title>` de `pantalla.html`, que se fija una sola vez al cargar. Si un
cambio de texto "no aparece", antes de asumir que el código está mal, forzar
recarga sin caché (Ctrl+Shift+R) o añadir un parámetro nuevo a la URL
(`?cb=2`).

**"Crea mi CV" es su propia pantalla de Explora CoRA, entre Horizonte y
Acompañamiento — no una tarjeta dentro de Acompañamiento.** Se movió ahí
porque el estudiante lo pidió así; el cambio tocó todo lo que asume "7
pantallas de Recomendador" a la vez, no solo el `id` nuevo:
- **`id: "cv"`** nuevo (regla 5: nunca se reusa ni se renombra un `id`
  existente — este es genuinamente nuevo). `REQ["cv"]="horizonte"`. En su
  momento `REQ["acompanamiento"]` pasó a ser `"cv"` — Acompañamiento exigía
  Crea mi CV, no Horizonte directo — pero eso se revirtió el 12 ago 2026
  (ver más abajo, "Acompañamiento se activa apenas termina Crea tu Ruta"):
  ahora exige `"malla"`, no `"cv"`. `NAMES["cv"]`, `STEPPER["cv"]` y `FLOW`
  (que pasa de 7 a 8 ids) siguen el mismo patrón que las demás pantallas de
  referencia.
- **`v.horizonteNext`** ahora manda a `"cv"` (antes mandaba directo a
  `"acompanamiento"`) — ¡ojo con este tipo de bug! Cambiar el TEXTO de un
  botón ("Continuar a Crea mi CV →") sin cambiar el `setState` de adentro
  deja el texto mintiendo sobre a dónde lleva el clic. Al final de la
  pantalla de CV, `v.cvNext` completa `"cv"` (60 CoRAzones, mismo orden de
  magnitud que Perfil CoRA/Horizonte) y recién ahí manda a `"acompanamiento"`.
- **El total de pasos trackeables subió de 13 a 14** — todo lo que dividía
  por ese número fijo (`v.choiceRoutePct` en la pantalla de elección,
  `v.overallPct`/`v.overallFormula` en Mi Progreso) se actualizó a `/ 14`, y
  los `hint-placeholder-count` de las listas que recorren `FLOW`/`recIds`
  (`recBreakdown`, `blockedFlow`) subieron de 7 a 8. Si se agrega OTRA
  pantalla al recorrido principal en el futuro, hay que volver a tocar estos
  mismos puntos — no hay un solo lugar que calcule el total automáticamente.
- El formulario en sí (formato, objetivo, experiencia, proyectos,
  habilidades, idiomas, certificaciones, contacto) es el mismo que ya estaba
  documentado abajo — solo se le quitó el header "Crea mi CV" + botón de
  colapsar/expandir que tenía como tarjeta (ya no hace falta, la pantalla
  entera ya se llama así) y ahora siempre muestra el formulario o la vista
  previa directamente, sin un paso de "Empezar mi CV" intermedio.
- `screens.js`, `index.html` (el conteo "Las 15 pantallas...") y este mismo
  documento (los conteos "13"/"14 pantallas" de más arriba, que ya estaban
  desactualizados desde antes de esta sesión) se corrigieron a 15 — el
  archivo de diseño real nunca tuvo 13, ya eran 14 desde que "Inicio" se
  separó del Recomendador (ver más abajo el bloque "Entrada a CoRA").

Mezcla dos fuentes:

- **Lo que CoRA ya sabe** — nombre, carrera, ciclo, ruta, promedio y las 3
  asignaturas con mejor nota (de `this.TAKEN`), las certificaciones elegidas
  en Ecosistema CIE (`s.ecoAdded`, se agregan solas, no se piden dos veces),
  y una *sugerencia* de objetivo/fortalezas armada desde `s.favoriteRole`
  (Horizonte) y `v.perfilTop3Labels` (Perfil CoRA) — siempre como sugerencia
  con botón "Usar sugerencia"/"Agregar", nunca escrita sola en el estado
  (regla 9: los datos salen de datos reales, pero la decisión de usarlos es
  del estudiante).
- **Lo que solo el estudiante puede contar** — objetivo en sus palabras,
  experiencia previa (empresa/rol/fechas/logro), proyectos, habilidades,
  idiomas y certificaciones externas, teléfono y LinkedIn/portafolio. Cada
  lista usa el mismo patrón de "mini-formulario que llena `cvNewExp`/
  `cvNewProy`/`cvNewIdioma` en estado y al confirmar se empuja a un array"
  que ya usan los electivos de la malla, con chip + botón "×" para quitar
  (`addCvEntry`/`removeCvEntry`/`addCvChip`/`removeCvChip`, class methods
  nuevos junto a `toggleIn`).

**3 formatos reales (`this.CV_FORMATS`), mismas secciones, distinto orden —
no HTML triplicado.** Cronológico, Por habilidades y Mixto no son 3
plantillas separadas: son las mismas 6 secciones (Objetivo, Formación,
Experiencia+Proyectos, Habilidades, Idiomas, Certificaciones) con un número
de `order` de CSS flexbox distinto por sección según `this.CV_FORMAT_ORDER`
— el contenedor de la vista previa es `display:flex;flex-direction:column`
y cada sección lleva su propio `order` en un objeto de estilo
(`v.cvObjetivoStyle`, `v.cvFormacionStyle`, etc.). Cronológico pone Formación
antes de Experiencia; Por habilidades y Mixto ponen Habilidades primero.
Ojo al probar esto en consola: `document.body.innerText` lee el DOM en su
orden de origen, NO el orden visual de `order` — hay que comparar
`getBoundingClientRect().top` entre secciones para confirmar el reordenado
real, si no parece que "no cambió nada" cuando sí cambió.

`v.cvShowForm`/`v.cvShowPreview` alternan entre el cuestionario y la vista
final (`s.cvGenerated`); "✏️ Editar información" vuelve al formulario sin
perder nada de lo ya escrito. El botón "Descargar PDF" es decorativo — dice
explícitamente que es una maqueta.

**Jerarquía de botones corregida (revisión UX, 11 ago 2026).** Mientras se
llena el formulario, dos botones convivían en la misma pantalla: "✨ Generar
mi CV" (dentro de la tarjeta, sin sombra, radio 12px) y, siempre visible
debajo de todo, "Continuar a Acompañamiento Académico →" (con la sombra
morada elevada que este archivo reserva para el botón primario de la
pantalla). El patrón ya aprendido en el resto de la app — "el botón grande
con sombra es el que sigue" — invitaba a pasar directo a Acompañamiento sin
haber generado el CV. Se corrigió invirtiendo el protagonismo según
`s.cvGenerated`:

- **Sin generar (`v.cvGenerateStyle`)** — "Generar mi CV" pasa a tener la
  sombra elevada (protagonista); "Continuar" (`v.cvNextStyle`) baja a
  contorno morado sin relleno ni sombra (secundario, pero sigue siendo
  clicable — no se bloquea la navegación, solo se le quita el
  protagonismo visual).
- **Ya generado** — "Generar mi CV" ya no se muestra (lo reemplaza la
  vista previa con "Editar información"/"Descargar PDF"); "Continuar"
  recupera la sombra elevada, porque ahí sí es el paso siguiente correcto.

**"Cerrar sesión" (Configuración) vuelve al login, sin borrar nada.**
`v.sessionActions` (los dos botones de cierre de sesión) no tenían `onClick`
— eran solo texto. Ahora los dos llaman a la misma función (`logOut`):
`this.setState({ authStep:"login" })`, sin tocar `s.selectedRoute`,
`s.completed` ni ningún otro dato — igual que cerrar sesión de verdad no te
borra la cuenta. Es, a propósito, la única forma de volver a pasar por el
login/elección dentro de una misma sesión de diseño, para poder revisar la
rama "ya tengo ruta" de la pantalla de elección.

### Elementos presentes en todas las pantallas

Cuatro piezas viven fuera de `<main>` y acompañan al estudiante en todo momento.
Si añades una pantalla, no tienes que hacer nada: aparecen solas.

| Pieza | Dónde | Qué hace |
|---|---|---|
| **Perfil resumido** | Derecha de la barra superior | Nombre, ciclo y carrera. Lleva a *Perfil* al pulsarlo. |
| **Ventanita stepper** | Bajo la barra, sobre `<main>` | Guía la sección actual del recorrido. Se cierra con la ✕ y no vuelve. |
| **Asistente CoRA** | Botón flotante abajo a la derecha | Chat de ayuda general en cualquier pantalla, 360 px, sin perder el contexto. No confundir con el Tutor CoRA (dentro de Académico, para dudas de una asignatura). |
| **Guía de onboarding** | Modal a pantalla completa | Presentación de la plataforma en 4 pasos. Se abre con el botón «Guía». |

El stepper se define en el mapa `STEPPER` de la lógica; la guía, en `ONBOARDING`.
Para añadir la ventanita a una pantalla nueva, basta con darle su entrada en `STEPPER`.

**No todas las entradas de `STEPPER` llevan número de paso.** Las 4 de
Configuración inicial tienen `step`/`of` y muestran el pill "Paso X de Y" +
barra de avance. Mi Perfil CoRA, Veo mi Horizonte y Acompañamiento solo
tienen `title`/`body` (sin `step` ni `of`) — la ventanita igual aparece con
su título y su texto de contexto, pero `v.stepHasProgress` queda en `false`
y el pill + la barra no se muestran. Al agregar una pantalla nueva a
Configuración inicial, hay que actualizar `of` en las demás entradas
numeradas para que la cuenta siga siendo correcta.

Estado activo: fondo `#7B68EE`, texto blanco, sombra morada.
Estado inactivo: fondo transparente, texto `#4b5563`.
Completado: insignia circular verde con un check.

El **recorrido está bloqueado en orden** (mapa `REQ` en la lógica): cada pantalla
del Recomendador exige la anterior. La prop `unlockAll` salta el bloqueo para
poder revisar el diseño.

---

## 4.b Códigos de color con significado

Tres lugares del producto usan el color para clasificar, no para decorar. **No los
cambies sin cambiar también su leyenda**: la leyenda es parte del patrón.

### El % de compatibilidad no es una caja negra

Cada tarjeta de ruta desglosa su `match` en tres criterios (`ROUTES[].matchWhy`:
intereses, fortaleza académica, objetivo profesional) con mini-barras, más una
frase "🎯 Mejor si buscas: …". El objetivo es que el estudiante entienda *para
qué* sirve cada ruta, no solo compare números.

Debajo de la lista de rutas hay una aclaración fija "¿Cuál es la diferencia?"
que distingue Ruta (las asignaturas que se toman) de Horizonte (los trabajos a los
que lleva) — son las dos palabras que más se confunden en el producto.

### Nomenclatura: "ruta" vs. "carrera"/"malla" (corregido 11 ago 2026)

**La carrera real del estudiante es "Administración y Negocios
Internacionales"** (`STUDENT.career`, mismo plan 2024 que ya usa
`CURRICULUM` — ver el comentario de esa constante). "Ingeniería Comercial",
"Marketing y Ventas", etc. (los `name` de `ROUTES`) son **rutas** dentro de
esa carrera — combinaciones de asignaturas/electivos/extracurriculares que
CoRA recomienda — nunca carreras que ofrezca Continental. Antes,
`STUDENT.career` y el `career` inicial de `s.profile` tenían por error el
nombre de una ruta ("Ingeniería Comercial") en vez de la carrera real —
quedó corregido en los dos.

Con esa corrección de dato, se revisó cada lugar donde "carrera"/"malla" se
usaba para referirse en realidad a una ruta, y se corrigió el texto:

- **"🗂️ Historial de mallas guardadas"** (Elijo mi Ruta) → **"Historial de
  rutas guardadas"**: `savedMallas` guarda nombres de rutas confirmadas
  (`v.mallaCareer`, que es `s.selectedRoute`), nunca nombres de malla.
- **"Carrera: {{ mallaCareer }}"** en Elijo mi Ruta y en Veo mi Horizonte
  Profesional → **"Ruta: {{ mallaCareer }}"** en los dos — mismo dato
  (`s.selectedRoute`), que en el resto del archivo ya se etiquetaba bien
  como "Ruta" (ej. `v.mallaLegendRuta.desc = "Ruta activa: " + v.mallaCareer`,
  `v.summaryRouteName` con la etiqueta "Ruta:" en el resumen de "¡Tu malla
  está lista!") — solo estos dos quedaron con la etiqueta vieja.
- **La descripción de la ruta "Ingeniería Comercial"** (`ROUTES[0].desc`)
  empezaba con "Carrera enfocada en..." — se cambió a "Ruta enfocada en...".
- **Perfil** — las tarjetas "📝 Información Personal" y "📚 Información
  Académica" mostraban un campo "Carrera" con `prof.career`/`ctxCareer`
  (el mismo valor con nombre de ruta). Se corrigió mostrando la ruta
  elegida (`s.selectedRoute`, con el texto "Todavía no elegiste una ruta"
  si aún no hay ninguna) bajo la etiqueta **"Ruta"** — no se edita ahí
  (`locked:true`, con el hint "Se elige en 'Elijo mi Ruta', no aquí" en vez
  de "Lo asigna la universidad", que no aplica a una ruta) porque se elige
  en "Elijo mi Ruta", no escribiéndola en Perfil. `v.ctxCareer` (la carrera
  real) se quedó para donde sí corresponde mostrarla, como el widget
  "📍 Tu progreso" de Inicio y el header global (`v.topMeta`).

**Dónde "carrera" sigue siendo correcto, sin tocar:** la entrada "Carrera"
de `v.mallaLegend` (leyenda de categorías de asignatura en la malla:
General/Facultad/Carrera/Electivo, según `cat` en `CURRICULUM`) — ahí
"Carrera" clasifica el TIPO de asignatura ("propia de tu especialidad"),
no la identidad del estudiante ni una ruta. No es el mismo concepto y no
debía cambiar.

### Tipos de ruta (Mis Rutas)

El borde izquierdo de 5 px de cada tarjeta, más una etiqueta junto al título, dicen de qué
tipo es la ruta. Cada ruta es siempre de un solo tipo, nunca una mezcla de los tres:

Solo existen **tres tipos**, y cada ruta es siempre de un solo tipo — no hay
una cuarta categoría de "solo obligatorios":

| Tipo | Acento | Cuándo |
|---|---|---|
| 📘 Curricular | `#f59e0b` | 100 % malla: obligatorios y/o electivos de la propia carrera (`Electivo General…`, `Electivo de Especialidad o Transversal…`). Sin Ecosistema CIE |
| 🌐 Extracurricular | `#0ea5e9` | 100 % Ecosistema CIE (idiomas, institutos, diplomados). Sin asignaturas de la malla |
| 🔀 Combinada | `#ec4899` | Malla (obligatorios y/o electivos) **y** extracurriculares del CIE, las dos cosas a la vez — ninguna reemplaza a la otra |

Se define en el campo `kind` de `ROUTES` (`"curricular"` \| `"extracurricular"`
\| `"combinada"`).

**Ninguna ruta incluye una asignatura de un ciclo que el estudiante ya cursó.**
`ROUTES[].courses` (y `extraCourses` en las combinadas) solo trae asignaturas con
ciclo `>= STUDENT.cycle` — se valida cruzando cada nombre contra el ciclo
real en `CURRICULUM`. Si cambias `STUDENT.cycle` o la asignatura de una ruta,
revisa que ningún nombre pertenezca a un ciclo anterior al actual.

**Al confirmar una ruta, se ve reflejada en la malla.** La pantalla *Elijo mi
Ruta* resuelve en vivo, por nombre contra `ROUTES[].courses`, qué asignaturas de
`CURRICULUM` son "de tu ruta" — no es un dato grabado en la asignatura. Curricular
y combinada resaltan esas asignaturas mucho más que el resto (ver "Categorías de
asignatura" más abajo), sin atenuar el resto: la categoría (General/Facultad/
Carrera/Electivo) de una asignatura debe leerse igual de bien esté o no en la ruta
elegida. Ambas pueden resaltar un slot de `cat:"electivo"` si a propósito lo
incluyen en `courses` (a diferencia de una coincidencia de nombre accidental,
que sigue sin resaltarse).

Extracurricular y combinada, además, muestran sus asignaturas del CIE debajo del
ciclo que les corresponde, con el mismo trato visual que un electivo elegido
pero con su propia etiqueta ("🌐 De tu ruta extracurricular"):
extracurricular los trae en `courses`/`courseCycles`; combinada los trae
aparte, en `extraCourses`/`extraCourseCycles`, porque `courses` ya está
ocupado con su parte de malla.

**Tres momentos de ciclo, según `STUDENT.cycle`:**

| Momento | Cuándo | Trato |
|---|---|---|
| Aprobado | Ciclo menor al actual | Todo el bloque al 60 % de opacidad, título gris, cabecera gris |
| Actual | `cyc.cycle === STUDENT.cycle` | Título y borde morados, cabecera teñida, etiqueta "(Actual)" en el encabezado del ciclo |
| Próximo | Ciclo mayor al actual | Trato normal — sin atenuar ni resaltar |

**Se quitó la etiqueta "EN CURSO" de cada asignatura (revisión UX, 11 ago
2026).** Antes, además del encabezado morado con "(Actual)" ya mencionado
arriba, cada asignatura del ciclo actual (no electivo) llevaba su propia
pastilla "EN CURSO" — la misma información dicha dos veces en el mismo
bloque, sumada a las otras 2-3 insignias que ya podía llevar una tarjeta
(categoría, CFU/"Tu ruta"/"Elegido", prerrequisito). Se quitó el cálculo
(`enCurso`/`enCursoStyle`) y las dos copias de la plantilla (esta pantalla
y la vista previa de malla dentro de Mis Rutas, que comparte el mismo
patrón de tarjeta) — el encabezado del ciclo sigue comunicando lo mismo.

**No más de 5-6 rutas mostradas, nunca un número fijo (11 ago 2026, punto 4
del feedback de diseño — "menos texto, más botones"; ajustado el mismo
día).** `this.ROUTES` sigue teniendo su catálogo completo (11 rutas — otras
pantallas pueden seguir usándolo entero), pero `v.routes` ya no lo mapea
directo. Primer intento: recortar siempre a las 5 mejores por `match`
(`.slice(0,5)`) — pero eso implicaba "siempre 5", y el número real de rutas
lo decide el algoritmo según lo que encuentre para el perfil del
estudiante, no un tamaño de página fijo. Quedó así: `topRoutes` filtra
primero por un umbral de buen match (`r.match >= 70`) y solo **después**
limita a un máximo de 6 (`.slice(0,6)`) — si menos de 6 rutas superan el
umbral, se muestran menos de 6 (nunca se rellena para llegar a un número);
con el catálogo actual da 6, pero el mecanismo no depende de que sea
siempre así. La leyenda de tipos (Curricular/Extracurricular/Combinada)
cuenta sobre `topRoutes`, no sobre el catálogo completo, para que el número
de la leyenda coincida con lo que se ve en pantalla. El texto de arriba usa
`topRoutes.length` (nunca un "5" ni "6" sueltos en el texto): "CoRA analizó
tu perfil y estas son tus {{N}} rutas más compatibles."

**El párrafo de descripción de cada ruta (`r.desc`) se movió a un tooltip.**
Antes había un párrafo de 1 frase siempre visible bajo el título de cada
tarjeta. Ahora vive en un ícono `Tip` junto al título — el dato sigue
disponible, solo que a demanda.

**El desglose "¿Por qué este %?" volvió a la tarjeta, visible siempre (11
ago 2026, punto 5 del feedback de diseño; primero se quitó y se movió a un
tooltip junto al %, y en el mismo día se pidió lo contrario — la caja de
vuelta, sin ese tooltip).** Cada tarjeta muestra, debajo de la barra de
match, una caja con 3 líneas (Tus intereses / Tu fortaleza académica / Tu
objetivo profesional, cada una con su propia barra y %) más una frase "🎯
Mejor si buscas: …". El dato es siempre `r.matchWhy` (nunca se dejó de
calcular durante el vaivén); solo cambió dónde se muestra: ya no hay ningún
`Tip` junto al número de match — el ícono se quitó del todo de esa fila,
que ahora es solo la barra y el "{{ match }}%".

**"Ver asignaturas incluidas" ahora se puede tener abierto en varias
tarjetas a la vez (revisión UX, 11 ago 2026).** `s.routeDetail` guardaba un
solo nombre de ruta (o `null`): abrir el detalle de la Ruta B cerraba
automáticamente el de la Ruta A, sin importar si el estudiante lo había
abierto a propósito. Esto contradecía el propio propósito de la pantalla —
la ventanita de contexto dice literalmente "Compara antes de decidir: abre
el detalle de cada ruta para ver qué asignaturas incluye", y comparar dos
listas de asignaturas necesita verlas las dos a la vez. Se cambió a
`s.routeDetails` (arreglo, vacío por defecto) con el mismo helper
`this.toggleIn` que ya usa el resto del archivo para este patrón (ej.
`s.scheduled`, `s.expanded`) — ahora cualquier cantidad de tarjetas puede
quedar abierta al mismo tiempo, cada una independiente de las demás.

### De Mis Rutas al Ecosistema CIE

Confirmar una ruta no salta directo a Ecosistema CIE: primero se ve la vista
previa de la malla, todo dentro de la pantalla *Mis Rutas* (`s.mallaPreview` /
`s.extraStep`). Desde ahí hay dos caminos, no uno solo:

```
                              ┌─ 🎓 Explorar más extracurriculares ─┐
elegir ruta → confirmar → vista previa de la malla ─┤                                    ├─→ Ecosistema CIE
                              └──────── Continuar a Ecosistema CIE ────────┘
```

1. **Vista previa de la malla** — cómo queda tu malla con la ruta elegida (ver arriba).
   Al pie tiene dos botones, cada uno con su propio tooltip al pasar el mouse:
   - **🎓 Explorar más extracurriculares** — abre el paso opcional de abajo.
   - **Continuar a Ecosistema CIE →** — se salta ese paso e ingresa directo.
2. **Explorar extracurriculares** (opcional) — los extracurriculares recomendados
   (`ECO_RECO` vía `ecoExtra`) se revisan aquí, no en Ecosistema CIE.

**Se puede retroceder en cualquier punto** — cada pantalla de este tramo tiene su
"← Volver": de la vista previa a la lista de rutas, del paso de extracurriculares
a la vista previa, y de Ecosistema CIE de vuelta a la vista previa
(`backToMallaFromEco`), sin importar por cuál de los dos caminos se llegó.

### Ecosistema CIE

Son cinco piezas fijas, en este orden, cada una su propia sección desplegable:

| # | Sección | Contenido |
|---|---|---|
| 1 | 🌍 Experiencias Internacionales | Equivalencias UC ↔ CFU (`EQUIV_CFU`) — con el logo de CFU junto al título |
| 2 | 🛠️ Instituto Continental | Sin información cargada todavía — aviso explícito, no datos inventados |
| 3 | 🗣️ Centro de Idiomas | `IDIOMAS_PROGRAMS` — 5 programas destacados de `idiomasProgramCount` totales |
| 4 | 🎓 Continua | `CONTINUA_PLATFORMS` — plataformas externas (LinkedIn Learning, Coursera…) |
| 5 | 🎯 Escuela de Posgrado | `POSGRADO_PROGRAMS`, por área |

No está bloqueada por ciclo — las cinco se ven siempre — pero **sí hay que
abrir las cinco al menos una vez antes de continuar a la malla**: es un
recorrido con orden, no una lista suelta. "Abrir" es para siempre

**Revisión "menos texto, más botones" (11 ago 2026, punto 4 del feedback de
diseño) — sin cambios aquí.** Se evaluó aplicar el mismo patrón de Mis
Rutas (párrafo → chips + detalle a demanda), pero esta pantalla ya cumplía
el objetivo: las tarjetas de catálogo (`idiomasCards`/`continuaCards`/
`posgradoCards`) ya son nombre + meta corta + pastilla de costo, sin
párrafo; "Lo que CoRA te recomienda" (`ecoRecos`) ya es una frase de una
línea por tarjeta, no un párrafo; y los párrafos largos de cada sección
(la internacionalización, qué es Continua, etc.) ya viven detrás de un
"Expandir" — nunca se ven por defecto. Si en el futuro se agrega texto
largo nuevo aquí, seguir este mismo criterio en vez de mostrarlo siempre.

**Se quitaron los 5 `Tip` de encabezado de sección (revisión UX, 11 ago
2026, a pedido explícito).** Cada una de las 5 secciones (Experiencias
Internacionales/CFU, Instituto Continental, Centro de Idiomas, Continua,
Escuela de Posgrado) tenía un ícono `Tip` junto al logo del encabezado, con
una frase corta explicando qué es esa sección. Se quitaron los 5 —
quedan solo el logo/nombre en el encabezado; el párrafo interno (visible
al expandir) sigue explicando lo mismo con más detalle, así que no se
perdió información, solo el atajo redundante en el encabezado colapsado.
(`s.ecoVisited`, separado de `s.expanded`): cerrar una sección después de
verla no le quita el check, así que se puede ir y volver en varias sesiones
sin perder avance.

**La ruta visual** (`v.ecoTrailNodes`, tarjeta "🧭 Tu recorrido por el CIE",
justo debajo del aviso "Un recorrido por el ecosistema"): un nodo circular
por sección, conectados por una línea que se va llenando de morado a medida
que se visitan — para que sea evidente que es un trayecto, no una lista.
Cada nodo es un botón que abre esa sección directamente. Estados:

| Estado | Círculo | Cuándo |
|---|---|---|
| Visitada | Morado lleno + ✓ | Ya se abrió al menos una vez |
| Siguiente sugerida | Borde lila + halo | La primera no visitada, en orden |
| Pendiente | Borde gris | El resto |

**La línea llega hasta el nodo más avanzado, no hasta "cuántos se
visitaron" (revisión UX, 11 ago 2026).** `v.ecoTrailFillPct` calculaba el
ancho de la línea como `(cantidad visitada - 1) / 4` — una posición basada
solo en el conteo. Como el banner de esta pantalla invita explícitamente a
abrir las 5 secciones "en el orden que quieras", eso rompía la metáfora: si
el estudiante abría primero 🎯 Escuela de Posgrado (la última) sin tocar
las demás, ese nodo quedaba morado con ✓, pero la línea seguía en 0 % —
un punto marcado "flotando" al final de una línea vacía. Ahora se calcula
sobre el índice del nodo visitado más lejano (`lastVisitedIdx`, el mayor
índice de `ECO_STEPS` con `visited(id)` cierto), así que la línea siempre
llega hasta el último punto marcado, sin importar el orden real de visita.

El botón final (`v.ecoCtaLabel`/`ecoCtaStyle`/`ecoCtaClick`) refleja el
estado: gris y sin acción mientras falte alguna ("🔒 Explora las 5 secciones
para continuar (X/5)"), morado y activo ("Continuar malla →") solo cuando
`v.ecoAllVisited` es `true`.

**Costo, siempre visible y consistente.** Toda asignatura o programa del ecosistema
dice si es gratis o pagado — nunca queda ambiguo comparado con uno similar:

| Sección | Costo |
|---|---|
| Centro de Idiomas | Inglés = `INCLUIDO`; Portugués, Italiano, Quechua = pagado |
| Continua | Todo `INCLUIDO` — por eso "Continua" no cobra aparte |
| Escuela de Posgrado | Pagado, con `"Con becas disponibles"` |

Se define en el campo `cost` de `IDIOMAS_PROGRAMS`, `CONTINUA_PLATFORMS` y
`POSGRADO_PROGRAMS`. `"INCLUIDO"` pinta verde (`#dcfce7`/`#15803d`); cualquier
otro valor pinta gris neutro — el mismo trío que ya usa `ECO_RECO`/`ecoExtra`.

**Buscador por interés.** Un solo campo de texto (`s.ecoSearch`) más chips de
interés (Idiomas, Negocios, Tecnología, Salud, Posgrado) filtran a la vez
Centro de Idiomas, Continua y Escuela de Posgrado por nombre. Los chips de
categoría completa (Idiomas, Posgrado) matchean por contexto, no por nombre
literal — ningún idioma se llama "Idiomas", así que el filtro busca también
contra palabras de categoría (`matchesSearch(name, extra)`), no solo el
nombre de la asignatura.

### Categorías de asignatura (Malla)

`CURRICULUM` trae la malla real y completa (10 ciclos) de la EAP
Administración y Negocios Internacionales, plan 2024. Cada asignatura se codifica
en **dos capas independientes**, tal como en el mapa curricular oficial:

**1. Categoría académica** — punto de color + etiqueta de 9 px sobre el
nombre de la asignatura. Es fija, viene del campo `cat` de `CURRICULUM`:

| Categoría | Color | Qué agrupa |
|---|---|---|
| General | `#22c55e` | Comunicación, idiomas, laboratorios de liderazgo |
| Facultad | `#3b82f6` | Base común de negocios (matemática, economía, finanzas…) |
| Carrera | `#f97316` | Propias de Administración y Negocios Internacionales |
| Electivo | `#6b7280` | Electivos generales y de especialidad/transversales |

Se define en el campo `cat` de `CURRICULUM` (`"general"` \| `"facultad"` \|
`"carrera"` \| `"electivo"`). La asignatura del ciclo en el que está el estudiante
(`STUDENT.cycle`) además lleva una etiqueta morada **EN CURSO**.

**2. Pertenencia a la ruta elegida** — ya no hay una línea conectora ("el
hilo") entre las asignaturas de la ruta: la asignatura de tu ruta se distingue por
tener MUCHO más contraste que el resto, no por una guía visual aparte. No es
un dato grabado en la asignatura: se resuelve en vivo contra `ROUTES[].courses`.
Una asignatura puede ser, por ejemplo, "Carrera" y a la vez ser de tu ruta — son
dos informaciones distintas y pueden coincidir.

| Estado | Fondo · Borde · Texto | Detalle |
|---|---|---|
| Asignaturas de tu ruta | `#ede9fe` · `#7B68EE` (2 px, alrededor) · `#3B2F80` | Sombra `rgba(123,104,238,.45)` + insignia "🧭 Tu ruta" + nombre en negrita 800 |
| Fuera de tu ruta | `#ffffff` · `#f3f4f6` (1 px) · `#1A1040` | Sin sombra, nombre en negrita 600 |
| Electivos que eligió el estudiante | `#f0f9ff` · `#bae6fd` · `#0369a1` | Acento `#0ea5e9`, borde izquierdo de 4 px |
| Elegido por CFU (ver abajo) | `#ecfeff` · `#a5f3fc` · `#0e7490` | Acento `#06b6d4`, borde izquierdo de 4 px |

"Asignaturas de tu ruta" es, a propósito, el estado con más contraste de los
cuatro — es el que más le importa al estudiante reconocer de un vistazo. Los
otros tres siguen con un borde fino de 1 px (o izquierdo de 4 px); solo el de
tu ruta tiene borde grueso de 2 px alrededor, fondo lleno y sombra.

En la leyenda (`v.mallaLegendRuta`, separado de `v.mallaLegend`), "Asignaturas de
tu ruta" también se ve distinto al resto: una insignia morada llena con texto
blanco, en vez del punto de color + texto plano que usan las demás entradas
— la leyenda debe reflejar la misma jerarquía que la malla.

**Nombre de la asignatura, siempre en máximo 2 líneas.** El nombre usa
`display:-webkit-box` + `WebkitLineClamp:2` + `overflow:hidden` — trunca con
"…" si el nombre real es muy largo, en vez de desbordar la tarjeta. La grilla
de ciclos pasó de 5 a 4 columnas (`repeat(4,minmax(0,1fr))`) para dar más
ancho a cada tarjeta y que truncar sea la excepción, no la norma.

### Electivos elegidos del Ecosistema CIE (Malla)

Los extracurriculares que el estudiante agrega desde cada ciclo (botón "+
Agregar extracurricular") ya no aparecen repartidos dentro de la tarjeta de su
ciclo: se juntan todos en una sola franja horizontal, con scroll lateral,
debajo de la grilla de 10 ciclos (`v.chosenElectives`, calculado sobre
`s.extras`). Cada chip lleva su ciclo de origen y una 'x' para quitarlo. Sin
elegidos, muestra un texto vacío invitando a usar "Agregar extracurricular".

Se quitó la sección "🎓 Al terminar" que antes cerraba la malla — no aportaba
información que no estuviera ya en la malla o en esta franja.

**Sin tope, y siempre por acción explícita.** No hay límite de cuántos
extracurriculares se pueden agregar por ciclo ni en total (`canAdd` es
siempre `true`) — antes eran máximo 3. Agregar uno nunca es automático:
requiere abrir el modal del ciclo, elegirlo de la lista y confirmar
(`onClick` del modal, `extModalClose` al confirmar). Un texto junto al
encabezado de la franja y el `Tip` de la malla lo dejan explícito, y aclaran
además que estas asignaturas **no cuentan** para los `mallaTotalCredits` créditos
de la carrera — son extracurriculares, no créditos de malla.

### Progreso real de créditos + tope por ciclo (Malla, 12 ago 2026)

El encabezado de la malla mostraba solo el total de la ruta (`{{
mallaTotalCredits }} créditos totales`, siempre 216) sin decir cuántos ya
llevaba el estudiante. Ahora dice **progreso real**: "62 de 216 créditos ·
Te faltan 154" (`v.mallaCreditsProgressLabel`). El avance se calcula sumando
`cyc.credits` de los ciclos ya aprobados (`cyc.cycle < STUDENT.cycle`) sobre
`CURRICULUM` — el ciclo actual no cuenta porque todavía se está cursando, no
está aprobado (mismo criterio de "Aprobado"/"Actual"/"Próximo" que ya usa el
resto de la malla). Con `STUDENT.cycle = 4`, eso son los ciclos 1-3 (20 + 21
+ 21 = 62).

**Tope de 25 créditos de malla por ciclo**, nueva constante
`this.MAX_CREDITS_PER_CYCLE`. Cada tarjeta de ciclo ahora dice "📌 X / 25
créditos de malla" en vez de solo "X créditos" — ninguno de los 10 ciclos
del plan 2024 lo supera (el más cargado es el ciclo 10, con exactamente 25).
El `Tip` del encabezado de la malla deja explícito que ese tope es solo de
créditos de malla curricular: los extracurriculares del Ecosistema CIE que
el estudiante agrega desde cada ciclo (ver más arriba) no cuentan para él,
igual que ya no cuentan para el total de la carrera.

### Equivalencias CFU elegidas (Malla)

Desde 🌍 Experiencias Internacionales, en Ecosistema CIE, el estudiante puede
marcar una asignatura UC como "elegido por CFU" (botón "+ Elegir por CFU" en
`EQUIV_CFU`, guardado en `s.cfuChosen` por nombre de asignatura UC). Esa elección
se refleja de inmediato en la malla, para que sea evidente que esa asignatura ya
no se cursará en la UC sino por convalidación internacional:

- **Color** — la asignatura pasa a la paleta CFU (tabla de arriba), con prioridad
  sobre el color de ruta o el neutro — una asignatura puede ser de tu ruta y a la
  vez CFU, y el CFU manda visualmente.
- **Nomenclatura** — el nombre mostrado cambia al nombre de la asignatura CFU
  equivalente (`cfuByUcName`, desde `EQUIV_CFU[].cfu`); debajo aparece
  "Equivale a: {nombre UC}" para no perder la referencia, más una etiqueta
  "🇺🇸 CFU".
- **Leyenda** — "Elegido por CFU" se agregó como entrada propia en
  `v.mallaLegend`, igual que cualquier otro color con significado.

Este trato se aplica tanto en la malla principal (*Elijo mi Ruta*) como en la
vista previa de la malla dentro de *Mis Rutas* — misma lógica, mismo dato.

**Acceso directo de vuelta a la malla.** Mientras se explora Experiencias
Internacionales, si hay al menos una asignatura elegida por CFU (`v.hasCfuChosen`),
aparece un aviso con el conteo y el botón "Ver mi malla final →"
(`v.ecoCtaClick`, el mismo que "Continuar malla →") — no hace falta terminar
de explorar las otras secciones para ver el efecto en la malla.

### Prerrequisitos, electivos recomendados y detalle de asignatura (Malla)

Cada tarjeta de la malla es clicable (`onClick`, mismo patrón que el flip de
las flashcards) y abre un panel lateral fijo de detalle ("Viendo detalles:"),
compartido entre la malla principal y la vista previa de *Mis Rutas* — mismo
dato, mismo panel, sin duplicar lógica.

**Prerrequisitos.** `CURRICULUM` incorpora un campo opcional `prereq` (nombre
exacto de la asignatura previa) en las ~15 asignaturas claramente secuenciales
del plan (Comprensión de Textos 1→2, English Course 1→2→3→4, Finanzas 1→2,
Laboratorio de Liderazgo e Innovación → Intermedio → Avanzado, etc.). Si una
asignatura tiene `prereq`, su tarjeta muestra una insignia circular pequeña
(ícono de eslabón, esquina superior derecha); el panel de detalle revela cuál
es el prerrequisito en una caja ámbar. Las asignaturas sin `prereq` no
muestran insignia ni caja — no es un estado "vacío" visible, es la ausencia
del dato.

**Recomendación de electivos.** Un nuevo campo `ELECTIVE_CATALOG` (14
asignaturas reales, generales y de especialidad, cada una con `tags` de tema)
alimenta la recomendación. Al abrir el detalle de un cupo "Electivo" que **no**
esté ya cubierto por la ruta elegida del estudiante y que el estudiante **no**
haya elegido todavía, el panel muestra "💡 CoRA recomienda" con 3 opciones del
catálogo, ordenadas por coincidencia de `tags` con la ruta activa — no es una
lista fija, cambia según la ruta. Elegir una:

- Reemplaza el nombre y la descripción/competencias mostradas en la tarjeta y
  en el panel (`s.electiveChoices`, por nombre de cupo → nombre de asignatura
  elegida) — el cupo original (`CURRICULUM`) nunca se modifica, la elección es
  una capa aparte, igual que `s.cfuChosen` o `s.movedCourses`.
- Pinta la tarjeta con el mismo acento celeste de "Electivos que eligió el
  estudiante" (tabla de arriba) y agrega la insignia "✓ Elegido".
- Habilita en el panel el botón "↺ Elegir otro electivo" para deshacer la
  elección y volver a ver recomendaciones.

Si el cupo ya está cubierto por la ruta (por ejemplo, ya aparece resaltado
como "Tu ruta") o ya tiene una elección hecha, no se ofrecen recomendaciones
— evita sugerir algo que el estudiante ya tiene resuelto.

**Panel de detalle.** Además de prerrequisito y recomendación, el panel
siempre muestra: ciclo y categoría, nombre, tipo y créditos, descripción
(`desc`) y hasta 2 competencias (`comp`) por asignatura — datos reales de
`CURRICULUM`/`ELECTIVE_CATALOG`, no texto de relleno. Dos acciones de cierre:

- **"↕️ Mover a otro ciclo"** — despliega los ciclos restantes (excluye el
  ciclo actual), guarda la elección en `s.movedCourses` (nombre → ciclo
  destino). Es la misma idea de capa-de-estado que los electivos elegidos:
  `CURRICULUM` conserva el ciclo original, la malla se reconstruye en cada
  render cruzando `CURRICULUM` con `s.movedCourses`.
- **"Consultar CoRA sobre este curso" / "Nueva consulta"** — navega a
  Tutor CoRA con esa asignatura como chip seleccionable (se agrega a la
  lista aunque no sea una de las 4 fijas) y su descripción real como contexto.
  "Nueva consulta" además limpia el historial de esa asignatura en
  `s.msgsByCourse` para empezar de cero.

**Pendiente, a propósito.** El pedido original incluía "ver el sílabo" desde
el panel — no se implementó porque no existen documentos de sílabo reales que
enlazar; se dejó fuera en vez de simular un enlace roto. Si se quiere una
versión maqueta (botón que abra un modal de aviso "Próximamente"), es un
cambio pequeño y aislado.

### Pantalla de cierre al confirmar la malla

"✓ Confirmar malla final" ya no navega directo a *Mi Perfil CoRA*: dentro de
la misma sección `malla`, cambia a una pantalla de cierre propia
(`s.mallaDone`, análoga a `s.mallaPreview` en Mis Rutas — un sub-estado, no
una sección nueva en `screens.js`). Dos sub-estados excluyentes:

- `v.mallaEditing` (`!s.mallaDone`) — la malla editable de siempre.
- `v.mallaShowSummary` (`s.mallaDone`) — la pantalla de cierre.

**La pantalla de cierre** deja evidente que el proceso terminó, con mensaje
inspirador, y reúne:

1. **Resumen** — ruta elegida, asignaturas de tu ruta, electivos elegidos, asignaturas
   por CFU y créditos totales (`v.summaryStats`), todo calculado de los
   mismos datos que la malla, no repetido a mano.
2. **Correlación con tu perfil** — reutiliza `ROUTES[].matchWhy` (intereses /
   fortaleza académica / objetivo profesional, más `bestFor`): es literalmente
   el desglose del % de compatibilidad que ya se mostraba en Mis Rutas, no un
   dato nuevo inventado para esta pantalla.
3. **Beneficios** (`v.summaryBenefits`) — 2 a 4 frases armadas a partir de lo
   que el estudiante realmente eligió (CFU, electivos, `bestFor`), más un
   recordatorio fijo de que puede volver a personalizar cuando quiera.
4. **Descargar malla PDF** — se movió aquí desde el pie de la malla editable;
   ya no vive en la pantalla de edición.
5. **"✏️ Personalizar de nuevo"** (`v.mallaEdit`) — vuelve a `mallaEditing`
   sin perder nada: `s.extras`, `s.cfuChosen` y `s.selectedRoute` no se tocan.
6. **Historial de mallas guardadas** (`s.savedMallas`, nombre + fecha) — cada
   confirmación agrega un registro arriba de la lista (`v.mallaConfirm`), con
   la fecha del día (`this.today()`) y una etiqueta "Actual" en el más
   reciente (`v.savedMallasList[].isLatest`). Arranca con dos registros de
   sesiones previas para que el historial no se vea vacío la primera vez.

### Veo mi Horizonte: tres capas que cambian con el ciclo

**Las cajas "RUTA vs HORIZONTE" y "PERFIL CoRA vs HORIZONTE" quedaron
reducidas a una etiqueta + un solo `Tip` (revisión UX, 11 ago 2026).**
Antes, "RUTA vs HORIZONTE" tenía dos líneas de texto fijas ("RUTA = las
ASIGNATURAS que cursarás · HORIZONTE = los TRABAJOS que obtendrás") **más**
un `Tip` aparte con un tercer texto distinto ("Tu ruta académica está
diseñada para llevarte exactamente a estas oportunidades laborales") — dos
explicaciones conviviendo, una de ellas siempre visible. "PERFIL CoRA vs
HORIZONTE" (en Mi Perfil CoRA) tenía el mismo patrón de texto fijo, sin
ningún `Tip`. Las dos cajas quedaron iguales: solo el título corto ("RUTA
vs HORIZONTE" / "PERFIL CoRA vs HORIZONTE") + un ícono `Tip` con las
frases fusionadas en un solo texto — nada de información se perdió, solo
dejó de estar siempre visible.

Contenido real provisto por el equipo de diseño (documento "Nuevas
Funcionalidades CoRA"), reemplaza la maqueta anterior (grilla de 3 puestos +
gráfico de barras). La sección tiene tres capas, en `HORIZONTE` (class
field, dos casos: `inspire` y `informDecide`):

1. **Modo, según el ciclo** — `v.isInspireMode` es `STUDENT.cycle <= 5`
   (mitad de los 10 ciclos de la carrera). Ciclos tempranos **inspiran**
   (roles, dónde trabajar, emprender, una historia de egresado, sin cifras
   duras todavía); ciclos avanzados **informan para decidir** (demanda,
   salario, proyección, brecha frecuente, hacia dónde buscar trabajo ya).
2. **Vista resumen (tablero)** — siempre visible, en tarjetas separadas (no
   un solo bloque de texto): cada bloque tiene su icono en una cajita de
   color (mismo patrón que "Predictibilidad académica" en Acompañamiento) y
   sus datos como chips de color — el mismo lenguaje visual que los `#tag`
   de Mis Rutas y los chips de habilidades que ya existían aquí. Roles,
   empresas y habilidades son chips; la historia del egresado va en una
   tarjeta lavanda con cita en cursiva; el modo informar-decidir usa 3
   tarjetas de estadística (Demanda/Salario/Proyección) más una tarjeta
   verde (cobertura) y una ámbar (brecha, mismo color que "riesgo medio").
3. **Detalle desplegado** — oculto por defecto (`s.horizonteDetail`, un
   botón "Ver el detalle completo" lo despliega, mismo patrón de acordeón
   que el resto de la app). Repite cada bloque del resumen con el texto
   completo: las empresas y emprendimientos pasan de chip a mini-tarjeta con
   icono + descripción; las listas de habilidades usan el icono `check`
   verde (igual que el plan de acompañamiento sugerido); la cita del
   egresado se ve completa; microcredencial sugerida, etc.

**"Pregúntale al Asistente CoRA"** — chips de preguntas sugeridas, distintas
por modo (`H.chips`). Tocar una no navega a ninguna pantalla: usa
`this.askAssistant(pregunta)`, que abre el widget flotante del Asistente
CoRA donde sea que esté el estudiante y agrega la pregunta como si la
hubiera escrito ahí (`s.assistantMsgs` — ver "Dos chats distintos" más
abajo) — es la capa "interactiva y conversacional con IA" que pedía el
documento, reutilizando el chat que ya existe en vez de construir uno nuevo.

**Metas favoritas: roles, empresas e ideas de emprendimiento.** Las tres
tarjetas de chips del modo Inspirar ("Roles a los que conecta", "Dónde
podrías trabajar", "Y si quieres crear lo tuyo") son clicables — cada una
tiene su propia meta guardada (`s.favoriteRole`, `s.favoriteCompany`,
`s.favoriteVenture`; una por categoría, tocar el mismo chip la quita). Un
único helper (`favoriteChips(names, stateKey, accent)`) genera los tres
listados de chips con el mismo ícono `star` (ámbar si está guardado, tenue
si no) — evita repetir la lógica de estilo/toggle tres veces. Ambos modos de
`HORIZONTE` tienen `roles` (antes solo `inspire` lo tenía); companies/
ventures con selección solo existen en el resumen del modo Inspirar, que es
donde aparecen como chips (el modo Informar-decidir los muestra como
mini-tarjetas con descripción, no como chips). Es una capa de estado sobre
el dato fijo, igual que `s.cfuChosen` o `s.movedCourses` en la malla:
`HORIZONTE.roles/companies/ventures` nunca se modifica. Si hay al menos una
meta guardada aparece "⭐ Tus metas guardadas" con un botón "Quitar" por
cada una, y cada meta se refleja también en "Próximas actividades
recomendadas" de Mi Progreso (`v.nextGoals`) con un verbo distinto según la
categoría: "Prepárate para" (rol), "Investiga" (empresa), "Explora
emprender" (idea).

**Conexión con Perfil CoRA.** El cálculo de las 3 dimensiones más altas
(antes solo corría dentro de la pantalla Mi Perfil CoRA, bajo `showCoraResults`)
ahora corre siempre que el cuestionario esté completo (`v.perfilCoraDone`,
antes `coraDone && v.isPerfilCora`), sin importar la pantalla activa. Horizonte
lo usa para una frase con datos reales ("Estos roles calzan con tu Perfil
CoRA: eres fuerte en…", `v.hzProfileConnect`) justo debajo de "RUTA vs
HORIZONTE"; si el cuestionario no está hecho, muestra en su lugar una
invitación a completarlo. No es texto nuevo inventado: son las mismas 3
dimensiones (`v.perfilTop3Labels`) que ya calcula y muestra Mi Perfil CoRA.

**Mini-roadmap ("Cuándo volver a mirar tu Horizonte").** Lista los próximos
2-3 ciclos desde `STUDENT.cycle + 1` (tope ciclo 10). Por cada ciclo busca en
`CURRICULUM` una asignatura de esa ruta (`routeCourseNames`) para dar una
razón real de volver ("Cursarás X — vuelve a ver cómo conecta con tus
roles"); si el ciclo es el 6, avisa del cambio de modo Inspirar → Informar
para Decidir en su lugar. No es una lista de fechas sueltas: si no quedan
ciclos por delante, la tarjeta no se muestra (`v.hzHasRoadmap`).

**Conecta con egresados + Empleabilidad — enlaces reales, nunca perfiles
puntuales (actualizado 12 ago 2026).** "Alumni en LinkedIn" enlaza a
`linkedin.com/school/universidad-continental/people` — la página oficial de
"Alumni and Graduates" de LinkedIn para la universidad, verificada por
búsqueda antes de usarla. **A propósito no** es una búsqueda de personas por
palabra clave (`.../search/results/people/?keywords=…`): esa también
encuentra a quienes *trabajan* en la universidad (docentes, personal
administrativo), y lo que pide esta tarjeta son personas que *estudiaron*
ahí — la página de alumni de LinkedIn ya filtra por eso, la búsqueda
genérica no. Junto a ese enlace vive "Mentores egresados", a la red de
mentores del JobLab de Continental (`joblab.continentalinternationaleducation.com/page/red-de-mentores-alumni-uc`).

"Portal Alumni UC" (`ucontinental.edu.pe/alumni/`) se quitó a pedido
explícito del equipo de diseño — reemplazado por una tarjeta nueva,
**Empleabilidad**, con tres enlaces al JobLab de Continental: "Plataforma
JobLab" (`joblab.continentalinternationaleducation.com/`, la home general),
"Servicios Empleabilidad" (`.../page/servicios-uc`) y "Eventos"
(`.../agenda/eventos`). Los cinco enlaces (`v.hzAlumniLinkedInUrl`,
`v.hzMentorsUrl`, `v.hzJobLabUrl`, `v.hzEmployabilityServicesUrl`,
`v.hzJobLabEventsUrl`) son URLs institucionales reales, provistas por el
equipo de diseño — no inventadas ni buscadas por Claude. Ninguno apunta
jamás a un perfil real elegido o guardado por el equipo de CoRA: usar el
perfil de una persona real sin su consentimiento (aunque sea público) no es
aceptable para este mockup ni para el producto real — ver también la regla
10 de `CLAUDE.md`. Si más adelante se quiere una lista real de egresados
dispuestos a ser
contactados, eso lo debe armar el área de Egresados/Empleabilidad como un
programa de opt-in, no el equipo de diseño escogiendo perfiles.

**La historia del egresado (modo Inspirar) quedó vacía a propósito.**
`storyShort`/`storyFull`/`storyAttribution` en `HORIZONTE.inspire` se
dejaron en `""` — la cita anterior era ficticia, y no se reemplaza por una
real basada en el historial de una persona encontrada en LinkedIn: eso
sería fabricarle una cita a alguien real sin su consentimiento, un problema
más serio que enlazar a su perfil. La tarjeta "🎙️ Una historia para
inspirarte" solo se muestra si `hzStoryShort` no está vacío
(`v.hzHasStory`), así que por ahora no aparece. Si se quiere completarla:
una historia ficticia (como el resto de datos de ejemplo del repositorio) o
una cita real obtenida con consentimiento explícito de un egresado a través
de Egresados/Empleabilidad — nunca una inferida de un perfil público.

### Niveles de riesgo (Acompañamiento)

`PREDICT[].level` sigue siendo `alto` (≥ 70 %) / `medio` (50-69 %) / `bajo`
(< 50 %), y el umbral que dispara la propuesta de plan sigue siendo **50 %**
— en la práctica, lo que se filtra son los niveles `alto`/`medio` (nunca
`bajo`, que significa "sin plan necesario").

| Nivel | Acento (borde/pastilla) |
|---|---|
| Alto (≥ 70 %) | `#dc2626` sobre `#fef2f2` |
| Medio (50-69 %) | `#b45309` sobre `#fff7ed` |
| Bandas del gauge (fijas, no por nivel) | verde `#22c55e` 0-50 %, ámbar `#f59e0b` 50-70 %, rojo `#ef4444` 70-100 % |

**Menos texto, más botones → vuelve el color de severidad (11 ago 2026,
punto 4 del feedback de diseño).** Hubo dos pasadas el mismo día sobre esta
tarjeta:

1. *Tono amable* — el diseñador mandó una referencia de otra herramienta
   ("Camila, prepárate para tu próximo ciclo con ventaja" + pastilla verde
   "Acompañamiento listo") pidiendo que la tarjeta deje de leerse como
   alarma. Se quitó el badge rojo/naranja + número + barra, y se unificó
   todo en una pastilla verde sin cifra visible.
2. *Feedback de diseño, punto 4 ("mucho texto, pocos botones")* — pidió
   explícitamente que las asignaturas con alerta **sí se vean en rojo o
   naranja según su grado**, y que el párrafo de riesgo se resuma en un
   gauge + chips en vez de texto corrido. Esto reemplaza el punto 1 en lo
   que toca a color: la severidad vuelve a verse, pero ya no como párrafo
   ni como número gigante suelto — vive dentro de un gauge semicircular
   compacto.

Diseño final de cada tarjeta de `v.predictions`: un gauge semicircular
(verde→ámbar→rojo, aguja + `p.riskLabel` con la cifra en el centro) junto al
nombre + ciclo + una pastilla de color por nivel (`p.levelPillStyle`,
"Riesgo alto"/"Riesgo medio") + 1-2 chips cortos (`p.factor`, `p.stat` —
campos nuevos en `PREDICT`, resumen de 3-5 palabras de `basis`/`cohort` ya
existentes, no datos nuevos). El párrafo largo (📊 `basis` / 👥 `cohort`,
igual que siempre) y el plan sugerido quedan **dentro de un solo botón
expandible** ("Ver detalle y plan") — antes eran un párrafo siempre visible
más un botón de plan aparte; ahora es un botón menos y cero texto largo
visible por defecto.

Geometría del gauge: semicírculo fijo, centro `(100,90)`, radio `70`,
`strokeWidth 14`, viewBox `0 0 200 100`. Las tres bandas de color son
`<path>` **estáticos** (los umbrales 50 %/70 % no cambian, así que sus
coordenadas se calcularon una sola vez, no van con `{{ }}`). Solo la aguja
(`<line x2="{{ p.needleX }}" y2="{{ p.needleY }}">`) se recalcula por
asignatura: `ángulo = 180° × (1 − risk/100)`, proyectado a `(x,y)` con
radio `78`. Mismo patrón que el resto del archivo: el atributo numérico se
liga con `{{ }}` sin problema aunque la consola marque un error transitorio
de parseo — se comprobó leyendo `x2`/`y2` ya resueltos en el DOM.

**Resuelto: "A vigilar" del dashboard de Inicio ya usa color de severidad
real (revisión UX, 11 ago 2026).** La inconsistencia mencionada arriba —
`v.dashRisk` seguía en pastilla verde uniforme, aunque la misma asignatura
se viera en rojo/ámbar un clic después en Acompañamiento — se corrigió:
ahora usa el mismo color por nivel (`#dc2626` alto / `#b45309` medio, nunca
verde) y muestra "Riesgo alto"/"Riesgo medio" en vez de "Acompañamiento
listo". El encabezado del widget volvió a "⚠️ A vigilar" (antes "🤝 Apoyo
preparado para ti", que ya no aplicaba al reaparecer el color de alarma).

**Leyenda del gauge, ahora visible en pantalla (revisión UX, 11 ago
2026).** Las bandas verde/ámbar/rojo del gauge solo estaban documentadas
aquí, no en la interfaz — se agregó una fila de leyenda de una línea
("🟢 Bajo · 🟠 Medio · 🔴 Alto") arriba de las tarjetas de riesgo, visible
solo cuando `predictHasRisk` es cierto (no tiene sentido mostrarla si no
hay ninguna tarjeta con gauge debajo).

**Estado sin riesgo, con mensaje propio (revisión UX, 11 ago 2026).** Antes,
si `riskTop` quedaba en 0 (`predictHasRisk` falso), `predictLede` igual
cascaba a la rama plural y decía literalmente "encontramos 0 asignaturas
donde queremos que llegues con ventaja..." — una frase sin sentido. Ahora
`v.predictNoRisk` (inverso de `predictHasRisk`) muestra en su lugar
`v.predictNoRiskMsg`, un mensaje inspirador fijo en verde ("🌱 Por ahora no
detectamos ninguna asignatura que suela complicarse con tu perfil — tu
historial académico va firme. CoRA sigue vigilando cada ciclo...").

**Se quitó "Agendar" por asignatura — queda solo el agendamiento general
(revisión UX, 11 ago 2026).** Antes había DOS lugares para agendar con el
Asesor de Acompañamiento Académico que no se enteraban entre sí: el botón
"📅 Agendar con tu Asesor..." dentro del panel expandido de cada tarjeta de
riesgo (`p.onSchedule`, escribía en `s.scheduled`, un arreglo por nombre de
asignatura) y el botón "Agendar con asesor" de la tarjeta general de
`SUPPORT_TYPES` (`s.advisorScheduled`, una sola bandera). Agendar desde una
asignatura no se reflejaba en la tarjeta general, y viceversa — la maqueta
representaba una sola cita real de dos formas independientes. Se quitó el
botón y el estado por asignatura (`p.canSchedule`/`schedLabel`/`schedStyle`/
`onSchedule` y `s.scheduled` completo); agendar con el asesor vive ahora
solo en la tarjeta general de `SUPPORT_TYPES`, sea el motivo el que sea.
(El panel "Ver detalle y plan" que se menciona aquí ya no existe — se quitó
del todo, ver la nota siguiente.)

**Se quitó "Ver detalle y plan" de cada tarjeta de riesgo (revisión UX,
11 ago 2026, a pedido explícito).** Cada tarjeta tenía un botón expandible
con el párrafo completo (📊 `basis` / 👥 `cohort`) y la lista del plan
sugerido debajo. Se quitó esa capa entera — la tarjeta ahora termina en los
2 chips (`p.factor`/`p.stat`), sin botón ni panel. `PREDICT[].basis`/
`cohort`/`plan` se quedan en el dato (documentan de dónde sale cada
predicción, por si se necesitan más adelante) pero ya no alimentan ninguna
vista — se borraron `p.detailOpen`/`toggleLabel`/`toggleChevron`/`onToggle`/
`basis`/`cohort`/`plan` de `v.predictions` y `s.predictOpen` del estado.

**Solo alto/medio, ciclo actual primero (11 ago 2026).** Esta regla se armó
primero para "A vigilar" del dashboard de Inicio, pero se quedó aplicada
solo ahí — la pantalla real de Acompañamiento seguía mostrando
`this.PREDICT` completo (incluido `bajo`, sin ordenar) en `v.predictions`,
mientras el resumen de arriba ("CoRA ha detectado N asignaturas...") ya sí
filtraba con `riskTop`. Quedó corregido: `riskTop` ahora filtra por `level`
(`alto`/`medio`) en vez de por `risk >= 50` — mismo criterio en las dos
pantallas — y se ordena con `this.STUDENT.cycle` primero, luego el resto
por ciclo ascendente. `v.predictions` mapea sobre ese `riskTop` ya
filtrado/ordenado, no sobre `this.PREDICT` directo. Efecto secundario
correcto: `topRiskCourse` (usado para el plan semanal de `s.accWeeks`)
ahora también respeta ese orden. El dashboard de Inicio recalcula la misma
lógica por su cuenta (no puede reusar `v.predictions`: se calcula más abajo
en `renderVals`, después del bloque de Inicio) — si se vuelve a tocar este
criterio, hay que actualizar los dos lugares.

**Ejemplo real de "ciclo actual primero" (11 ago 2026).** Con los datos
originales, las dos únicas entradas `alto`/`medio` de `PREDICT` eran de
ciclos 7 y 8 — ninguna del ciclo 4 (el ciclo actual de `STUDENT`). El criterio
"ciclo actual primero" estaba bien escrito pero no tenía ningún caso real que
mover al frente, así que el orden visible no cambiaba y parecía que la regla
no funcionaba. Se agregó una tercera entrada a `PREDICT`: "Estadística
Inferencial" (ciclo 4, riesgo medio 65 %), justificada con el mismo dato ya
usado para Gerencia de Operaciones (el promedio de 12,4 en Estadística y
Probabilidades, el curso previo — ver `prereq` en `CURRICULUM` ciclo 4). Con
esa entrada, "Estadística Inferencial" aparece primero en ambas pantallas a
pesar de tener menos riesgo (65 %) que Gerencia de Operaciones (78 %),
demostrando que la prioridad es la cercanía en el tiempo, no el porcentaje.

**Se quitó el borde izquierdo de color de la tarjeta (revisión UX, 11 ago
2026).** Cada tarjeta de riesgo marcaba la severidad tres veces a la vez
sobre el mismo dato: el gauge (color + posición + cifra), el borde
izquierdo de 4px (`p.cardStyle.borderLeft`) y la pastilla (`p.levelPillStyle`).
Se quitó el borde — `cardStyle` vuelve al borde gris parejo (`1px solid
#f3f4f6`) que ya usa el resto de tarjetas blancas de la app — y quedaron el
gauge y la pastilla, que ya son legibles por sí solos, cargando la
severidad entre los dos.

**"Finalizar Recomendador" ya no dice "Desbloquear Académico".** Desde que
Tutor/Práctico/Flashcards dejaron de depender de terminar Acompañamiento
(ver más arriba, sección de navegación), ese botón prometía
algo que ya no hacía nada — Académico ya estaba desbloqueado de antes. El
texto quedó en solo "✨ Finalizar Recomendador"; `v.acompFinish` sigue
haciendo lo mismo (marca `"acompanamiento"` completo, +80 CoRAzones).

### Roles: Tutor CoRA vs. Asesor de Acompañamiento Académico (Acompañamiento)

Dos tipos de apoyo, cada uno con su propia tarjeta (`SUPPORT_TYPES`, con
`desc`/`duracion`/`progreso`/`porque`) — nunca se mezclan bajo el mismo nombre:

| Rol | Qué es | Cuándo |
|---|---|---|
| 💬 Tutor CoRA | IA, chat, disponible 24/7 | Dudas académicas puntuales — fórmulas, ejercicios, conceptos |
| 👨‍💼 Asesor de Acompañamiento Académico | Persona real, sesiones agendadas (~30 min) | Seguimiento personal — CoRA lo recomienda si detecta riesgo alto/medio |

No existe un tercer rol "tutor académico": toda mención a agendar o dar
seguimiento usa "Asesor de Acompañamiento Académico". El toggle de "compartir mi progreso"
(`s.shareAdvisor`, antes eran dos toggles casi idénticos) también apunta a
este único rol.

**Recursos de Acompañamiento — misma tarjeta que `SUPPORT_TYPES`, a
propósito.** Debajo de las 2 tarjetas de rol hay una segunda grilla de 2
tarjetas con recursos reales de la oficina de Acompañamiento Integral
(`ACOMP_RESOURCES`), confirmados en la reunión con Angélica del 10 ago 2026:

| Recurso | Qué es |
|---|---|
| 👥 Grupo BUDDY | Estudiantes pares que ya aprobaron la asignatura — grupos por horario y sede |
| 🎓 Plan de Fortalecimiento Académico | Talleres de refuerzo por cohortes abiertas |

Angélica mencionó un tercer recurso ("encuentra a tu Asesor de
Acompañamiento Académico"), pero **no se repite aquí** — ya tiene su propia
tarjeta arriba, en `SUPPORT_TYPES`; repetirlo hubiera sido la misma
información dos veces con distinta forma. `ACOMP_RESOURCES` usa exactamente
el mismo formato de dato que `SUPPORT_TYPES` (`desc`/`duracion`/`progreso`/
`porque`) y el mismo componente de tarjeta (icono + nombre, etiqueta,
descripción, caja de meta con ⏱️/📈/💡, botón morado o azul alternado) —
para que ambas grillas se lean como la misma familia visual, no como dos
sistemas distintos.

Estos son programas a los que el estudiante entra por su cuenta — la propia
Angélica insistió en que el flujo es "el estudiante se contacta con el
equipo", no al revés. **El botón todavía no tiene destino real**
(`btnLabel` es solo texto, sin acción) porque el link/contacto definitivo de
cada recurso llega vía Edith — cuando llegue, `v.acompResources` en
`renderVals()` es el único lugar que hay que tocar. Mientras tanto, la
estructura ya está completa a propósito: es lo que necesita quien programe
esta pantalla, aunque el botón todavía no haga nada.

**Plan flexible, no rígido.** El timeline semanal vive en `s.accWeeks`
(editable: agregar/quitar semana con su propia actividad, no un arreglo fijo)
y las dos actividades ligadas a la asignatura de riesgo muestran su tema real
("Tema: {asignatura}"), tomado de la asignatura de mayor riesgo en `PREDICT`. Además del
asignatura que CoRA detecta, el estudiante puede sumar cualquier otra asignatura de su
ciclo actual (`s.reinforceCourses`, sin límite) con un botón "➕ Reforzar
otra asignatura de este ciclo" — cada uno etiquetado "Tú lo agregaste" para
distinguirlo de lo que CoRA detectó automáticamente.

### Dos chats distintos: Tutor CoRA vs. Asistente CoRA — no confundirlos

**Son dos componentes separados, con datos separados, y no comparten hilo.**
Se fusionaron por error en una ronda anterior (renombre demasiado amplio de
"Asistente CoRA" → "Tutor CoRA") y se separaron el 10 ago 2026. La regla para
no volver a mezclarlos:

| | Tutor CoRA (`tutor`, dentro de 📚 Académico) | Asistente CoRA (widget flotante) |
|---|---|---|
| Para qué | Dudas académicas de una asignatura puntual — fórmulas, ejercicios, el sílabo de esa asignatura | Ayuda general de la plataforma — armar tu ruta, fechas del calendario académico, de qué trata una asignatura o electivo, navegación |
| Dónde vive | Solo dentro de la pantalla Tutor CoRA (Académico) | En cualquier pantalla, botón morado abajo a la derecha |
| Estado | `s.msgsByCourse` — una conversación por asignatura (`s.tutorCourse`) | `s.assistantMsgs` — una sola conversación general, sin asignatura |
| Sabe de sílabo/semana/fuentes | Sí (`SYLLABUS`, `TUTOR_SOURCES`) | No — no tiene noción de asignatura ni de sílabo |
| Cómo se abre | Nav lateral → Tutor CoRA, o "Ir al Tutor CoRA" desde Práctico/Acompañamiento | Botón flotante, o una pregunta sugerida de Horizonte (`askAssistant`) |

**Si una función es "sobre una asignatura específica que estás cursando" va al
Tutor CoRA. Si es "sobre cómo usar CoRA o decidir algo general" va al
Asistente CoRA.** Antes de tocar cualquiera de los dos, confirmar a cuál de
las dos filas de la tabla pertenece el cambio.

#### Tutor CoRA: historial por asignatura (`tutor`)

`s.msgsByCourse` guarda una conversación independiente por asignatura — cambiar
de asignatura no borra ni mezcla el historial de otra. Cada asignatura tiene una
descripción de una línea (`TUTOR_COURSE_DESC`), visible bajo el selector de
asignatura. El primer mensaje de cada asignatura aclara explícitamente que es una IA,
no una persona, y en qué momento deriva a un humano: "Si tu situación
necesita seguimiento personal, te conecto con tu Asesor de Acompañamiento Académico."
Vive **solo** dentro de esta pantalla — ya no comparte estado con el widget
flotante (ver "Asistente CoRA" más abajo).

Los 4 chips de asignatura de siempre ya no son una lista suelta
("Matemática I", "Química General", "Economía I") — son `cycleCourseNames`,
las asignaturas reales del ciclo actual del estudiante (mismo dato que ya
usan Práctico y Flashcards), más "General" como cajón de sastre.

**El Tutor sabe en qué semana del ciclo está.** `STUDENT.cycleWeek` (dato
fijo de ejemplo, como el resto de `STUDENT` — el candidato natural a
reemplazar cuando llegue el calendario académico real) se cruza con
`SYLLABUS[asignatura]`, un sílabo semana por semana con el tema del sílabo y,
si corresponde, una evaluación (`{ nombre, fecha, peso }`). El segundo
mensaje de bienvenida de cada asignatura con sílabo cargado (`buildSyllabusMsg`)
avisa: en qué semana está, qué toca según el sílabo, y si hay evaluación esa
semana — o si no, cuál es la próxima y cuándo. Las asignaturas sin sílabo
cargado (`General`, o cualquiera fuera del ciclo actual) siguen con el saludo
genérico anterior — `buildSyllabusMsg` devuelve `null` y cae al `||`.

Debajo de la conversación aparecen hasta 4 sugerencias rápidas
(`v.tutorQuickActions`, solo si la asignatura tiene sílabo): repasar el tema
de esta semana, resolver ejercicios, prepararse para la próxima evaluación,
o repasar un tema de una semana anterior (solo si ya hay alguna). Tocar una
entra al chat exactamente como si el estudiante la hubiera escrito
(`this.courseAsk`, mismo patrón que `askAssistant`) — sin perder el saludo
si es la primera interacción del hilo.

**"Modo Estudio" — maqueta visual, sin RAG real detrás.** Cuando la
asignatura tiene material cargado (`TUTOR_SOURCES[asignatura]`: un código de
curso ficticio + una lista de documentos de ejemplo), aparecen dos cosas
nuevas, condicionadas a `v.tutorHasSources`:

1. Un chip "📘 Modo Estudio" junto al "24/7" del encabezado, con el código
   de curso al lado (`v.tutorCourseCode`).
2. Un panel "Fuentes (N)" a la derecha del chat (`v.tutorSources`), con la
   lista de documentos de ejemplo — mismo patrón visual que el panel de
   detalle de asignatura de la malla, pero como columna fija junto al chat,
   no como modal.

El saludo de bienvenida y la sugerencia "Repasar el tema de esta semana"
citan uno de esos documentos ("📄 Esto lo veo en tu Sílabo del curso
2026-I.", "Según tu Manual de..."), para mostrar cómo se vería que el tutor
respalde sus respuestas en material real — **sin búsqueda ni RAG real
detrás**: son los mismos 3-4 nombres de documento inventados por asignatura,
no un sistema que busque nada. El desarrollo real de esto (perfil de
dominio por concepto, RAG de verdad, prompt pedagógico, backend) está fuera
de esta maqueta a propósito — ver `TUTOR-IA-ROADMAP.md` en la raíz del
repositorio, guardado el 10 ago 2026 para no perder esa conversación.

#### Asistente CoRA: widget flotante de ayuda general

Vive fuera de todo `sc-if` de sección (junto al panel de detalle de la
malla), así que aparece en cualquier pantalla — botón morado abajo a la
derecha. Tiene su **propia** conversación (`s.assistantMsgs`, un solo hilo,
sin noción de asignatura) y su propio input (`s.assistantInput`) — no toca
`s.msgsByCourse` ni `s.tutorCourse` para nada. Su primer mensaje explica su
propio alcance: ayuda con la ruta, el calendario académico, qué es una
asignatura o un electivo — a propósito, temas del Recomendador/la
plataforma en general, no de una asignatura puntual (eso es el Tutor CoRA).

Las preguntas sugeridas de Veo mi Horizonte ("💬 Pregúntale al Asistente
CoRA") entran por `this.askAssistant(pregunta)`: abre el widget flotante
donde sea que esté el estudiante (`chatOpen:true`) sin cambiar de pantalla
— a diferencia de antes, ya no navega a la pantalla del Tutor CoRA. El
widget no tiene botón de "pantalla completa": no existe una pantalla propia
para el Asistente, es solo este widget.

### Progreso: CoRAzones explicados, insignias y fórmulas (`progreso`)

El sistema de puntos se llama **"CoRAzones"** (💜, ícono `heart` en
`Icon.dc.html`), no "XP" — es el mismo dato (`s.xp`, `s.xpCycleStart`, etc.;
los nombres internos no cambiaron, solo el texto que ve el estudiante) con un
nombre propio que alude a la marca en vez de una sigla técnica.

- Un `Tip` junto al título aclara: "CoRAzones = puntos que muestran tu
  avance en CoRA. Los ganas al completar pasos del Recomendador, estudiar y
  mantener tu racha." Este mismo texto se repite en **Mi Progreso**,
  **Práctico** y **Flashcards** — los 3 lugares donde se ganan CoRAzones —
  no solo en Mi Progreso, para que la explicación esté donde se necesita.
- Un chip visible muestra "Has ganado {{ xpThisCycle }} CoRAzones este
  ciclo" (`s.xpCycleStart`, baseline separado del total acumulado).
- `BADGES` (class field, umbrales de XP en el dato) conecta los CoRAzones
  con logros con nombre propio — desbloqueada o 🔒 con el umbral que falta.
- Cualquier porcentaje calculado (progreso general) lleva un `Tip` con
  la fórmula exacta, ej.: "Tu progreso se calcula como (Asignaturas completadas /
  Totales) × 100 = (X / 13) × 100 = Y%."
- "🎯 Próximas actividades recomendadas" (`v.nextGoals`) no es una lista
  fija: sale del siguiente paso pendiente del Recomendador (`FLOW`), del
  asignatura de mayor riesgo en `PREDICT` y de la racha actual — si ya no aplica
  una meta (por ejemplo, ya se completó todo el Recomendador), desaparece sola.

**Se quitó el contador de racha del header global (11 ago 2026, punto 6 del
feedback de diseño — "no hay sentido de gamificación").** El pill "🔥 {{
streak }} días" vivía pegado al de CoRAzones, visible en TODAS las
pantallas — sugería una gamificación de racha diaria que el equipo no
valida como hipótesis de uso ("no estamos diseñando para que entren todos
los días"). Se quitó del `<header>` compartido; `s.streak` **no se borró**,
sigue existiendo y Mi Progreso sigue mostrando "🔥 {{ streak }} días
consecutivos" — esa pantalla es una que el estudiante abre a propósito para
ver sus estadísticas, no un recordatorio ambiental en cada pantalla, así que
se dejó igual. El `Tip` de CoRAzones en el header también se ajustó (ya no
dice "…y mantener tu racha", dice "…completar pasos del Recomendador y
estudiar") para no referenciar un mecanismo que ya no se ve ahí — los
`Tip` de CoRAzones en Mi Progreso/Práctico/Flashcards, que sí siguen junto a
un dato de racha visible, se dejaron con el texto original.

**"Sugerencias de CoRA para ti" (Perfil) se separó en dos niveles, no una
lista pareja (mismo punto 6, inspirado en cómo Duolingo separa
recordatorios rutinarios de avisos reservados solo para riesgo real).**
Antes `v.suggestions` era un arreglo fijo de 3 textos con el mismo tono y
color: una alerta de riesgo con datos que ni siquiera venían de `PREDICT`
("Estadística I", que no existe como nombre real de asignatura), una
sugerencia del horizonte y un recordatorio de racha — se leía como una
lista de regaños parejos. Ahora son dos cajas con estilos distintos, cada
una condicionada a que el dato sea real:

| Nivel | Cuándo se muestra | Tono/estilo | Fuente del dato |
|---|---|---|---|
| 📋 Recordatorio (rutinario) | Si queda un paso del Recomendador sin completar | Gris, neutro, sin ícono de alarma | `this.FLOW.find(id => !s.completed.includes(id))` |
| 📉 Alerta de Acompañamiento | Solo si hay una asignatura `alto`/`medio` real en `PREDICT` | Borde rojo a la izquierda, más directo — pero uno solo, el más urgente | Mismo filtro/orden ciclo-actual-primero que Acompañamiento y "A vigilar" |

Si no hay paso pendiente, el recordatorio rutinario desaparece solo
(`v.hasRoutineNudge`); si no hay riesgo real, la alerta desaparece sola
(`v.hasRiskNudge`) — nunca se rellena con texto genérico para que la caja
no quede vacía. El toggle de Configuración "Recordatorios de estudio" pasó
de decir "Avisos para mantener tu racha" a "Avisos rutinarios para seguir
avanzando en tu ruta", para no prometer algo que ya no es el mecanismo.

**Práctico y Flashcards ahora suman CoRAzones de verdad.** Antes, terminar un
simulacro o un set mostraba "+X CoRAzones ganados" pero ese número nunca se
sumaba al saldo real (`s.xp`) ni marcaba la pantalla como completada en
`s.completed` — por eso "📚 Académico" en Mi Progreso se quedaba en 0/3 para
siempre. Ahora ambas pantallas llaman a `this.complete(id, ganancia)`, la
misma función que ya usaban las 7 pantallas del Recomendador:

- **Práctico** (`v.pNext`, al terminar la última pregunta): la ganancia es
  el mismo cálculo que ya se mostraba en pantalla (`v.pXpLabel`) — 5 puntos
  por respuesta correcta + 50 por terminar + un extra según la dificultad
  elegida. El puntaje final (`v.pScoreLabel`) ahora también lleva su fórmula
  en un `Tip` (`v.pScoreFormula`), igual que el progreso general en Mi
  Progreso, y hay una línea de desglose (`v.pXpDetail`) igual a la que ya
  tenía Flashcards.
- **Flashcards** (al calificar la última tarjeta, o al tocar "Terminar"
  antes de acabar el set): la ganancia es 50 por completar + 2 por cada
  tarjeta marcada "Lo sé" hasta ese momento — crédito parcial si se sale
  antes de tiempo, para que el número mostrado y el número sumado sean
  siempre el mismo.
- Las asignaturas que ofrecen ambas pantallas (`v.pCourses`, `v.fCourses`)
  ya no son una lista suelta ("Matemática I", "Química General"…):
  ahora son las asignaturas reales del ciclo actual del estudiante
  (`CURRICULUM`, mismas que se ven "EN CURSO" en la malla), sin contar
  electivos. Es el mismo criterio que ya usaba Acompañamiento para sugerir
  qué reforzar.

### Inicio (`inicio`) y CoRA me conoce (`formulario`)

**"Inicio" es una pantalla propia, fuera del Recomendador** — su propio grupo
en la barra lateral (🏠, encima de 🟣 RECOMENDADOR), sin `REQ`, sin entrada en
`FLOW` ni en `STEPPER` (por eso nunca muestra la ventanita "Paso X de 7").
Contenido: "Qué es CoRA" (3 tarjetas: Te orienta / Te anticipa / Te acompaña)
+ "📍 Dónde estás ahora" (ciclo, asignaturas llevadas, promedio, créditos,
avance de la carrera y últimas asignaturas). Termina en un botón "Continuar
con CoRA me conoce →" (`continueToCoRA me conoce()`) que navega a `section:"formulario"`.
`startSection` por defecto es `"inicio"` (prop y `data-props` del componente) —
es la primera pantalla que ve cualquiera que abra el archivo sin parámetros.

La sección `formulario` tiene 2 pantallas propias, controladas por
`s.formStarted`:

**1. Intro del formulario (`showFormIntro`, `!s.formStarted`):** acá aparece
la ventanita "Paso 1 de 7" y el breadcrumb. "CoRA va a encontrar tu ruta
ideal" + el comparador **Opción Rápida vs Opción Detallada** (2 tarjetas con
hover — `isQuickHover`/`isDetailedHover` — que muestran un tooltip morado
con el detalle de cada opción) + la caja "¿Qué significa 'Análisis'?".
Elegir una tarjeta (`pickQuick`/`pickDetailed`) fija `s.formMode`
("rapida"/"completa") y pasa a la pantalla 2.

**La caja "¿Qué significa 'Análisis'?" quedó reducida a la etiqueta + un
`Tip` (revisión UX, 11 ago 2026).** Antes tenía dos párrafos fijos siempre
visibles explicando la diferencia entre lo que cruza el formulario
detallado y el rápido — texto que un estudiante que vuelve a ver esta
pantalla (p. ej. tras "Volver a formulario" desde Mis Rutas) no necesita
releer completo cada vez. Ahora la caja solo muestra "🔍 ¿Qué significa
'Análisis'?" con un ícono `Tip` al lado que lleva los dos párrafos
combinados en un solo texto — el dato sigue disponible, a demanda.

**2. Cuestionario (`showFormQuestionnaire`, `s.formStarted:true`):** arriba,
un toggle de 2 pestañas — "Versión completa (~5 min)" / "Versión rápida (~2
min)" (`s.formMode`, mismo patrón de segmentado que el resto de la maqueta:
activa = fondo morado + sombra morada, inactiva = transparente) para poder
cambiar de opinión sin volver a la pantalla 2. Cambiar de pestaña no borra
respuestas — ambas leen y escriben sobre el mismo `s.formAnswers`.

- **Completa** (`FORM_STEPS`, class field, 5 pasos): barra de 5 segmentos
  (`v.stepSegments`) en vez de una sola barra continua, botones "Atrás" /
  "Continuar →" (el último paso dice "Ver mi ruta →"). Sin validación: los
  botones nunca se bloquean, todas las preguntas son opcionales por ahora.
  Al cambiar de paso se hace scroll suave al inicio (`goFormStep()`).
- **Rápida** (`FORM_QUICK`, class field, 6 preguntas): una sola pantalla,
  badge "Versión rápida" + nota de tiempo, termina con una nota verde
  ("Con estas 6 respuestas...") y el botón "Ver mi ruta →".
- Ambas terminan llamando a `this.finish()` — la misma pantalla de
  "Analizando tu perfil..." que ya existía, sin duplicar esa lógica.

**Tipos de pregunta reutilizables** (`q.kind` en los datos, `mapFormQuestions`
calcula los flags `isChips`/`isChipsBig`/`isCards`/`isText`/`isTextarea`/
`isRows`/`isInfo` y los estilos de selección en `renderVals`):

| kind | Qué se ve | Selección |
|---|---|---|
| `chips` | Chips en fila, `multi:true` los deja acumular, `multi:false` es única | Fondo lavanda + borde morado (`#faf5ff`/`#7B68EE`) |
| `chips` + `big:true` | Como chips, pero más grandes (ej. "6 meses" / "1 año") | Igual, con más padding |
| `cards` | Tarjetas en grilla (`cols`) con un círculo de radio a la izquierda; `centered:true` las centra sin subtítulo | Fondo lavanda + borde morado, círculo relleno |
| `text` | `<input>` de una línea | — |
| `textarea` | `<textarea rows="taRows">` | — |
| `rows` | Lista de actividades, cada una con 2 chips exclusivos "Ya lo hago" (verde éxito) / "Quiero explorarlo" (ámbar aviso) — el id real de cada fila es `q.id + "_" + índice`, no un id de dato aparte | Verde `#f0fdf4`/`#15803d` o ámbar `#fff7ed`/`#b45309` |
| `info` | Caja informativa azul, sin pregunta | — |

`answer(qid, val, multi)` (ya existía) sirve para chips/cards/filas —
`multi:false` siempre reemplaza la selección, igual que un radio button.
`answerText(qid, val)` (nuevo) guarda strings de `text`/`textarea` tal cual,
sin arreglos.

### Invitación al perfil de identidad (Componente 1, al final de la malla)

Dentro de `mallaShowSummary` (la pantalla "¡Tu malla está lista!"), mientras
el cuestionario 18REST no esté completo (`!coraProfileReady`) se muestra una
tarjeta con degradado lavanda/celeste (mismo fondo que "💡 Recomendaciones
para Ti") en vez del botón simple de continuar: "✨ ¿Quieres saber quién eres
detrás de esta ruta?", 3 íconos (código CoRA / arquetipo / horizonte,
`v.perfilCtaItems`) y dos botones del mismo tamaño — "Descubrir mi perfil"
(estilo acentuado morado, como "Personalizar de nuevo") y "Lo hago después"
(estilo neutro, como "Descargar malla PDF"). No es automática: el estudiante
elige. "Descubrir mi perfil" lleva a `perfil-cora` (arranca el cuestionario);
"Lo hago después" guarda `s.profilePending:true` y lleva directo a
`horizonte`, sin bloquear el resto del recorrido — el perfil sigue disponible
después desde el menú. Una vez que el perfil ya está completo, esta tarjeta
deja de aparecer y vuelve el botón normal "Continuar a Veo mi Horizonte →".

### Mi Perfil CoRA: cuestionario 18REST y algoritmo de puntuación

`perfil-cora` ya no muestra un resultado con datos fijos: primero pide el
cuestionario y calcula el perfil a partir de las respuestas reales.

**Cuestionario (`RIASEC_QUESTIONS`, 18 preguntas, `s.coraAnswers`):** las 18
preguntas (RIASEC adaptado — Ambiel et al., 2018; 3 por cada una de las 6
dimensiones, mezcladas) se muestran **todas juntas**, como una lista/tabla de
una sola tarjeta: cada fila es una pregunta con 4 botones numerados (1-4,
`CORA_SCALE`) a la derecha, con los rótulos de la escala ("Para nada" →
"Mucho") una sola vez en el encabezado de la tabla, no repetidos por fila. Un
contador "{{ coraAnsweredLabel }}" (ej. "6 / 18") arriba a la derecha
reemplaza la barra de progreso. Se puede responder en cualquier orden y
cambiar de opinión en cualquier momento — `answerCora(qid, val)` solo guarda
la respuesta, sin avanzar nada. El resultado (`showCoraResults`) aparece solo
al completar las 18 (`v.showCoraQuiz`/`v.showCoraResults` son mutuamente
excluyentes). "Repetir el cuestionario" (`retakeCora()`) limpia
`coraAnswers` para volver a intentarlo.

**Algoritmo de puntuación (Componente 3, calculado en `renderVals`):**
puntaje bruto por dimensión = suma de sus 3 respuestas (3-12) →
normalizado a 0-100 (`raw/12*100`). Se ordena de mayor a menor; el código
son las 3 dimensiones con más puntaje (`A · E · S`, por ejemplo) y el
arquetipo sale de buscar ese código en `ARCHETYPES` (24 combinaciones +
`"default"`: "El explorador con identidad propia"). El párrafo narrativo de
cada arquetipo vive en `ARCHETYPE_TEXT`. El radar y las 6 tarjetas de
dimensión (`DIM_META` — label, descripción, color y `resource`) se
recalculan cada vez a partir de estos puntajes reales, no de datos fijos:
las 3 dimensiones dominantes se pintan con su propio color (`DIM_META[k].colors`,
los mismos tokens de Éxito/Información/Aviso/Error que ya usa el resto de la
maqueta — Organizado y Práctico comparten el mismo gris muted a propósito) y
las 3 restantes en gris. El bloque "💡 Recomendaciones para Ti" (fortalezas /
área de mejora / recursos) también sale de estos puntajes.

**Pendiente (Componente 4, fuera de esta ronda):** facetas del arquetipo
("Cómo piensas" / "Qué te energiza" / etc.), banner de conexión con la ruta y
"Compartir mi perfil" no están implementados todavía — el resultado actual
reutiliza las tarjetas de dimensión, el radar y el bloque de recomendaciones
que ya existían en la maqueta.

### Avatar personalizable (`perfil`, compartido con el header global)

`s.avatarBg` (índice sobre `AVATAR_PALETTE`, 5 combinaciones de color) es un
solo dato de estado — el círculo de iniciales del header (`v.avatarStyleSm`)
y el de la pantalla Perfil (`v.avatarStyleLg`) leen del mismo degradado, así
que personalizarlo en un lugar se refleja automáticamente en toda la
plataforma.

### Plan de estudios: una sola versión vigente

`PLAN_YEAR` (class field, hoy `"2024"`) se muestra como una etiqueta junto
al encabezado de la malla: "Plan de Estudios 2024 — el único vigente para tu
cohorte." No hay selector de planes — evita implicar que existen varias
versiones cuando el estudiante solo tiene una.

### Configuración: temas visuales y nota de móvil

"Tamaño de texto" y "Tema Visual" ahora llevan `Tip` explicando qué hacen.
Se agregó una fila "Temas visuales" (`v.themeAccents`, 3 acentos de color,
decorativo — no repinta la maqueta) para cubrir "estético" más allá de
claro/oscuro. Al pie, una nota fija aclara que CoRA está pensado para
escritorio/laptop por ahora y que la versión móvil es desarrollo futuro — no
se tocó el layout ni se agregaron media queries.

### Logos reales, en `assets/`

A diferencia de los 31 iconos de línea (`Icon.dc.html`, siempre a mano vía
`<dc-import>`), los **logos institucionales son archivos reales**, en
`assets/`, referenciados con `<img src="./assets/archivo">` — nunca
reconstruidos a mano, ni con SVG copiado ni con un ícono parecido. Si falta
el logo de una unidad, se deja como estaba (emoji + texto) hasta tener el
archivo oficial; no se inventa un logo.

| Archivo | De quién | Dónde se usa |
|---|---|---|
| `assets/cora-logo.png` | CoRA (provisto por la diseñadora) | Encabezado de la barra lateral (todas las pantallas) y encabezado de Tutor CoRA |
| `assets/cie-logo.svg` | Continental International Education | Encabezado de Ecosistema CIE |
| `assets/uc-logo.svg` | Universidad Continental | Lado "Perú" de la tabla de Experiencias Internacionales |
| `assets/cfu-logo.png` | Continental Florida University | Lado "EE. UU." de la tabla de Experiencias Internacionales |
| `assets/instituto-logo.png` | Instituto Continental (provisto por la diseñadora) | Encabezado del acordeón "Instituto Continental" en Ecosistema CIE |
| `assets/idiomas-logo.png` | Centro de Idiomas (provisto por la diseñadora) | Encabezado del acordeón "Centro de Idiomas" en Ecosistema CIE |
| `assets/continua-logo.png` | Universidad Continental — Continua (provisto por la diseñadora) | Encabezado del acordeón "Continua" en Ecosistema CIE |
| `assets/posgrado-logo.png` | Universidad Continental — Escuela de Posgrado (provisto por la diseñadora) | Encabezado del acordeón "Escuela de Posgrado" en Ecosistema CIE |

`assets/cie-logo-white.png` quedó guardado pero sin usar todavía — la
diseñadora confirmó que el logo de CIE que ya está en el encabezado de
Ecosistema CIE (`cie-logo.svg`) está bien así.

El encabezado de "🌍 Experiencias Internacionales" se queda con su emoji: no
es una unidad del CIE con logo propio, es la sección de equivalencias
UC ↔ CFU — esos dos logos ya están dentro, en su tabla.

### Iconos de la barra lateral

Los 13 ítems del menú (Recomendador, Académico, Ajustes) usan iconos de
línea de `Icon.dc.html` en vez de emoji — `navItem(id, icon, label)` guarda
el nombre del ícono, no el emoji, y `v.iconColor` lo pinta blanco cuando el
ítem está activo (fondo morado) o gris `#6b7280` cuando no.

| Sección | Ícono | Por qué |
|---|---|---|
| CoRA me conoce | `clipboard-list` | Es el cuestionario del recomendador |
| Mis Rutas | `route` | Cinta/camino que se bifurca — la ruta académica |
| Ecosistema CIE | `globe` | Alcance internacional del ecosistema |
| Elijo mi Ruta | `graduation-cap` | La malla que lleva a la carrera |
| Mi Perfil CoRA | `sparkles` | Mismo emoji ✨ que ya usaba el título de la pantalla |
| Veo mi Horizonte | `briefcase` | Proyección laboral |
| Acompañamiento | `life-buoy` | Apoyo, no advertencia — por eso no es `alert-triangle` |
| Práctico para examen | `edit` | Ya existía en el set, se reusó tal cual |
| Mis flashcards | `layers` | Tarjetas apiladas |
| Tutor CoRA | `phone-idea` | Ayuda/ideas desde el celular |
| Mi progreso | `bar-chart` | Barras de avance |
| Perfil | `user` | Persona |
| Configuración | `sliders` | Controles/ajustes |

`globe`, `route`, `graduation-cap`, `phone-idea`, `briefcase`,
`clipboard-list`, `sparkles`, `life-buoy`, `layers`, `bar-chart`, `user` y
`sliders` son nuevos en `Icon.dc.html` — dibujados a mano con el mismo
lenguaje que ya usaba el archivo (trazo de 2px, esquinas redondeadas, sin
relleno, viewBox 24×24), no importados como imagen.

---

## 5. Patrones de componente

Cópialos literalmente. Si necesitas algo que no está aquí, constrúyelo con los
tokens de arriba antes de inventar un estilo nuevo.

### Tarjeta estándar

```html
<div style="background:#fff;border:1px solid #f3f4f6;border-radius:16px;padding:20px;margin-bottom:16px;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1)">
  …
</div>
```

### Botón primario

```html
<button style="width:100%;background:#7B68EE;color:#fff;border:0;border-radius:16px;padding:14px 0;font-size:14px;font-weight:700;cursor:pointer;font-family:inherit;box-shadow:0 10px 15px -3px #e9d5ff,0 4px 6px -4px #e9d5ff">
  Continuar
</button>
```

### Chip / insignia

```html
<div style="display:flex;align-items:center;gap:6px;background:#faf5ff;border:1px solid #f3e8ff;border-radius:9999px;padding:6px 12px">
  …
</div>
```

Para un estado semántico, cambia el trío completo (por ejemplo aviso:
`background:#fff7ed;border:1px solid #ffedd5` con texto `#b45309`).

### Icono

Nunca pegues SVG a mano. Usa el componente `Icon`:

```html
<dc-import name="Icon" i="check" s="16" c="#22c55e" hint-size="16px,16px"></dc-import>
```

- `i` — nombre del icono. **Solo existen los 31 definidos en `Icon.dc.html`.**
  Si necesitas otro, añádelo allí copiando el `path` de [Lucide](https://lucide.dev).
- `s` — tamaño en px · `c` — color · `sw` — grosor de línea (por defecto `2`).
- `hint-size` debe coincidir con `s` (es la pista de tamaño del editor).

Iconos disponibles: `menu` `x` `check` `chevron-down` `chevron-up`
`chevron-right` `chevron-left` `compass` `alert-triangle` `help` `check-circle`
`x-circle` `clock` `flame` `star` `rotate-ccw` `download` `upload` `plus` `send`
`mic` `paperclip` `play` `eye` `edit` `save` `log-out` `moon` `sun` `info`
`message-circle` `bell` `lock`.

### Ayuda contextual

```html
<dc-import name="Tip" text="Explicación breve de esta sección." hint-size="14px,14px"></dc-import>
```

Globo morado, 256 px de ancho, aparece al pasar el ratón o al hacer clic.

---

## 6. Contenido y tono

- **Idioma:** español peruano neutro. Tuteo (`tu ruta`, `cuéntanos`), nunca usted.
- **Títulos de pantalla:** emoji + frase corta en capital de oración —
  `📊 Tu Progreso en CoRA`, no `Progreso del Usuario`.
- **Encabezados de grupo:** MAYÚSCULAS con `letter-spacing`, precedidos de emoji.
- **Cifras:** separador de miles con punto (`11.529 asignaturas`).
- **Datos de ejemplo:** el estudiante ficticio es **Alejandro García**, carrera
  **Ingeniería Comercial**, 350 CoRAzones, racha de 12 días. Mantén la coherencia si
  añades pantallas.
- Evita la jerga técnica en la interfaz. El usuario es un estudiante de secundaria
  o de primeros ciclos.

---

## 7. Cómo editar el archivo sin romperlo

`CORA App.dc.html` no es HTML corriente: es una **plantilla de Design Component**
que el runtime (`support.js`) convierte en React en el navegador. Respeta su sintaxis.

### La estructura del archivo

```html
<x-dc>                       <!-- la plantilla: esto es lo que se dibuja -->
  <helmet>…</helmet>         <!-- se inyecta en <head>: fuentes, estilos -->
  …marcado…
</x-dc>

<script type="text/x-dc" data-dc-script data-props="{…}">
  class Component extends DCLogic {
    ROUTES = […]             // datos de ejemplo
    state  = {…}             // estado de la maqueta
    renderVals() { … }       // devuelve lo que la plantilla interpola
  }
</script>
```

### Props del componente

Se declaran en el atributo `data-props` del `<script data-dc-script>` y sirven para
ver el diseño en distintos estados sin tocar el código:

| Prop | Valores | Para qué |
|---|---|---|
| `startSection` | los 13 `id` de sección | Qué pantalla se muestra al abrir |
| `unlockAll` | booleano | Salta el bloqueo del recorrido y también el login/elección inicial (`v.appUnlocked`), para poder revisar |
| `studentName` | texto | Nombre del estudiante de ejemplo |
| `contextVariant` | `dashboard` · `tarjeta` · `banner` | **Provisional.** Variante del bloque de contexto del estudiante |
| `showOnboarding` | booleano | Abre la guía de bienvenida al cargar |

> `contextVariant` existe solo para poder comparar las tres propuestas en el tablero.
> Cuando la universidad elija una, fija ese valor como `default`, borra las dos
> ramas `sc-if` sobrantes y elimina `CORA_VARIANTS` de `screens.js`.

### Sintaxis de plantilla

| Sintaxis | Qué hace |
|---|---|
| `{{ nombre }}` | Interpola un valor devuelto por `renderVals()` |
| `<sc-if value="{{ cond }}">…</sc-if>` | Muestra el bloque si `cond` es cierto |
| `<sc-for list="{{ xs }}" as="item">…</sc-for>` | Repite el bloque; expone `item` y `$index` |
| `<dc-import name="Icon" …>` | Inserta otro componente (`Icon`, `Tip`) |
| `onClick="{{ fn }}"` | Enlaza un manejador devuelto por `renderVals()` |
| `style-hover="color:#7B68EE"` | Estilos al pasar el ratón (no existe `:hover` en línea) |
| `hint-*` | Pistas para el editor de Claude Design. **No las borres.** |

**No hay `sc-else`.** Para un o-esto-o-lo-otro, pon dos `sc-if` hermanos con
condiciones inversas.

**`{{ texto }}` dentro de un `<text>` de SVG no se ve — nunca.** El runtime
envuelve cualquier interpolación en un `<span>` HTML; dentro de un `<svg>` eso
es una etiqueta inválida y el navegador la descarta en silencio (sin error de
consola). El dato llega bien, el texto sale con ancho y alto cero. Para
etiquetas de gráficos (radar, barras con valor encima, etc.): saca el texto
del SVG y ponlo en un `<span>` aparte, posicionado con `position:absolute` +
`left`/`top` en % sobre un contenedor `position:relative` que envuelva el SVG
(ver "Gráfico Radar" en `perfil-cora`, función `pt()` en el JS). Ojo también:
un `style="{{ valor }}"` dinámico tiene que devolver un **objeto** de estilos
(como `nameStyle`/`wrapStyle` en la malla), no una cadena CSS — una cadena
tampoco se aplica.

### Reglas de oro

1. **Los estilos van en línea, en el atributo `style`.** No añadas `class=` ni
   hojas de estilo nuevas: el diseño no usa ninguna clase de utilidad.
2. **Un cambio de token se aplica en todas partes.** Si cambias el morado de
   marca, cámbialo en las 152 apariciones, no en una.
3. **No renombres las secciones.** Los `id` (`formulario`, `mis-rutas`, …) están
   enlazados con `screens.js`, con el mapa `REQ` y con las URL del tablero.
   Si añades o quitas una pantalla, actualiza también `screens.js`.
4. **No toques `support.js`.** Es el runtime generado.
5. **No edites `_ds/`.** Aporta la normalización de estilos del navegador
   (`@layer base`) y los tokens; el diseño no usa sus clases.
6. **Verifica siempre en el navegador.** El archivo se sirve por HTTP: abrirlo
   con doble clic no funciona.
7. **Los datos de ejemplo tienen que cuadrar entre pantallas.** El estudiante va
   por el ciclo 4, lleva 9 asignaturas y su promedio es 14,9: esas cifras salen de
   `STUDENT`, `TAKEN` y `CURRICULUM`, no de números escritos a mano en el HTML.

### Pendientes marcados en el código

Búscalos con `grep -n "TODO(UC)\|TEXTO PROPUESTO" "CORA App.dc.html"`:

| Marca | Qué falta |
|---|---|
| `TODO(UC)` en `ecoLangCount` | La cifra real de idiomas del Centro de Idiomas. Ahora muestra 6, que es lo que la propia pantalla lista. |
| `TEXTO PROPUESTO` en la sección «Qué es CoRA» | El copy original de la versión anterior. El actual es una redacción en el tono del producto, para sustituir. |

---

## 8. Antes de dar un cambio por bueno

- [ ] Levanta `python3 -m http.server 8000` y abre `http://localhost:8000`.
- [ ] La pantalla que tocaste se ve bien en `pantalla.html?s=<id>`.
- [ ] El tablero (`index.html`) sigue mostrando las 13 tarjetas.
- [ ] La consola del navegador no tiene errores.
- [ ] Los colores nuevos salen de la tabla de tokens de la sección 3.
- [ ] Los textos están en español y con el tono de la sección 6.
- [ ] No has introducido `class=`, ni CSS externo, ni dependencias.
