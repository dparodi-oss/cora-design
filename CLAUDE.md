# Instrucciones para el agente

Este repositorio contiene **el diseño** de CORA (Universidad Continental), no una
aplicación. Se trabaja en HTML plano. No hay build, ni dependencias, ni backend.

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

## Cómo verlo

El diseño se sirve por HTTP; abrir el archivo con doble clic **no funciona**
(las piezas se cargan con `fetch`).

```bash
python3 -m http.server 8000
# http://localhost:8000              → tablero
# http://localhost:8000/pantalla.html?s=malla   → una pantalla
```

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

Comprueba en el navegador antes de dar nada por hecho:

- la pantalla que tocaste se ve bien en `pantalla.html?s=<id>`;
- el tablero sigue mostrando las 13 tarjetas;
- la consola no tiene errores.

Luego sigue `CONTRIBUTING.md` para publicar el cambio.
