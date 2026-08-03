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
| Recomendador | `🟣 RECOMENDADOR` | Formulario · Mis Rutas · Ecosistema UC y CIE · Elijo mi Ruta · Mi Perfil CoRA · Veo mi Horizonte · Acompañamiento |
| Académico | `📚 ACADÉMICO` | Práctico para examen · Mis flashcards · Tutor CORA |
| Ajustes | `⚙️ AJUSTES` | Mi progreso · Perfil · Configuración |

Estado activo: fondo `#7B68EE`, texto blanco, sombra morada.
Estado inactivo: fondo transparente, texto `#4b5563`.
Completado: insignia circular verde con un check.

El **recorrido está bloqueado en orden** (mapa `REQ` en la lógica): cada pantalla
del Recomendador exige la anterior. La prop `unlockAll` salta el bloqueo para
poder revisar el diseño.

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

---

## 8. Antes de dar un cambio por bueno

- [ ] Levanta `python3 -m http.server 8000` y abre `http://localhost:8000`.
- [ ] La pantalla que tocaste se ve bien en `pantalla.html?s=<id>`.
- [ ] El tablero (`index.html`) sigue mostrando las 13 tarjetas.
- [ ] La consola del navegador no tiene errores.
- [ ] Los colores nuevos salen de la tabla de tokens de la sección 3.
- [ ] Los textos están en español y con el tono de la sección 6.
- [ ] No has introducido `class=`, ni CSS externo, ni dependencias.
