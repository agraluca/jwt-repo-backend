<h3 align="center">
  JWT Repo with NodeJS
</h3>

<p align="center">
  <a href="https://www.linkedin.com/in/agra-luca/"><img alt="Feito por" src="https://img.shields.io/badge/feito%20por-Luca%20Agra-%2315C3"></a>
  <img alt="Tamanho do repo" src="https://img.shields.io/github/repo-size/agraluca/jwt-repo-backend?color=15C3D6%22">
  <a href="https://github.com/agraluca/jwt-repo-backend/commits/main"><img alt="Último commit GitHub" src="https://img.shields.io/github/last-commit/agraluca/jwt-repo-backend?color=15C3D6"></a>
</p>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-começando">Começando</a>&nbsp;&nbsp;&nbsp;
</p>

## :bulb: Sobre o projeto

Esse projeto foi desenvolvido por questões de estudo.

Nesse projeto utilizei o NodeJS para implementar um sistema de registro, login utilizando o JWT.

O intuito dele foi criar um usuário, poder efetuar o login do mesmo e passar um JWT caso tudo ocorresse corretamente. Com isso também criei um sistema de rotas privadas utilizando um middleware que checa se o JWT esta correto.

Utilizei o MongoDB para salvar dados do usuário e utilizei o Bcrypt para fazer o encrypt de senha. Além disso utilize um salt para tornar o hash ainda mais seguro.

Montei uma estrutura de projeto simples com NodeJS, Express, Mongoose, BCrypt, JsonWebToken, Cors e Dotenv.

## 🚀 Tecnologias

Technologias que eu utilizei desenvolvendo essa aplicação:

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Mongoose](https://mongoosejs.com/)
- [BCrypt](https://www.npmjs.com/package/bcrypt)
- [JWT](https://jwt.io/)
- [Cors](https://www.npmjs.com/package/cors)
- [Dotenv](https://www.npmjs.com/package/dotenv)

## 💻 Começando

Para começar precisamos instalar algumas coisas

### Requerimentos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/)

```bash
$ git clone https://github.com/agraluca/jwt-repo-backend.git && cd jwt-repo-backend
```

**Siga esses passos**

### Web

```bash
# Instale as dependências
$ yarn

// Crie um arquivo .env igual ao .env.example e preencha com os valores do seu MongoDB e crie um SECRET aleatório (pode utilizar um gerador de hash aleatório)

$ yarn start

// Por fim, basta usar o Postman ou o Insomnia para testar as rotas (olhar arquivo dentro da pasta routes para ver as rotas)
```

---

Feito com amor 💙&nbsp; por Luca Agra 👋 &nbsp;[Veja meu linkedin](https://www.linkedin.com/in/agra-luca/)
