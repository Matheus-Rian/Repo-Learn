# Setup

1. Criaremos um novo projeto no vscode;
2. Após isso iremos criar duas pastas: packages > tokens.
3. Entraremos na pasta tokens e lançamos um "npm init -y"
4. Dentro deste package gerado mudar a chave "name" para name: "@nome_da_org/tokens"
5. criar uma pasta 'src' e adicionar seus arquivos de tokens (colors.ts, fontsFamily, fontsWeights e etc...)
6. Em seguida, criar um arquivo index.ts para fazer as importações de todos os tokens;
```ts
// packages > tokens > src > colors.ts

export const colors = {
  white: '#FFF',
  black: '#000',

  gray100: '#E1E1E6',
  gray200: '#A9A9B2',
  gray400: '#7C7C8A',
  gray500: '#505059',
  gray600: '#323238',
  gray700: '#29292E',
  gray800: '#202024',
  gray900: '#121214',

  ignite300: '#00B37E',
  ignite500: '#00875F',
  ignite700: '#015F43',
  ignite900: '#00291D',
}


// packages > tokens > src > index.ts

export * from './colors'

```

7. No package do tokens, iremos add o typescript (npm i -D typescript), em seguida "npx tsc --init"
8. Iremos instalar o [tsup](https://github.com/egoist/tsup), lançando o comando "npm i -D tsup" (Ferramenta para fazer a conversão de TS -> JS ou ECMA) 
9. Após a instalação do tsup iremos adicionar dois scripts

```JSON
{
  // ...
  "scripts": {
    "build": "tsup src/index.ts --format em,cjs --dts",
    "dev": "tsup src/index.ts --format em,cjs --dts --watch"
  },
  // ...
}
```