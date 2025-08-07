
class AuthController {

	constructor(authService, userService){
		this.authService = authService;
		this.userService = userService;
	}

	getLogin(request, response) {
		try {
			return response.status(200).send(
				{
					credential: "email@example.com",
					password: "type-your-password",
				});
		} catch (e) {
			throw e;
		}
	}

	postLogin(request, response) {
		try {
			const credential = request.body.credential;
			const password = request.body.password;
			const user = this.userService.getByEmail(credential);

			if (!user) {
				return response.status(404).send({ error: "User not found" });
			}

			return response.status(200).send();

		} catch (e) {
			throw e;
		}
	}

	getSignin(request, response) {
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

	postSignin(request, response) {
		try {
			const credential = request.body.credential;
			const password = request.body.password;
			const name = request.body.name;
			const surname = request.body.surname;

			const user = this.userService.save({ email: credential, password: password, name: name, surname: surname });

			return response.status(200).send({ "createdUser": user });
		} catch (e) {
			throw e;
		}
	}
}

export default AuthController;