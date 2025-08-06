import express from "express";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import passport from "passport";
const auth = express.Router();

auth.use(express.json());

auth.get("/login", (request, response) => {
  try {
    response.status(200).send({
      credential: "email@example.com",
      password: "type-your-password",
    });
  } catch (e) {
    throw e;
  }
});

auth.post("/login", (request, response) => {
  try {
    const credential = request.body.credential;
    const password = request.body.password;

    console.log(credential, password);

    response.status(200).send();
  } catch (e) {
    throw e;
  }
});

auth.get("/signin", (request, response) => {
  try {
    response.status(200).send();
  } catch (e) {
    throw e;
  }
});

/**
 * Rota de login com envio dos dados para autenticação.
 * @param {string} credential - Credential of the user
 * @param {string} password - Password of the user
 */
auth.post("/signin", (request, response) => {
  try {
    const credential = request.body.credential;
    const password = request.body.password;

    response.status(200).send();
  } catch (e) {
    throw e;
  }
});

export default auth;
