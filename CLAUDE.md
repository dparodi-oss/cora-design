# Instrucciones para el agente

Este repositorio contiene **el diseño** de CORA (Universidad Continental), no una
aplicación. Se trabaja en HTML plano. No hay build, ni dependencias, ni backend.

## Con quién estás trabajando

**Da por hecho que la persona no sabe programar.** Es diseñadora o responsable de
producto: sabe perfectamente qué quiere ver en pantalla, pero no lee código, no
conoce git y no sabe qué es un servidor local.

Eso cambia cómo trabajas:

- **Habla en español y sin tecnicismos.** «He separado las tarjetas» sí; «he
  ajustado el `gap` del contenedor flex» no.
- **No le pidas que ejecute nada.** Los comandos los lanzas tú.
- **No le preguntes cosas que puedes averiguar.** Mira el código primero.
- **Cuando algo falle, arréglalo y cuéntalo después.** Solo la interrumpes si
  necesitas una decisión de diseño o una contraseña.
- Si te pide algo que rompería el proyecto, **explícale por qué y ofrécele la
  alternativa más cercana** en vez de negarte sin más.

## La vista previa: no la dejes nunca sin ella

El diseño solo se ve con un servidor en marcha. **Abrir los archivos con doble
clic no funciona.**

Un hook lo arranca solo al empezar la sesión (`.claude/preview.sh`), en
**http://localhost:8000**. Pero no des por sentado que está vivo:

1. **Al empezar**, comprueba que responde y dile el enlace:
   `curl -s -o /dev/null -w "%{http_code}" http://localhost:8000/index.html`
2. **Si no responde**, arráncalo tú antes de seguir:
   `python3 -m http.server 8000` en segundo plano.
3. **Después de cada cambio visual**, recuérdale que recargue el navegador y
   dile exactamente qué pantalla mirar, con su enlace directo:
   `http://localhost:8000/pantalla.html?s=malla`

Nunca termines diciendo «ya está» sin que ella tenga cómo verlo.

## Cómo se publica un cambio

**Nunca escribas en `main`.** Está protegida: exige Pull Request y una aprobación
de otra persona. El flujo, siempre:

1. Rama nueva: `git switch -c diseno/<pantalla>-<que-cambias>`
2. Commit con un mensaje en español que describa el cambio visible.
3. `git push -u origin LA-RAMA`
4. `gh pr create` rellenando la plantilla del repositorio.
5. Dale el enlace del Pull Request y dile que avise a Bruno para que lo revise
   y lo fusione. **Ella no fusiona.**

Si `git push` falla por permisos, haz un fork y abre el Pull Request desde ahí.

> La comprobación de Vercel saldrá en gris o en rojo en sus Pull Requests. Es lo
> esperado: Vercel solo construye lo que firma alguien de su cuenta. **No es un
> error y no hay que arreglarlo.** Díselo si aparece, para que no se preocupe.

## Antes de nada

**Lee `DESIGN.md` completo antes de tu primera edición.** Es el contrato de
diseño: tokens de color, tipografía, espaciado, patrones de componente y la
sintaxis de la plantilla. Un cambio que lo contradiga está mal, aunque «se vea bien».

## Dónde está cada cosa

| Archivo | Qué es |
|---|---|
| `CORA App.dc.html` | **Las 13 pantallas.** Aquí se hace el 95 % del trabajo. |
| `Icon.dc.html` | Los 31 iconos de línea (Lucide). Añade aquí los que falten. |
| `Tip.dc.html` | El globo de ayuda contextual. |
| `screens.js` | Catálogo de pantallas: alimenta el tablero y el visor. |
| `index.html` | Tablero con vista previa en vivo de las 13 pantallas. |
| `pantalla.html` | Visor de una pantalla suelta (`?s=<id>`). |
| `support.js` | Runtime generado. **No editar.** |
| `_ds/` | Normalización de estilos y tokens del sistema. **No editar.** |

## Reglas que no se negocian

1. **Estilos en línea, en el atributo `style`.** Este diseño no usa ni una sola
   clase CSS. No introduzcas `class=`, ni Tailwind, ni hojas de estilo nuevas.
2. **Colores solo de la paleta de `DESIGN.md`.** El morado de marca es `#7B68EE`.
3. **Iconos vía `<dc-import name="Icon" …>`**, nunca SVG pegado a mano.
4. **Todo el texto de interfaz va en español.**
5. **No renombres los `id` de las secciones.** Están enlazados con `screens.js`,
   con el mapa `REQ` y con las URL del tablero.
6. **Si añades o quitas una pantalla, actualiza `screens.js`** en el mismo cambio.
7. **No conviertas esto en una app.** Nada de React, Vite, npm ni componentes.
   Si te piden una función nueva, es una maqueta de esa función.
8. **Los colores con significado llevan leyenda.** Tipos de ruta, categorías de
   curso de la malla y niveles de riesgo son códigos, no decoración: si cambias
   un color, cambia también su leyenda. Están tabulados en `DESIGN.md`.
9. **Las cifras de ejemplo salen de los datos, no del HTML.** `STUDENT`, `TAKEN`,
   `CURRICULUM` y `ROUTES` son la fuente; no escribas números sueltos en el marcado.
10. **Datos inventados siempre.** El repositorio es público: nunca metas datos
    reales de estudiantes, correos reales ni credenciales.

## Sintaxis de la plantilla

`CORA App.dc.html` es una plantilla de Design Component, no HTML corriente:

- `{{ valor }}` interpola algo devuelto por `renderVals()`.
- `<sc-if value="{{ cond }}">` condiciona. **No existe `sc-else`**: usa dos
  `sc-if` hermanos con condiciones inversas.
- `<sc-for list="{{ xs }}" as="item">` repite; expone `item` y `$index`.
- `style-hover="…"` para el estado hover (no hay `:hover` en estilos en línea).
- Los atributos `hint-*` son pistas del editor de Claude Design: **no los borres**.

La lógica y los datos de ejemplo están al final del archivo, en
`class Component extends DCLogic`.

## Al terminar

Comprueba tú mismo antes de decir que está hecho:

- la pantalla que tocaste se ve bien en `pantalla.html?s=<id>`;
- el tablero sigue mostrando las 13 tarjetas;
- la consola no tiene errores.

Y cierra siempre diciéndole **qué enlace abrir para ver el cambio**.
