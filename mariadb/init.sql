CREATE USER 'homeassistant'@'%' IDENTIFIED BY '${MYSQL_PASSWORD}';
GRANT ALL PRIVILEGES ON homeassistant.* TO 'homeassistant'@'%';
FLUSH PRIVILEGES;
