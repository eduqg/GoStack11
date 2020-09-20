# Comandos Backend GoBarber 2020 - Gostack 11

```console
yarn add express
yarn add typescript -D
yarn tsc --init
```

Alterar tsconfig.json

rootDir: './src'
outDir: './dist'

```console
yarn add @types/express -D
```

Dera build em dist

```console
yarn tsc
```

Converte código e atualiza automaticamente como nodemon

```console
yarn add ts-node-dev -D
```

TranspileOnly apenas converte, não confere error no código

"ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts"

para configurar debug

--inspect

Para rodar

yarn dev:server

## Typeorm

```console
yarn add typeorm pg
yarn add reflect-metadata -> Adicionar no server, primeira linha
yarn dev:server
yarn typeorm
```

#### Migrations

```console
yarn typeorm migration:create -n CreateAppointments
yarn typeorm migration:run
yarn typeorm migration:revert
yarn typeorm migration:run
yarn typeorm migration:show
```

## JWT

```console
yarn add bcryptjs
yarn add @types/bcryptjs -D
yarn add jsonwebtoken
yarn add @types/jsonwebtoken -D
```

## Jest Tests

```console
yarn add jest
yarn jest --init
yarn add ts-jest -D
yarn add @types/jest -D
```

Editar jest.config -> Test match e preset
Eslintrc -> "jest":true

moduleNameMapper para importacao de @modules

```console
yarn test
```

## MongoDB

```console
yarn add mongodb
yarn add @types/mongodb -D
```

## Celebrate to validations

```console
yarn add celebrate
yarn add @types/hapi__joi -D
```



## Dotenv

```console
yarn add dotenv
```

Também importar na raiz

## Class Transformer para adicionar informações em retornos

```console
 yarn dev:server
  yarn add class-transformer
```


### Aws Email SES

```console
yarn add aws-sdk
```

Conta de email e dominio para unform dev -> zoho 5 grátis

Preciso de dominio

## Mime - Tipo de arquivos

```console
yarn add mime
```

## Redis

docker run --name redis -p 6379:6379 -d -t redis:alpine

```console
yarn add ioredis
yarn add @types/ioredis -D
```

## Date dog - monitor de queries


## Brute force

```console
yarn add rate-limiter-flexible
yarn add redis
yarn add @types/redis -D
```

```console

```

```console

```

```console

```
