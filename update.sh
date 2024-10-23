#!/bin/sh

# Vérifie si doppler est installé
if ! command -v doppler >/dev/null 2>&1; then
    echo "Doppler CLI n'est pas installé. Installation en cours..."
    curl -Ls https://cli.doppler.com/install.sh | sh
fi

doppler run -- docker compose down
rm ./mariadb/processed-init.sql
doppler run -- docker compose pull
doppler run -- bash -c 'envsubst < ./mariadb/init.sql > ./mariadb/processed-init.sql'
doppler run -- docker compose up -d

echo "Applications mises à jour avec Doppler."
