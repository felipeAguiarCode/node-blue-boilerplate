<div align="center">

  <img src="./.github/assets/blue-saiyan-bg.png" alt="Logo" height="200">
  <h1 align="center"><strong>NODE BLUE WEB API</strong></h1>

  <p align="center">
    Um projeto base para criar web-apis com Node, Typescript e Express com mais produtividade.
    <br />
  </p>

</div>

<br />

[![TypeScript version][ts-badge]][typescript-4-5]
[![Node.js version][nodejs-badge]][nodejs]

# Dependências
### dependências de desenvolvimento
- [Typescript][typescript-npm] - Escreva um javascript fortemente tipado e mais previsível
- [Ts-node-dev][ts-node-dev-npm] - Executa e monitra alterações no código Typescript para hot-reload
- [Eslint][eslint-npm] - Crie styleguides para padronizar o seu código
- [Prettier][prettier-npm] - Formatador automático e opinativo de código
- [Jest][jest-npm] - Ferramenta para criar testes

### dependências gerais-
- [Express][express-npm] - Framework para trabalhar com requisições http de maneira minimalista
- [Dotenv][dotenv-npm] - Ferramenta para trabalhar com variáveis de ambiente
- [Cors][cors-npnm] - Gerenciador de permissões de acesso a api

# Como utilizar

### Usando esse repositório como base para seus projetosW

Para usar esse projeto como template click em **[Use this template]**. Implemente seus códigos em `src` e testes unitários em `__tests__`.

### Clonando o repositório

Para clonar esse repositório, use os comandos abaixo:

```sh
git clone https://github.com/felipeAguiarCode/node-blue-boilerplate
cd node-blue-boilerplate
npm install
```

# Scripts disponíveis
- `start:dev` - inicia o código ts com ts-node,
- `start` - inicia o código da build gerada,
- `prebuild` - executa o lint em todos arquivos,
- `build` - compila o typescript e gera uma build em javascript,
- `build:watch` - gera uma build com hot-reload ativado quando houver alterações,
- `lint` - executa lint nos arquivos de extensão typescript,
- `test` - executa cobertura de testes,
- `test:watch"` - executa cobertura com hot-reload quando houver alterações

## Autor

| [<img src="https://avatars3.githubusercontent.com/u/37452836?s=96&v=4"><br><sub>Felipe Aguiar</sub>](https://github.com/felipeAguiarCode) |
| :---: |
|[Linkedin](www.linkedin.com/in/felipe-aguiar-047)|

# Creditos
icons by [Pino Lamanna][dribble-icon]

[typescript]: https://www.typescriptlang.org/
[typescript-4-5]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html
[ts-badge]: https://img.shields.io/badge/TypeScript-4.5-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2016.13-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v16.x/docs/api/
[dribble-icon]: https://dribbble.com/Schakalwal
[eslint-npm]:https://www.npmjs.com/package/eslint
[typescript-npm]:https://www.npmjs.com/package/typescript
[prettier-npm]:https://www.npmjs.com/package/prettier
[ts-node-dev-npm]:https://www.npmjs.com/package/ts-node-dev
[jest-npm]:https://www.npmjs.com/package/jest
[express-npm]:https://www.npmjs.com/package/express
[dotenv-npm]:https://www.npmjs.com/package/dotenv
[cors-npnm]:https://www.npmjs.com/package/cors
