## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ docker-compose up -d
$ npm run start

# watch mode
$ docker-compose up -d
$ npm run start:dev

# production mode
$ docker-compose up -d
$ npm run build
$ npm run start:prod
```
Фронт не пропускает "глупость"
Защита от спама реализована с помощью @nestjs/throttler - не больше 5 сообщений в минуту
