# 07/08/2025 - Migrações no Banco de Dados

Dentro do banco de dados, devido às mudanças constantes que estavam 
sendo feitos pois não tinah sido feita uma modelagem prévia à criação 
do projeto, foi necessário ter um conjunto de dados migrados dentro 
do novo banco de dados, de forma que não perdesse essas informações que 
haviam sido criadas anteriormente. Portanto foi visivelmente observado 
a dificuldade de fazer uma migração de dados dentro do sequelize sem o 
prévio conhecimento do `sequelize-cli`, mas posso destrinchar isso por partes...

### Injeções de Dependência e Assincronismos Estáticos

Apesar do Java não ter nada haver diretamente com o Javascript, decidir usar alguns 
conceitos que aprendi enquanto estava desfrutando do SpringBoot, e pude observar de 
perto o funcionamento e tentar entender como as injeções de dependências funcionam dentro
da engenharia de software. Em primeira mão, dá para apenas dizer que é um grande "O problema não é meu..." Você joga a responsabilidade de uma determinada feature funcionar em cima de outro elemento presente do código, em vez dessa feature criar suas próprias necessidades, fazendo com que o problema dessa criação não seja da feature, mas sim da criação dessa dependência em si. Isso ajuda a desacoplar o entendimento da feature da sua depedência, e frameworks justamente como o Spring Boot auxiliam nesse entendimento e 
uso, proporcionando ***annotations*** como o `@Autowired`, que faz isso de forma automática dentro do registrador de componentes do Spring Boot. 

Entretanto, um dos problemas que temos dentro do javascript é que não possuimos uma forma facilitada de fazer isso com o express, então vai ter que ser na unha:

```js
import express from "express";
import { getLogin, postLogin, getSignin, postSignin } from "../controllers/authController.js";

const auth = express.Router();
auth.use(express.json());

auth.get("/login", (request, response) => getLogin(request, response));
auth.post("/login", (request, response) => postLogin(request, response));
auth.get("/signin", (request, response) => getSignin(request, response));
auth.post("/signin", (request, response) => postSignin(request, response));

export default auth;
```

Por Hora nada demais, apenas definimos quais são as rotas que teremos, os métodos que 
cada uma delas é responsável, e a callback function que vai tratar aquela determinada 
requisição. Com isso, podemos partir para dentro dos controladores, de forma que vamos em vias de fato usar os serviços que precisamos. 


```js
import UserService from "../services/userService.js";
async function getSignin(request, response) {	
	try {
		return response.status(200).send(
			{
				name: "Type your name",
				surname: "Type your surname",
				email: "email@example.com",
				password: "type-your-password",
			}
		);
	} catch (e) {
		throw e;
	}
}
async function postSignin(request, response) {
	try {
		const credential = request.body.credential;
		const password = request.body.password;
		const name = request.body.name;
		const surname = request.body.surname;

		if(await UserService.getByEmail(credential)){
			return response.status(400).send({ error: "User already exists" });
		}
		const user = await UserService.save({ name, surname, email: credential, password });

		return response.status(200).send({ "createdUser": user });
	} catch (e) {
		throw e;
	}
}
```
Dentro desse exemplo acima, temos a possibilidade de perceber como o `UserService.getByEmail()` é um método estático, devido ao fato que em nenhum momento ele é instanciado dentro do nosso código, oque é importante pelo fato de que isso modifica a forma como temos que pensar com ele e como devemos trabalhar com ele. Se formos ainda mais fundo, podemos ver como dentro desse serviço, e dentro desse método espécífico, ele é um método assíncrono, assim como o controlador responsável pelas requisições desse método e dessa rota, portanto, ele não trava a thread de execução do runtime do nodejs.
