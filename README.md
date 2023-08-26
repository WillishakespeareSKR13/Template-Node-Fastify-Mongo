# Template Node Fastify MongoDB

A template project for building a Node.js API using Fastify and MongoDB, with user CRUD operations, JWT authentication, and other basic CRUD functionalities.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Live Demo](#live-demo)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [License](#license)

## Features

- User CRUD operations (Create, Read, Update, Delete)
- User registration and login with JWT authentication
- MongoDB integration for data storage
- API documentation with Swagger UI
- CORS configuration for cross-origin requests

## Prerequisites

- Node.js v18.x
- MongoDB instance (local or remote)
- npm (Node Package Manager)

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/WillishakespeareSKR13/Template-Node-Fastify-Mongo.git
   cd Template-Node-Fastify-Mongo
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

### Configuration

The application can be configured through the `config.ts` file in the root directory. Modify the configuration according to your needs:

- **APP**: Configuration related to the application, such as port, host, environment, logger, and JWT secret.
- **DB**: Database configuration, including MongoDB URI, host, port, and database name.

### Running the Application

- Start the application in development mode:

  ```bash
  yarn run dev
  ```

- Build and run the application in production mode:

  ```bash
  yarn run build
  yarn start
  ```

## API Documentation

API documentation is available using Swagger UI. Once the application is running, you can access the documentation at:

- http://localhost:3000/docs

## Live Demo

A live demo of the application is available at:

- https://skr-template-nfm.up.railway.app/

Documentation for the live demo is available at:

- https://skr-template-nfm.up.railway.app/docs

## Dependencies

- [@fastify/cors](https://www.npmjs.com/package/@fastify/cors)
- [@fastify/jwt](https://www.npmjs.com/package/@fastify/jwt)
- [@fastify/swagger](https://www.npmjs.com/package/@fastify/swagger)
- [@fastify/swagger-ui](https://www.npmjs.com/package/@fastify/swagger-ui)
- [@hapi/boom](https://www.npmjs.com/package/@hapi/boom)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [fastify](https://www.npmjs.com/package/fastify)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [zod](https://www.npmjs.com/package/zod)
- [zod-to-json-schema](https://www.npmjs.com/package/zod-to-json-schema)

## Dev Dependencies

- [@types/bcryptjs](https://www.npmjs.com/package/@types/bcryptjs)
- [@types/mongoose](https://www.npmjs.com/package/@types/mongoose)
- [@types/node](https://www.npmjs.com/package/@types/node)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [rimraf](https://www.npmjs.com/package/rimraf)
- [ts-node](https://www.npmjs.com/package/ts-node)
- [typescript](https://www.npmjs.com/package/typescript)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

Feel free to use the code, and if you do, please give me credit.
