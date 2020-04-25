CREATE ROLE postgresdev WITH LOGIN PASSWORD 'postgresdev' SUPERUSER;

CREATE DATABASE church_api_dev;
CREATE DATABASE church_api_test;

GRANT ALL PRIVILEGES ON DATABASE church_api_dev TO postgresdev;
GRANT ALL PRIVILEGES ON DATABASE church_api_test TO postgresdev;