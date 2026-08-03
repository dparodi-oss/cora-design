# Manual — Modificar el diseño de CORA con Claude

Guía para cambiar el diseño de CORA hablando con Claude, sin saber programar.

Tú describes el cambio en español, Claude lo hace, y el equipo lo revisa antes de
que entre. No puedes romper nada: todo pasa por una revisión.

---

## Lo que necesitas antes de empezar

**1. Una suscripción de pago a Claude.**
Vale **Pro**, **Max**, **Team** o **Enterprise**. El plan gratuito de Claude **no
incluye** Claude Code y no sirve para esto.
→ [claude.com/pricing](https://claude.com/pricing)

**2. Una cuenta de GitHub con acceso al repositorio.**
El repositorio es privado. Pídele acceso a Bruno con tu usuario de GitHub; él te
invita y te llega un correo con la invitación. Acéptala antes de seguir.

Eso es todo. No hace falta instalar nada si eliges el primer camino.

---

## Elige tu camino

| | Camino A · Navegador | Camino B · Aplicación | Camino C · Terminal |
|---|---|---|---|
| **Instalar** | Nada | Una app | Un comando |
| **Ver el diseño mientras lo cambias** | No, lo ves al final | Sí, en vivo | Sí, en vivo |
| **Para quién** | La mayoría | Quien quiera iterar rápido | Perfiles técnicos |

**Si dudas, empieza por el A.** Es el más simple y suficiente para casi todo.

---

# Camino A · Desde el navegador

Sin instalar nada. Claude trabaja en la nube y te deja el cambio listo para revisar.

### 1. Conecta tu GitHub

Entra en **[claude.ai/code](https://claude.ai/code)** y sigue el asistente para
autorizar la **aplicación de GitHub de Claude**. Le das acceso una sola vez.

### 2. Elige el repositorio

En el selector de repositorio, busca **`brunogo25/cora-design`**.

> Si no aparece, es que todavía no has aceptado la invitación de Bruno, o la
> autorizaste con otra cuenta de GitHub distinta a la que él invitó.

### 3. Pide el cambio

Escribe lo que quieres, en español y con normalidad:

> En la pantalla de *Mis Rutas*, el porcentaje de compatibilidad se ve pequeño.
> Súbelo a la esquina superior derecha de cada tarjeta y hazlo más grande.

Claude lee solo el `CLAUDE.md` y el `DESIGN.md` del repositorio, así que ya conoce
la paleta, la tipografía y las reglas del proyecto. No tienes que explicárselas.

### 4. Revisa y crea el Pull Request

Cuando termine verás un resumen de lo que cambió, con un contador tipo `+42 -18`.
Pínchalo para ver el detalle línea a línea. Si algo no te convence, díselo en el
mismo chat y lo corrige.

Cuando estés conforme, pídele que **cree un Pull Request**.

### 5. Mira el resultado de verdad

En el Pull Request de GitHub, Vercel deja automáticamente un enlace de **vista
previa**. Ábrelo: es el diseño real con tu cambio aplicado, funcionando.

Ese enlace es público, así que puedes pasárselo a quien tenga que dar el visto bueno.

### 6. Avisa al equipo

Deja el enlace del Pull Request en el canal que uséis. Bruno lo revisa y lo
fusiona. Cuando se fusiona, **[cora-design.vercel.app](https://cora-design.vercel.app)**
se actualiza solo.

---

# Camino B · Aplicación de escritorio

Igual que el A, pero ves el diseño en vivo mientras lo cambias. Recomendado si vas
a hacer muchos ajustes visuales seguidos.

### 1. Instala la aplicación

- **macOS** → [descargar](https://claude.ai/api/desktop/darwin/universal/dmg/latest/redirect)
- **Windows** → [descargar](https://claude.ai/api/desktop/win32/x64/setup/latest/redirect)

Ábrela e inicia sesión con tu cuenta de Claude.

> En Windows necesitas además [Git](https://git-scm.com/downloads/win) instalado.
> En Mac ya viene de serie.

### 2. Abre la pestaña **Code**

Arriba en el centro. Si te pide mejorar de plan, es que tu cuenta de Claude no es
de pago todavía.

### 3. Trae el proyecto

La primera vez tienes que descargar el repositorio. En la app, abre el terminal
integrado con **Ctrl + `** y pega:

```bash
git clone https://github.com/brunogo25/cora-design.git
```

Después elige **Local** → **Select folder** y selecciona la carpeta `cora-design`
que se acaba de crear.

### 4. Levanta la vista previa

En ese mismo terminal:

```bash
python3 -m http.server 8000
```

Y abre **http://localhost:8000**. Ahí tienes el tablero con las 13 pantallas.

> Esto tiene que estar arrancado mientras trabajas. Si cierras el terminal, la
> vista previa deja de funcionar.
>
> **Importante:** abrir los archivos con doble clic **no funciona**. El diseño
> carga sus piezas por HTTP y el navegador lo bloquea.

### 5. Pide cambios y acéptalos uno a uno

Escribe lo que quieres. Claude te propone cada cambio con un **diff** —lo que
quita en rojo, lo que pone en verde— y tú decides con **Aceptar** o **Rechazar**.
Tus archivos no se tocan hasta que aceptas.

Recarga el navegador para ver el resultado.

### 6. Publícalo

Pídeselo con estas palabras:

> Crea una rama, haz commit de los cambios y abre un Pull Request.

Y sigue desde el punto 5 del Camino A.

---

# Camino C · Terminal

Para quien ya trabaje con la línea de comandos.

```bash
# 1. Instalar Claude Code
curl -fsSL https://claude.ai/install.sh | bash          # macOS y Linux
irm https://claude.ai/install.ps1 | iex                 # Windows (PowerShell)

# 2. Clonar y entrar
git clone https://github.com/brunogo25/cora-design.git
cd cora-design

# 3. Vista previa (en otra pestaña del terminal)
python3 -m http.server 8000

# 4. Arrancar Claude
claude
```

La primera vez te pedirá iniciar sesión en el navegador.

El flujo de ramas y Pull Requests está en **[`CONTRIBUTING.md`](CONTRIBUTING.md)**.

---

## Cómo pedir las cosas para que salgan bien

Claude no ve la pantalla como tú. Cuanto más concreto seas, menos vueltas hay que dar.

**Di en qué pantalla estás.** Hay 13 y muchas se parecen.

| ❌ Poco claro | ✅ Claro |
|---|---|
| «El título se ve mal» | «En *Veo mi Horizonte*, el título choca con el chip de XP en pantallas estrechas» |
| «Ponlo más bonito» | «En las tarjetas de *Mis Rutas*, sube el espacio entre la descripción y las etiquetas» |
| «Cambia el color» | «Los electivos de la malla se confunden con los de matrícula regular; hazlos más distintos» |

**Describe el problema, no solo la solución.** Si dices *«el porcentaje se pierde
entre tanto texto»*, Claude puede proponerte algo mejor que lo que se te había
ocurrido. Si le dices *«ponlo en 18px»*, hará exactamente eso y nada más.

**Un cambio por conversación.** Es más fácil de revisar y de deshacer.

**Si algo no te gusta, dilo y ya.** «Demasiado grande, baja un punto» funciona
perfectamente. No hace falta empezar de cero.

### Ejemplos que funcionan bien en este proyecto

> En el tablero hay tres variantes del bloque de contexto del estudiante.
> Quédate con la de banner y elimina las otras dos.

> En *Acompañamiento*, el porcentaje de riesgo debería verse antes que el nombre
> del curso. Es lo primero que mira un tutor.

> Los emoji de la barra lateral se ven inconsistentes de tamaño. Igualalos.

> En *Configuración*, «Cerrar todas las sesiones» es demasiado fácil de pulsar
> por error. Sepáralo del resto y pide confirmación.

---

## Antes de dar un cambio por bueno

- [ ] La pantalla que tocaste se ve bien.
- [ ] El tablero sigue mostrando las 13 pantallas.
- [ ] Miraste la vista previa de Vercel en el Pull Request.
- [ ] Los textos están en español.

---

## Lo que no conviene pedir

Este repositorio es **una maqueta de diseño**, no la aplicación real. Pedir lo
siguiente rompe el proyecto o no tiene sentido aquí:

- Convertirlo en una app (React, Vite, npm, instalar dependencias).
- Conectarlo a una base de datos o a un servidor.
- Meter clases de CSS o Tailwind — aquí los estilos van en línea, uno a uno.
- Tocar `support.js` o la carpeta `_ds/`.

Si necesitas algo de eso, es una conversación con Bruno, no un cambio de diseño.

---

## Si algo sale mal

**«No encuentro el repositorio»**
No has aceptado la invitación, o autorizaste Claude con otra cuenta de GitHub.

**«Me pide mejorar de plan»**
Tu cuenta de Claude es gratuita. Claude Code necesita Pro, Max, Team o Enterprise.

**«La página sale en blanco o sin estilos»**
Estás abriendo el archivo con doble clic. Tiene que ser por HTTP:
`python3 -m http.server 8000` y luego `http://localhost:8000`.

**«He liado algo en mi copia local»**
Nada se pierde: la versión buena siempre está en `main`.

```bash
git restore .      # descarta lo que no has guardado
git switch main    # vuelve a la rama principal
```

**«Vercel no despliega mi cambio»**
Comprueba el correo de tus commits: Vercel bloquea los despliegues cuyo autor no
reconoce. Tiene que ser un correo verificado en tu cuenta de GitHub.

```bash
git config user.email "tu-correo-verificado-en-github.com"
git log -1 --format=%ae     # comprueba cuál se usó
```

---

## Para el equipo — cómo dar acceso a alguien

Con permiso de escritura, para que pueda abrir Pull Requests:

```bash
gh api -X PUT repos/brunogo25/cora-design/collaborators/USUARIO \
  -f permission=push
```

O desde GitHub: **Settings → Collaborators → Add people**.

Pásale a la persona este manual y el enlace del tablero. Con eso tiene todo.

---

## Enlaces

| | |
|---|---|
| Tablero publicado | [cora-design.vercel.app](https://cora-design.vercel.app) |
| Repositorio | [github.com/brunogo25/cora-design](https://github.com/brunogo25/cora-design) |
| Contrato de diseño | [`DESIGN.md`](DESIGN.md) |
| Flujo de Pull Requests | [`CONTRIBUTING.md`](CONTRIBUTING.md) |
| Documentación de Claude Code | [code.claude.com/docs](https://code.claude.com/docs) |
