# Comandos

Iniciado com

```console
 npx react-native init gobarbermobile --template react-native-template-typescript
```

### Prettier + Eslint

```console
 yarn add eslint@6.8.0 -D
 yarn eslint --init
 yarn add eslint-plugin-react@^7.19.0 @typescript-eslint/eslint-plugin@latest eslint-config-airbnb@latest eslint-plugin-import@^2.20.1 eslint-plugin-jsx-a11y@^6.2.3 eslint-plugin-react-hooks@^2.5.0 @typescript-eslint/parser@latest -D
 yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

### Styled-components

```console
yarn add styled-components
yarn add @types/styled-components -D
```

### Navigation

```console
yarn add @react-navigation/native
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

Sempre que houver pod install na documentação também rodar yarn android

```console
yarn add @react-navigation/stack
yarn react-native link
```

Importar linha no início de App.js

### Icones

```console
yarn add react-native-vector-icons
```

Realizar instalação em android/app/build.gradle

```console
yarn android
yarn add @types/react-native-vector-icons -D
```

### Unform e Yup

```console
yarn add @unform/core @unform/mobile
yarn add yup
yarn add @types/yup -D
```

### Axios

```console
yarn add axios
```

### Async Storage

```console
yarn add @react-native-community/async-storage
yarn android
```
