# Sing-me-a-song, recomendação anômina de músicas.


<img src="https://i.imgur.com/jkOnBfR.png" alt="photo of layout bookdem app">


## Sobre:

É uma applicação onde, quanto mais as pessoas curtirem uma recomendação musical, maior a chance dela ser recomendada para outras
pessoas;


## Tecnologias

As seguintes ferramentas e frameworks foram usados na construção do projeto:
 
#### Front-end:
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![StyledComponents](https://img.shields.io/badge/Styled--Components-DB7093?style=flat-square&logo=styled-components&logoColor=white)
![Material UI](https://img.shields.io/badge/Material%20UI-007FFF?style=flat-square&logo=mui&logoColor=white)

#### Back-End:

![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white)
![ExpressJS](https://img.shields.io/badge/Express.js-404D59?style=flat-square&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=flat-square&logo=Prisma&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=ffffff)
![Jest](https://img.shields.io/badge/Jest-C21325?style=flat-square&logo=jest&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-black?style=flat-square&logo=docker)

## Requisitos implementados:
- POST /recommendations
- POST /recommendations/:id/upvote
- POST /recommendations/:id/downvote
- GET /recommendations
- GET /recommendations/:id
- GET /recommendations/random
- GET /recommendations/top/:amount
- Teste E2E
- Testes unitarios da service
- Boas praticas

## Modo do desenvolvedor:
Para executar isso no modo dev, você deve usar o ambiente React.

Então você tem que:

 ### Clonar esse repositório:

$ git clone git@github.com:venyustech/sing-me-a-song.git

 ### Instalar as dependencias no front-end e back-end:

$ npm install

### Rodar na sua máquina o front-end:

$ npm run start

### Rodar na sua máquina o back-end:

$ npm run dev
