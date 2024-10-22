#!/bin/sh

# Vérifie si doppler est installé
if ! command -v doppler >/dev/null 2>&1; then
    echo "Doppler CLI n'est pas installé. Installation en cours..."
    curl -Ls https://cli.doppler.com/install.sh | sh
fi

# Exporter le token Doppler (remplacer par ton vrai token)
#export DOPPLER_TOKEN=<TON_TOKEN>

# Démarre Doppler avec Docker Compose
doppler run -- bash -c 'envsubst < ./mariadb/init.sql > ./mariadb/processed-init.sql'
doppler run -- docker compose up -d

echo "Application démarrée avec Doppler."
