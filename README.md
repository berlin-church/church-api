# Church-API

## Introduction

GraphQL API using -

- HapiJS
- apollo-server
- PostgreSQL (using knex.js)

## Local development

- Run `docker-compose up --build` to run a local Postgres DB
- Run `npm install`to install dependencies
- Run `yarn migrate-latest`to migrate DB to latest vesrion
- Run `yarn dev` to run the application locally
- Open `http://localhost:9000/graphql` in browser to browse the GraphQL schema and run queries
