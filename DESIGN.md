# CORA — Sistema de diseño

Contrato de diseño de **CORA**, el producto de orientación académica de la
Universidad Continental (Perú). Este documento es la fuente de verdad: si un
cambio contradice lo que está aquí, el cambio está mal.

Léelo entero antes de tocar `CORA App.dc.html`.

---

## 1. Qué es esto y qué no es

| | |
|---|---|
| **Es** | El diseño de las 13 pantallas de CORA, en HTML plano con estilos en línea. |
| **No es** | Una aplicación. No hay backend, ni build, ni framework que instalar. |
| **Objetivo** | Afinar el diseño. Todo lo que se ve es maqueta con datos de ejemplo. |

Todo el diseño vive en **un solo archivo**: `CORA App.dc.html`. Las 13 pantallas
están dentro de él y se muestran según la prop `startSection`.

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
| `36` / `30` | Cifras heroicas (XP, porcentajes grandes) |
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

Las 13 pantallas comparten el mismo esqueleto. **No lo cambies para una sola pantalla.**

```
┌────────────┬──────────────────────────────────────────────┐
│  <aside>   │  <header>  racha · XP · campana · avatar     │  sticky, top:0
│  240px     ├──────────────────────────────────────────────┤
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

Tres grupos fijos, en este orden:

| Grupo | Encabezado | Pantallas |
|---|---|---|
| Recomendador | `🟣 RECOMENDADOR` | Formulario · Mis Rutas · Ecosistema CIE · Elijo mi Ruta · Mi Perfil CoRA · Veo mi Horizonte · Acompañamiento |
| Académico | `📚 ACADÉMICO` | Práctico para examen · Mis flashcards · Asistente CORA |
| Ajustes | `⚙️ AJUSTES` | Mi progreso · Perfil · Configuración |

### Elementos presentes en todas las pantallas

Cuatro piezas viven fuera de `<main>` y acompañan al estudiante en todo momento.
Si añades una pantalla, no tienes que hacer nada: aparecen solas.

| Pieza | Dónde | Qué hace |
|---|---|---|
| **Perfil resumido** | Derecha de la barra superior | Nombre, ciclo y carrera. Lleva a *Perfil* al pulsarlo. |
| **Ventanita stepper** | Bajo la barra, sobre `<main>` | Guía la sección actual del recorrido. Se cierra con la ✕ y no vuelve. |
| **Asistente CORA** | Botón flotante abajo a la derecha | Chat en cualquier pantalla. Se expande a 360 px sin perder el contexto. |
| **Guía de onboarding** | Modal a pantalla completa | Presentación de la plataforma en 4 pasos. Se abre con el botón «Guía». |

El stepper se define en el mapa `STEPPER` de la lógica; la guía, en `ONBOARDING`.
Para añadir la ventanita a una pantalla nueva, basta con darle su entrada en `STEPPER`.

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
que distingue Ruta (los cursos que se toman) de Horizonte (los trabajos a los
que lleva) — son las dos palabras que más se confunden en el producto.

### Tipos de ruta (Mis Rutas)

El borde izquierdo de 5 px de cada tarjeta, más una etiqueta junto al título, dicen de qué
tipo es la ruta. Cada ruta es siempre de un solo tipo, nunca una mezcla de los tres:

Solo existen **tres tipos**, y cada ruta es siempre de un solo tipo — no hay
una cuarta categoría de "solo obligatorios":

| Tipo | Acento | Cuándo |
|---|---|---|
| 📘 Curricular | `#f59e0b` | 100 % malla: obligatorios y/o electivos de la propia carrera (`Electivo General…`, `Electivo de Especialidad o Transversal…`). Sin Ecosistema CIE |
| 🌐 Extracurricular | `#0ea5e9` | 100 % Ecosistema CIE (idiomas, institutos, diplomados). Sin cursos de la malla |
| 🔀 Combinada | `#ec4899` | Malla (obligatorios y/o electivos) **y** extracurriculares del CIE, las dos cosas a la vez — ninguna reemplaza a la otra |

Se define en el campo `kind` de `ROUTES` (`"curricular"` \| `"extracurricular"`
\| `"combinada"`).

**Ninguna ruta incluye un curso de un ciclo que el estudiante ya cursó.**
`ROUTES[].courses` (y `extraCourses` en las combinadas) solo trae cursos con
ciclo `>= STUDENT.cycle` — se valida cruzando cada nombre contra el ciclo
real en `CURRICULUM`. Si cambias `STUDENT.cycle` o el curso de una ruta,
revisa que ningún nombre pertenezca a un ciclo anterior al actual.

**Al confirmar una ruta, se ve reflejada en la malla.** La pantalla *Elijo mi
Ruta* resuelve en vivo, por nombre contra `ROUTES[].courses`, qué cursos de
`CURRICULUM` son "de tu ruta" — no es un dato grabado en el curso. Curricular
y combinada resaltan esos cursos mucho más que el resto (ver "Categorías de
curso" más abajo), sin atenuar el resto: la categoría (General/Facultad/
Carrera/Electivo) de un curso debe leerse igual de bien esté o no en la ruta
elegida. Ambas pueden resaltar un slot de `cat:"electivo"` si a propósito lo
incluyen en `courses` (a diferencia de una coincidencia de nombre accidental,
que sigue sin resaltarse).

Extracurricular y combinada, además, muestran sus cursos del CIE debajo del
ciclo que les corresponde, con el mismo trato visual que un electivo elegido
pero con su propia etiqueta ("🌐 De tu ruta extracurricular"):
extracurricular los trae en `courses`/`courseCycles`; combinada los trae
aparte, en `extraCourses`/`extraCourseCycles`, porque `courses` ya está
ocupado con su parte de malla.

**Tres momentos de ciclo, según `STUDENT.cycle`:**

| Momento | Cuándo | Trato |
|---|---|---|
| Aprobado | Ciclo menor al actual | Todo el bloque al 60 % de opacidad, título gris, cabecera gris |
| Actual | `cyc.cycle === STUDENT.cycle` | Título y borde morados, cabecera teñida, etiqueta "(Actual)" y "EN CURSO" en cada curso |
| Próximo | Ciclo mayor al actual | Trato normal — sin atenuar ni resaltar |

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

El botón final (`v.ecoCtaLabel`/`ecoCtaStyle`/`ecoCtaClick`) refleja el
estado: gris y sin acción mientras falte alguna ("🔒 Explora las 5 secciones
para continuar (X/5)"), morado y activo ("Continuar malla →") solo cuando
`v.ecoAllVisited` es `true`.

**Costo, siempre visible y consistente.** Todo curso o programa del ecosistema
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
nombre del curso.

### Categorías de curso (Malla)

`CURRICULUM` trae la malla real y completa (10 ciclos) de la EAP
Administración y Negocios Internacionales, plan 2024. Cada curso se codifica
en **dos capas independientes**, tal como en el mapa curricular oficial:

**1. Categoría académica** — punto de color + etiqueta de 9 px sobre el
nombre del curso. Es fija, viene del campo `cat` de `CURRICULUM`:

| Categoría | Color | Qué agrupa |
|---|---|---|
| General | `#22c55e` | Comunicación, idiomas, laboratorios de liderazgo |
| Facultad | `#3b82f6` | Base común de negocios (matemática, economía, finanzas…) |
| Carrera | `#f97316` | Propias de Administración y Negocios Internacionales |
| Electivo | `#6b7280` | Electivos generales y de especialidad/transversales |

Se define en el campo `cat` de `CURRICULUM` (`"general"` \| `"facultad"` \|
`"carrera"` \| `"electivo"`). El curso del ciclo en el que está el estudiante
(`STUDENT.cycle`) además lleva una etiqueta morada **EN CURSO**.

**2. Pertenencia a la ruta elegida** — ya no hay una línea conectora ("el
hilo") entre los cursos de la ruta: el curso de tu ruta se distingue por
tener MUCHO más contraste que el resto, no por una guía visual aparte. No es
un dato grabado en el curso: se resuelve en vivo contra `ROUTES[].courses`.
Un curso puede ser, por ejemplo, "Carrera" y a la vez ser de tu ruta — son
dos informaciones distintas y pueden coincidir.

| Estado | Fondo · Borde · Texto | Detalle |
|---|---|---|
| Cursos de tu ruta | `#ede9fe` · `#7B68EE` (2 px, alrededor) · `#3B2F80` | Sombra `rgba(123,104,238,.45)` + insignia "🧭 Tu ruta" + nombre en negrita 800 |
| Fuera de tu ruta | `#ffffff` · `#f3f4f6` (1 px) · `#1A1040` | Sin sombra, nombre en negrita 600 |
| Electivos que eligió el estudiante | `#f0f9ff` · `#bae6fd` · `#0369a1` | Acento `#0ea5e9`, borde izquierdo de 4 px |
| Elegido por CFU (ver abajo) | `#ecfeff` · `#a5f3fc` · `#0e7490` | Acento `#06b6d4`, borde izquierdo de 4 px |

"Cursos de tu ruta" es, a propósito, el estado con más contraste de los
cuatro — es el que más le importa al estudiante reconocer de un vistazo. Los
otros tres siguen con un borde fino de 1 px (o izquierdo de 4 px); solo el de
tu ruta tiene borde grueso de 2 px alrededor, fondo lleno y sombra.

En la leyenda (`v.mallaLegendRuta`, separado de `v.mallaLegend`), "Cursos de
tu ruta" también se ve distinto al resto: una insignia morada llena con texto
blanco, en vez del punto de color + texto plano que usan las demás entradas
— la leyenda debe reflejar la misma jerarquía que la malla.

**Nombre del curso, siempre en máximo 2 líneas.** El nombre usa
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
además que estos cursos **no cuentan** para los `mallaTotalCredits` créditos
de la carrera — son extracurriculares, no créditos de malla.

### Equivalencias CFU elegidas (Malla)

Desde 🌍 Experiencias Internacionales, en Ecosistema CIE, el estudiante puede
marcar un curso UC como "elegido por CFU" (botón "+ Elegir por CFU" en
`EQUIV_CFU`, guardado en `s.cfuChosen` por nombre de curso UC). Esa elección
se refleja de inmediato en la malla, para que sea evidente que ese curso ya
no se cursará en la UC sino por convalidación internacional:

- **Color** — el curso pasa a la paleta CFU (tabla de arriba), con prioridad
  sobre el color de ruta o el neutro — un curso puede ser de tu ruta y a la
  vez CFU, y el CFU manda visualmente.
- **Nomenclatura** — el nombre mostrado cambia al nombre del curso CFU
  equivalente (`cfuByUcName`, desde `EQUIV_CFU[].cfu`); debajo aparece
  "Equivale a: {nombre UC}" para no perder la referencia, más una etiqueta
  "🇺🇸 CFU".
- **Leyenda** — "Elegido por CFU" se agregó como entrada propia en
  `v.mallaLegend`, igual que cualquier otro color con significado.

Este trato se aplica tanto en la malla principal (*Elijo mi Ruta*) como en la
vista previa de la malla dentro de *Mis Rutas* — misma lógica, mismo dato.

**Acceso directo de vuelta a la malla.** Mientras se explora Experiencias
Internacionales, si hay al menos un curso elegido por CFU (`v.hasCfuChosen`),
aparece un aviso con el conteo y el botón "Ver mi malla final →"
(`v.ecoCtaClick`, el mismo que "Continuar malla →") — no hace falta terminar
de explorar las otras secciones para ver el efecto en la malla.

### Pantalla de cierre al confirmar la malla

"✓ Confirmar malla final" ya no navega directo a *Mi Perfil CoRA*: dentro de
la misma sección `malla`, cambia a una pantalla de cierre propia
(`s.mallaDone`, análoga a `s.mallaPreview` en Mis Rutas — un sub-estado, no
una sección nueva en `screens.js`). Dos sub-estados excluyentes:

- `v.mallaEditing` (`!s.mallaDone`) — la malla editable de siempre.
- `v.mallaShowSummary` (`s.mallaDone`) — la pantalla de cierre.

**La pantalla de cierre** deja evidente que el proceso terminó, con mensaje
inspirador, y reúne:

1. **Resumen** — ruta elegida, cursos de tu ruta, electivos elegidos, cursos
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

**"Pregúntale al Asistente CORA"** — chips de preguntas sugeridas, distintas
por modo (`H.chips`). Tocar una no abre un chat nuevo: usa
`this.askAssistant(pregunta)`, que la agrega como si el estudiante la
hubiera escrito en el hilo "General" del Asistente CORA (`s.msgsByCourse`,
ver Asistente CORA más abajo) y navega ahí — es la capa "interactiva y
conversacional con IA" que pedía el documento, reutilizando el chat que ya
existe en vez de construir uno nuevo.

### Niveles de riesgo (Acompañamiento)

| Nivel | Fondo · Borde · Acento |
|---|---|
| Alto (≥ 70 %) | `#fef2f2` · `#fee2e2` · `#dc2626` |
| Medio (50-69 %) | `#fff7ed` · `#ffedd5` · `#b45309` |
| Bajo (< 50 %) | `#f0fdf4` · `#bbf7d0` · `#15803d` |

El umbral de «riesgo» que dispara la propuesta de plan es **50 %**.

### Roles: Asistente CORA vs. Asesor Académico (Acompañamiento)

Dos tipos de apoyo, cada uno con su propia tarjeta (`SUPPORT_TYPES`, con
`desc`/`duracion`/`progreso`/`porque`) — nunca se mezclan bajo el mismo nombre:

| Rol | Qué es | Cuándo |
|---|---|---|
| 💬 Asistente CORA | IA, chat, disponible 24/7 | Dudas académicas puntuales — fórmulas, ejercicios, conceptos |
| 👨‍💼 Asesor Académico | Persona real, sesiones agendadas (~30 min) | Seguimiento personal — CORA lo recomienda si detecta riesgo alto/medio |

No existe un tercer rol "tutor académico": toda mención a agendar o dar
seguimiento usa "Asesor Académico". El toggle de "compartir mi progreso"
(`s.shareAdvisor`, antes eran dos toggles casi idénticos) también apunta a
este único rol.

**Plan flexible, no rígido.** El timeline semanal vive en `s.accWeeks`
(editable: agregar/quitar semana con su propia actividad, no un arreglo fijo)
y las dos actividades ligadas al curso de riesgo muestran su tema real
("Tema: {curso}"), tomado del curso de mayor riesgo en `PREDICT`. Además del
curso que CORA detecta, el estudiante puede sumar cualquier otro curso de su
ciclo actual (`s.reinforceCourses`, sin límite) con un botón "➕ Reforzar
otro curso de este ciclo" — cada uno etiquetado "Tú lo agregaste" para
distinguirlo de lo que CORA detectó automáticamente.

### Asistente CORA: historial por curso (`tutor` + widget flotante)

`s.msgsByCourse` guarda una conversación independiente por curso — cambiar
de curso no borra ni mezcla el historial de otro. Cada curso tiene una
descripción de una línea (`TUTOR_COURSE_DESC`), visible bajo el selector de
curso. El primer mensaje de cada curso aclara explícitamente que es una IA,
no una persona, y en qué momento deriva a un humano: "Si tu situación
necesita seguimiento personal, te conecto con tu Asesor Académico." El
widget flotante (fuera de todo `sc-if` de sección, visible en toda la
plataforma) comparte exactamente los mismos `v.msgs`/`v.tutorCourse`.

### Progreso: XP explicado, insignias y fórmulas (`progreso`)

- Un `Tip` junto al título aclara: "XP = puntos de progreso que muestran tu
  avance." Y un chip visible muestra "Has ganado {{ xpThisCycle }} XP este
  ciclo" (`s.xpCycleStart`, baseline separado del total acumulado).
- `BADGES` (class field, umbrales de XP) conecta el XP con logros con
  nombre propio — desbloqueada o 🔒 con el umbral que falta.
- Cualquier porcentaje calculado (progreso general, XP) lleva un `Tip` con
  la fórmula exacta, ej.: "Tu progreso se calcula como (Cursos completados /
  Totales) × 100 = (X / 13) × 100 = Y%."
- "🎯 Próximas actividades recomendadas" (`v.nextGoals`) no es una lista
  fija: sale del siguiente paso pendiente del Recomendador (`FLOW`), del
  curso de mayor riesgo en `PREDICT` y de la racha actual — si ya no aplica
  una meta (por ejemplo, ya se completó todo el Recomendador), desaparece sola.

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
| `assets/cora-logo.png` | CORA (provisto por la diseñadora) | Encabezado de la barra lateral (todas las pantallas) y encabezado de Asistente CORA |
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
  `📊 Tu Progreso en CORA`, no `Progreso del Usuario`.
- **Encabezados de grupo:** MAYÚSCULAS con `letter-spacing`, precedidos de emoji.
- **Cifras:** separador de miles con punto (`11.529 cursos`).
- **Datos de ejemplo:** el estudiante ficticio es **Alejandro García**, carrera
  **Ingeniería Comercial**, 350 XP, racha de 12 días. Mantén la coherencia si
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
| `unlockAll` | booleano | Salta el bloqueo del recorrido para poder revisar |
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
   por el ciclo 4, lleva 9 cursos y su promedio es 14,9: esas cifras salen de
   `STUDENT`, `TAKEN` y `CURRICULUM`, no de números escritos a mano en el HTML.

### Pendientes marcados en el código

Búscalos con `grep -n "TODO(UC)\|TEXTO PROPUESTO" "CORA App.dc.html"`:

| Marca | Qué falta |
|---|---|
| `TODO(UC)` en `ecoLangCount` | La cifra real de idiomas del Centro de Idiomas. Ahora muestra 6, que es lo que la propia pantalla lista. |
| `TEXTO PROPUESTO` en la sección «Qué es CORA» | El copy original de la versión anterior. El actual es una redacción en el tono del producto, para sustituir. |

---

## 8. Antes de dar un cambio por bueno

- [ ] Levanta `python3 -m http.server 8000` y abre `http://localhost:8000`.
- [ ] La pantalla que tocaste se ve bien en `pantalla.html?s=<id>`.
- [ ] El tablero (`index.html`) sigue mostrando las 13 tarjetas.
- [ ] La consola del navegador no tiene errores.
- [ ] Los colores nuevos salen de la tabla de tokens de la sección 3.
- [ ] Los textos están en español y con el tono de la sección 6.
- [ ] No has introducido `class=`, ni CSS externo, ni dependencias.
