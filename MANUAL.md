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

**2. Una cuenta de GitHub — solo para proponer cambios.**
El repositorio es público: para mirar y descargar no hace falta nada. Para
proponer un cambio sí, porque un Pull Request va firmado.
[Crearla es gratis](https://github.com/signup) y lleva un minuto; después pásale
tu usuario a Bruno y te añade al proyecto.

Tú nunca publicas directamente: propones, y Bruno fusiona. Está explicado en
[Cómo se publica un cambio](#cómo-se-publica-un-cambio).

---

## Atajo · Deja que Claude lo monte todo

Si no quieres leerte nada más, esto es lo mínimo:

1. Instala la aplicación de Claude:
   **[macOS](https://claude.ai/api/desktop/darwin/universal/dmg/latest/redirect)** ·
   **[Windows](https://claude.ai/api/desktop/win32/x64/setup/latest/redirect)**
2. Ábrela, inicia sesión y entra en la pestaña **Code**.
3. Elige **Local** → **Select folder** y selecciona una carpeta vacía cualquiera
   (por ejemplo, una nueva en tu Escritorio).
4. Pega este texto y envíalo:

```text
Hola Claude. Voy a trabajar en el diseño de CORA, un proyecto de la Universidad
Continental. No soy programadora: necesito que hagas tú todo el montaje y que me
hables siempre en español, sin tecnicismos y explicándome qué estás haciendo.

Haz esto en orden. Si algo falla, arréglalo tú antes de continuar; no me pases el
problema a mí a menos que necesites una contraseña o una decisión mía.

1. Comprueba si tengo Git instalado. Si no lo tengo, instálalo:
   - macOS: `xcode-select --install` o, si tengo Homebrew, `brew install git`
   - Windows: `winget install --id Git.Git -e`

2. Clona este repositorio en la carpeta actual. Es público, no hace falta usuario
   ni contraseña:
   https://github.com/brunogo25/cora-design

3. Entra en la carpeta `cora-design` y lee estos tres archivos completos antes de
   nada: MANUAL.md, CLAUDE.md y DESIGN.md. Son las reglas del proyecto y quiero
   que trabajes según ellas siempre, sin que tenga que recordártelo.

4. Comprueba que la vista previa está en marcha en http://localhost:8000. El
   proyecto la arranca sola al abrir la sesión; si no responde, arráncala tú con
   `python3 -m http.server 8000` en segundo plano.

5. Verifica tú mismo que funciona de verdad antes de decirme que está listo: que
   el tablero muestre las 13 pantallas. Si algo no carga, arréglalo.

6. Cuando esté todo listo, dime en un mensaje corto:
   - qué enlace tengo que abrir en el navegador,
   - qué es este proyecto y en qué archivo vive el diseño, en 5 líneas,
   - tres ejemplos concretos de cómo pedirte cambios de diseño.

Dos cosas importantes: no instales nada que no sea necesario para lo anterior, y
no conviertas esto en una aplicación (nada de React, Vite ni npm install). Es una
maqueta en HTML plano y tiene que seguir siéndolo.
```

Claude instalará lo que falte, descargará el proyecto, lo pondrá en marcha y te
dirá qué abrir. A partir de ahí, ya solo tienes que pedirle cambios.

> **La primera vez tardará unos minutos** y puede pedirte permiso para ejecutar
> algún comando: dile que sí. Si te pregunta la contraseña de tu ordenador para
> instalar Git, es normal — la pide el sistema, no Claude.

Cuando quieras entender el resto (cómo revisar, cómo publicar, cómo pedir las
cosas para que salgan a la primera), sigue leyendo.

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

> Si no aparece, escribe la dirección completa
> `https://github.com/brunogo25/cora-design`. Es público, así que se puede
> descargar sin permisos; los permisos solo hacen falta para **proponer**
> cambios, y de eso se encarga el Pull Request.

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

### 5. Avisa al equipo

Deja el enlace del Pull Request en el canal que uséis. Bruno lo revisa, lo aprueba
y lo fusiona. Al fusionarse, **[cora-design.vercel.app](https://cora-design.vercel.app)**
se actualiza solo.

---

## Cómo se publica un cambio

Esto es lo que conviene entender antes de proponer nada. Son dos minutos y evita
sustos.

### Sí, necesitas una cuenta de GitHub

Para **ver** el diseño y **descargarlo** no hace falta nada: el repositorio es
público. Para **proponer** un cambio sí, porque un Pull Request va firmado por
alguien.

Crearla es gratis y lleva un minuto: [github.com/signup](https://github.com/signup).
Pásale tu nombre de usuario a Bruno y te añade al proyecto.

### No puedes publicar sin querer

La rama `main` está protegida. Nadie puede escribir en ella directamente: todo
entra por Pull Request y con una aprobación. Y el sitio publicado solo se
reconstruye desde `main`.

Traducido: **tú no puedes tocar lo que ve el cliente final aunque quieras.** Como
mucho puedes proponer. Trabaja con tranquilidad.

```
   tu cambio  →  Pull Request  →  Bruno aprueba y fusiona  →  se publica
                                   ↑
                         aquí es donde se decide
```

### Cómo ves tu cambio antes de proponerlo

En tu propio ordenador, en `http://localhost:8000`. Esa es tu vista previa real y
la tienes en cuanto guardas: recargas el navegador y ahí está.

> **Por qué no hay vista previa automática en el Pull Request**
>
> Vercel, donde está publicado el sitio, solo construye lo que firma alguien de
> su cuenta. Como tú no lo eres, tu Pull Request no genera enlace de vista previa
> y verás su comprobación en gris o en rojo. **No es un error tuyo ni significa
> que tu cambio esté mal.** Bruno lo ve al fusionarlo.
>
> Si necesitas enseñárselo a alguien antes de fusionar, haz una captura y súbela
> al Pull Request: para eso está el hueco de «Antes y después» en la plantilla.

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

### 4. La vista previa se abre sola

No tienes que hacer nada: al empezar cada sesión, el proyecto arranca solo la
vista previa en **http://localhost:8000**. Ábrela en el navegador y ahí tienes el
tablero con las 13 pantallas.

Cada vez que Claude cambie algo, **recarga esa pestaña** y verás el resultado.

> Si alguna vez no carga, pídeselo con estas palabras: *«arranca la vista previa»*.
>
> **Nunca abras los archivos con doble clic**: el diseño carga sus piezas por HTTP
> y así no funciona.

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
Pega la dirección completa: `https://github.com/brunogo25/cora-design`. Es
público y no requiere permisos para descargarlo.

**«No me deja subir mis cambios»**
Normal: no tienes permiso de escritura en el repositorio, y no lo necesitas.
Pídele a Claude que **haga un fork y abra el Pull Request desde ahí** — funciona
igual y el equipo lo revisa exactamente igual. Si vas a colaborar a menudo,
pídele a Bruno acceso directo y te ahorras el fork.

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

**«La comprobación de Vercel sale en rojo o en gris en mi Pull Request»**
Es lo esperado y no es culpa tuya: Vercel solo construye lo que firma alguien de
su cuenta. Tu cambio se publica igual cuando Bruno lo fusiona. Tu vista previa de
verdad es `http://localhost:8000`.

**«No me deja fusionar mi propio Pull Request»**
Correcto, es a propósito. `main` está protegida y necesita la aprobación de otra
persona. Avisa a Bruno.

---

## Para el equipo — revisar y fusionar

`main` está protegida: exige Pull Request y una aprobación, y no admite
force-push. Como administrador puedes saltártelo, pero el flujo normal es:

1. Abre el Pull Request y mira el diff.
2. Si quieres verlo funcionando, tráete la rama y levanta el servidor:
   ```bash
   git fetch origin && git switch LA-RAMA
   python3 -m http.server 8000
   ```
3. Aprueba y fusiona con **«Create a merge commit»**.

> **Solo está habilitado el merge commit, a propósito.** Con *squash* o *rebase*
> el commit que llega a `main` queda a nombre de quien propuso el cambio, y
> Vercel bloquea el despliegue de producción con `COMMIT_AUTHOR_REQUIRED` porque
> esa persona no está en la cuenta de Vercel. Con merge commit, el commit lo
> firmas tú y despliega sin problema.
>
> Si algún día pasas la cuenta de Vercel a un plan de pago y añades a esa persona
> como miembro, puedes volver a habilitar los otros métodos y sus Pull Requests
> generarán vista previa automática.

---

## Para el equipo — dar acceso de escritura

El repositorio es público: cualquiera puede clonarlo y proponer cambios por fork
sin que hagas nada. Solo hace falta darle acceso a quien colabore a menudo, para
que trabaje con ramas directas en vez de forks:

```bash
gh api -X PUT repos/brunogo25/cora-design/collaborators/USUARIO \
  -f permission=push
```

O desde GitHub: **Settings → Collaborators → Add people**.

Al ser público, ten presente que el diseño y su historial son visibles para
cualquiera. No metas en el repositorio datos reales de estudiantes ni credenciales:
los datos que ves en la maqueta son inventados y tienen que seguir siéndolo.

---

## Enlaces

| | |
|---|---|
| Tablero publicado | [cora-design.vercel.app](https://cora-design.vercel.app) |
| Repositorio | [github.com/brunogo25/cora-design](https://github.com/brunogo25/cora-design) |
| Contrato de diseño | [`DESIGN.md`](DESIGN.md) |
| Flujo de Pull Requests | [`CONTRIBUTING.md`](CONTRIBUTING.md) |
| Documentación de Claude Code | [code.claude.com/docs](https://code.claude.com/docs) |
