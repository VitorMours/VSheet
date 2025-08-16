import UserService from "../services/userService.js";
import AuthService from "../services/authService.js";

async function getLogin(request, response) {
  try {
    if (request.body && Object.keys(request.body).length > 0) {
      return response.status(400).send({ error: "Request body not allowed in GET login" });
    }
    return response.status(200).send({
      credential: "email@example.com",
      password: "type-your-password",
    });
  } catch (e) {
    return response.status(e.statusCode).send({ error: e.message });
  }
}

async function postLogin(request, response) {
  try {
    const { credential, password } = request.body;

    // Checa se credenciais foram enviadas
    if (!credential || !password) {
      return response.status(400).send({ error: "Invalid Request" });
    }

    const user = await UserService.getByEmail(credential);
    if (!user) {
      return response.status(404).send({ error: "User not found" });
    }

    const token = await AuthService.generateToken(user);
    return response.status(200).send({ token });
  } catch (e) {
    return response.status(e.statusCode).send({ error: e.message });
  }
}

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


export { getLogin, postLogin, getSignin, postSignin };