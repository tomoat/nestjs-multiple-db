CREATE DATABASE IF NOT EXISTS power_metadata;

CREATE USER 'user'@'%' IDENTIFIED BY 'password';

GRANT ALL PRIVILEGES ON power_metadata.* TO 'user'@'%' WITH GRANT OPTION;

ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'root';

ALTER USER 'admin'@'%' IDENTIFIED WITH mysql_native_password BY 'admin';

ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY 'password';