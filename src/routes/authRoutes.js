import express from "express";
import passport from "passport";

import { getLogin, postLogin, getSignin, postSignin } from "../controllers/authController.js";

const auth = express.Router();
auth.use(express.json());

auth.get("/login", (request, response) => getLogin(request, response));
auth.post("/login", (request, response) => postLogin(request, response));
auth.get("/signin", (request, response) => getSignin(request, response));
auth.post("/signin", (request, response) => postSignin(request, response));
auth.get("/protected", passport.authenticate('jwt', { session: false }), (request, response) => { return response.status(200).send({ message: "This is a protected route" }) });
export default auth;