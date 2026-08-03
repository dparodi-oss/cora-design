#!/usr/bin/env bash
# Arranca la vista previa del diseño en http://localhost:8000
#
# Lo ejecuta solo el hook SessionStart, para que quien trabaje aquí tenga
# siempre el diseño delante sin tener que pedirlo ni saber levantarlo.
#
# Nunca falla la sesión: si no puede arrancar, lo dice y sigue.

set -u
PORT=8000
URL="http://localhost:$PORT"
cd "$(dirname "$0")/.." || exit 0

vive() { curl -s -o /dev/null --max-time 2 "$URL/index.html"; }

if vive; then
  echo "Vista previa ya en marcha: $URL"
  exit 0
fi

arranca() {
  # nohup + & para que sobreviva al hook, que termina enseguida
  nohup "$@" >/dev/null 2>&1 &
  sleep 2
  vive
}

if command -v python3 >/dev/null 2>&1; then
  arranca python3 -m http.server "$PORT"
elif command -v python >/dev/null 2>&1; then
  arranca python -m http.server "$PORT"
elif command -v npx >/dev/null 2>&1; then
  arranca npx --yes serve -l "$PORT" .
fi

if vive; then
  echo "Vista previa lista: $URL — recarga el navegador tras cada cambio."
else
  echo "No pude arrancar la vista previa (¿falta Python o Node?). Arráncala tú con: python3 -m http.server $PORT"
fi
exit 0
