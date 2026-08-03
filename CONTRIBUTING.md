# Cómo proponer un cambio de diseño

Guía para colaboradores externos. No hace falta saber programar: hace falta
saber usar Git y seguir el contrato de diseño.

---

## 0. Requisitos

- **Git** y una cuenta de GitHub con acceso a este repositorio.
- **Python 3** (viene con macOS y Linux) o Node, para levantar un servidor local.
- **Claude Code** con tu propia suscripción, si quieres editar conversando.

No hay `npm install`. No hay build. No hay variables de entorno.

---

## 1. Clona y levanta el proyecto

```bash
git clone <URL-DEL-REPO>
cd CoraDesign
python3 -m http.server 8000
```

Abre **http://localhost:8000** y comprueba que ves el tablero con las 13 pantallas.

> Abrir el archivo con doble clic no funciona. Tiene que ser por HTTP.

---

## 2. Crea una rama

Nunca trabajes sobre `main`.

```bash
git switch -c diseno/mis-rutas-compatibilidad
```

Nombra la rama por lo que cambias: `diseno/<pantalla>-<qué-cambias>`.

---

## 3. Haz el cambio

**Lee [`DESIGN.md`](DESIGN.md) antes de tocar nada.** Es corto y evita el 90 % de
los rechazos en revisión: colores, tipografía, espaciado, radios, sombras y la
sintaxis de la plantilla.

Casi todo vive en `CORA App.dc.html`.

### Con Claude Code

```bash
claude
```

Claude lee `CLAUDE.md` al arrancar y ya sabe cómo trabajar aquí. Pide el cambio
en lenguaje natural y revísalo en el navegador antes de aceptarlo.

### A mano

Edita `CORA App.dc.html` con tu editor. Los estilos van en línea, en el atributo
`style` de cada elemento.

---

## 4. Compruébalo

Recarga el navegador y revisa:

- [ ] La pantalla que tocaste se ve bien en `pantalla.html?s=<id>`.
- [ ] El tablero sigue mostrando las **13** tarjetas.
- [ ] La consola del navegador (`F12`) no tiene errores.
- [ ] Los colores nuevos salen de la paleta de `DESIGN.md`.
- [ ] Los textos están en español.
- [ ] No has añadido `class=`, ni CSS externo, ni dependencias.

---

## 5. Publica

```bash
git add -A
git commit -m "Mis Rutas: destaca el porcentaje de compatibilidad"
git push -u origin diseno/mis-rutas-compatibilidad
```

Luego abre un **Pull Request** en GitHub.

Vercel publica una **vista previa** de cada PR: el enlace aparece solo en el
propio PR, y sirve para que el equipo vea el cambio sin clonar nada. Cuando el
PR se fusiona en `main`, el sitio público se actualiza.

### Qué escribir en el PR

- Qué cambia y por qué.
- Qué pantallas se ven afectadas.
- Una captura del antes y el después, si el cambio es visual y no evidente.

---

## Qué se acepta y qué no

**Sí:**

- Ajustes de espaciado, jerarquía, color, tamaño y peso tipográfico.
- Reorganizar elementos dentro de una pantalla.
- Textos y microcopy en español.
- Iconos nuevos añadidos a `Icon.dc.html` con el `path` real de
  [Lucide](https://lucide.dev).

**No:**

- Convertir esto en una aplicación (React, Vite, npm, componentes).
- Introducir clases CSS, Tailwind u hojas de estilo nuevas.
- Cambiar los `id` de las secciones sin actualizar `screens.js`.
- Editar `support.js` o `_ds/`.
- Colores fuera de la paleta de `DESIGN.md`.

---

## Si algo se rompe

```bash
git restore .          # descarta los cambios sin guardar
git switch main        # vuelve a la rama principal
```

El diseño original siempre está en `main`. No se puede perder.
