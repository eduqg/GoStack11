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


```console
```


```console
```


```console
```


```console
```


```console
```


```console
```


```console
```


```console
```


```console
```


```console
```
