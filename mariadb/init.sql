CREATE DATABASE IF NOT EXISTS homeassistant;
CREATE USER 'homeassistant'@'%' IDENTIFIED BY '${MYSQL_HOMEASSISTANT_PASSWORD}';
GRANT ALL PRIVILEGES ON homeassistant.* TO 'homeassistant'@'%';

CREATE DATABASE IF NOT EXISTS photoprism;
CREATE USER IF NOT EXISTS 'photoprism'@'%' IDENTIFIED BY '${MYSQL_PHOTOPRISM_PASSWORD}';
GRANT ALL PRIVILEGES ON photoprism.* TO 'photoprism'@'%';

FLUSH PRIVILEGES;
