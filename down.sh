#!/bin/sh

# Vérifie si doppler est installé
if ! command -v doppler >/dev/null 2>&1; then
    echo "Doppler CLI n'est pas installé. Installation en cours..."
    curl -Ls https://cli.doppler.com/install.sh | sh
fi

# Exporter le token Doppler (remplacer par ton vrai token)
#export DOPPLER_TOKEN=<TON_TOKEN>

# Démarre Doppler avec Docker Compose
doppler run -- docker compose down
rm ./mariadb/processed-init.sql

echo "Application stoppé avec Doppler."
