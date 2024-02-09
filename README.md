<h1 align="center"> Votação | NLW Expert </h1>

<p align="center">
Votação | NLW Expert é uma aplicação desenvolvida durante a NLW Expert, a primeira NLW da Rocketseat de 2024. O projeto é sistema de gerenciamento de enquetes, onde o usuário pode criar, receber informações, votar e deletar enquetes, assim como receber alterações sobre as enquetes em que votou. <br/>
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rotas">Rotas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rode-local">Rode Local</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-english-version">English Version</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

<p align="center">
  <img alt="Preview" src=".github/preview.png" width="100%">
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- Typescript
- NodeJS
- Prisma
- TSX
- Fastify
- Cookies
- Zod
- IoRedis
- Redis
- SQLite
- Websockets

## 💻 Rotas

## &nbsp;&nbsp;&nbsp;&nbsp;HTTP

#### POST `/polls`

Criar nova enquete.

##### Request

```json
{
  "title": "Qual a melhor linguagem de programação?",
  "options": [
    "JavaScript",
    "Java",
    "PHP",
    "C#"
  ]
}
```

#### Response

```json
{
  "pollId": "194cef63-2ccf-46a3-aad1-aa94b2bc89b0"
}
```

### GET `/polls/:pollId`

Receber informações sobre uma enquete específica.

#### Response

```json
{
	"poll": {
		"id": "e4365599-0205-4429-9808-ea1f94062a5f",
		"title": "Qual a melhor linguagem de programação?",
		"options": [
			{
				"id": "4af3fca1-91dc-4c2d-b6aa-897ad5042c84",
				"title": "JavaScript",
				"score": 1
			},
			{
				"id": "780b8e25-a40e-4301-ab32-77ebf8c79da8",
				"title": "Java",
				"score": 0
			},
			{
				"id": "539fa272-152b-478f-9f53-8472cddb7491",
				"title": "PHP",
				"score": 0
			},
			{
				"id": "ca1d4af3-347a-4d77-b08b-528b181fe80e",
				"title": "C#",
				"score": 0
			}
		]
	}
}
```

### POST `/polls/:pollId/votes`

Votar em uma enquete específica.

#### Request

```json
{
  "pollOptionId": "31cca9dc-15da-44d4-ad7f-12b86610fe98"
}
```

## &nbsp;&nbsp;&nbsp;&nbsp;WebSockets

### ws `/polls/:pollId/results`

#### Mensagem

```json
{
  "pollOptionId": "da9601cc-0b58-4395-8865-113cbdc42089",
  "votes": 2
}
```


## 💻 Rode Local
---
Para rodar o projeto localmente, basta cumprir as seguintes etapas:
```
1. Git clone
2. Git install
3. Npm start 
```

## 🌎 English Version

Polls | NLW Expert is an application developed during the NLW Expert, the first Rocketseat's NLW of 2024. It is a polls management application, where the user can create, get informations, vote and delete polls, as well as get real-time changes of the polls they've voted on. To do that, I've used:
- Typescript, NodeJS, Prisma, TSX, Fastify, Cookies, Zod, IoRedis, Redis, SQLite and Websockets

> You can run locally following these steps:
```
1. Git clone
2. Git install
3. Npm start
```

---
### Desenvolvido por Sarah Schneider 🖖