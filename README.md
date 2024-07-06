# MS CLIENT BS

## Instalación y ejecución ⚙️

- Crear archivo .env usando .env.template

  ```bash
  ENVIRONMENT=LOCAL
  NODE_ENV=development
  LOG_LEVEL=debug
  APP_NAME=ms-client-bs
  HTTP_PORT=3001

  # MongoDB
  MONGO_INITDB_ROOT_USERNAME=admin
  MONGO_INITDB_ROOT_PASSWORD=123456
  MONGO_INITDB_DATABASE=client_db

  MONGO_URI="mongodb://admin:123456@localhost:27017/client_db?authSource=admin"
  ```

- Instalar dependencias y levantar proyecto

  ```bash
  npm i
  #opcional
  npm install -g pino-pretty
  #DB
  docker-compose up -d
  #Usando pino-pretty
  npm run start:dev | pino-pretty
  #Sin pino-pretty
  npm run start:dev
  ```

- [Ir a la documentación en Swagger](http://localhost:3001/ms-client-bs/v1/api-docs)

  ![swagger](/etc/docs/images/swagger.png)
  
## Endpoints 🚀

- Seed
  ![seed](/etc/docs/images/seed.png)

  ![mongo_data](/etc/docs/images/seed_mongo_data.png)

- Client Detail
  ![client-detail](/etc/docs/images/client_detail.png)

## Construido con 🛠️

- Nestjs
- Nodejs v20.15.0
- Typescript
- MongoDB
- Docker
- Fastify

### Autor ✒️

- Williams David Galeano Gomez, <willyrhcp96@gmail.com>
