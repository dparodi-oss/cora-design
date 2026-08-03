# CORA — Sistema de diseño

Diseño de **CORA**, el sistema de orientación académica de la Universidad
Continental (Perú). Fase 2.

Son **13 pantallas en HTML plano**. Sin build, sin framework, sin backend: se
clona, se abre y se edita.

> ### 🔗 **[cora-design.vercel.app](https://cora-design.vercel.app)**
> El tablero en vivo. Ábrelo para ver las 13 pantallas sin instalar nada.

---

## Empezar en 30 segundos

```bash
git clone https://github.com/brunogo25/cora-design.git
cd cora-design
python3 -m http.server 8000
```

Abre **http://localhost:8000**.

> ⚠️ Hace falta un servidor. Abrir `index.html` con doble clic **no funciona**:
> el diseño carga sus piezas por HTTP y el navegador lo bloquea desde `file://`.
>
> Si no tienes Python: `npx serve` o la extensión *Live Server* de VS Code.

---

## Qué vas a ver

| URL | Qué es |
|---|---|
| `/` | **Tablero** — las 13 pantallas con vista previa en vivo |
| `/pantalla.html?s=malla` | Una pantalla a tamaño completo, con selector |
| `/CORA%20App.dc.html` | El archivo de diseño en crudo |

Las vistas previas del tablero **no son capturas**: cada tarjeta es el diseño
real ejecutándose. Cuando edites el diseño, el tablero se actualiza solo.

---

## Las 13 pantallas

**🟣 Recomendador** — el recorrido guiado, en este orden:

1. Formulario · 2. Mis Rutas · 3. Ecosistema UC y CIE · 4. Elijo mi Ruta ·
5. Mi Perfil CoRA · 6. Veo mi Horizonte · 7. Acompañamiento

**📚 Académico** — 8. Práctico para examen · 9. Mis flashcards · 10. Tutor CORA

**⚙️ Ajustes** — 11. Mi progreso · 12. Perfil · 13. Configuración

---

## Modificar el diseño con Claude Code

Este repositorio está preparado para que lo edites conversando:

```bash
cd CoraDesign
claude
```

Claude lee automáticamente `CLAUDE.md` y sabe cómo trabajar aquí. Pídele el
cambio en lenguaje natural:

> «En *Mis Rutas*, sube el porcentaje de compatibilidad a la esquina superior
> derecha de cada tarjeta y hazlo más grande.»

> «Los chips de la barra superior se ven apretados: dales más aire.»

Cuando termines, sigue **[`CONTRIBUTING.md`](CONTRIBUTING.md)** para publicar.

---

## Estructura

```
├── index.html            Tablero de las 13 pantallas
├── pantalla.html         Visor de una pantalla (?s=<id>)
├── screens.js            Catálogo de pantallas (tablero + visor)
│
├── CORA App.dc.html      ← EL DISEÑO. Las 13 pantallas.
├── Icon.dc.html          31 iconos de línea (Lucide)
├── Tip.dc.html           Globo de ayuda contextual
├── support.js            Runtime de Design Component (generado, no editar)
├── _ds/                  Tokens y normalización de estilos (no editar)
│
├── DESIGN.md             ← EL CONTRATO DE DISEÑO. Léelo antes de editar.
├── CLAUDE.md             Instrucciones para el agente
└── CONTRIBUTING.md       Cómo publicar un cambio
```

---

## Cómo funciona

`CORA App.dc.html` es un **Design Component**: una plantilla HTML que
`support.js` convierte en React dentro del navegador. Eso permite tener las 13
pantallas, con su estado y su navegación, en un único archivo editable a mano.

Las 13 pantallas son la misma plantilla mostrando una sección distinta. El
tablero y el visor eligen cuál mostrar fijando la prop `startSection` del
diseño; por eso una sola edición se refleja en todas partes.

La sintaxis (`{{ }}`, `sc-if`, `sc-for`, `dc-import`) está documentada en
[`DESIGN.md`](DESIGN.md#7-cómo-editar-el-archivo-sin-romperlo).

---

## Origen y sincronización

El diseño se exporta desde **Claude Design** (proyecto *CoraV2*), que a su vez
partió de la app `Cora5` (Vite + React) y de los iconos de
[lucide-icons/lucide](https://github.com/lucide-icons/lucide).

Como el formato del archivo es el mismo, los cambios hechos aquí se pueden
devolver al proyecto de Claude Design cuando haga falta.

### Una diferencia respecto al original

El paquete de componentes React del sistema de diseño (`_ds_bundle.js`) **no se
incluye**: el diseño no usa ni uno solo de sus componentes ni de sus clases —
cada elemento lleva sus estilos en línea. Sí se conserva `_ds_bundle.css`, que
aporta la normalización de estilos del navegador y los tokens, y esa parte sí
afecta a cómo se ve todo.

---

## Licencia

Material interno de la Universidad Continental. Todos los derechos reservados.
