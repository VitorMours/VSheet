import express from "express";
import AuthController from "../controllers/authController.js";
import UserRepository from "../repositories/userRepository.js";
import UserService from "../services/userService.js";
import AuthService from "../services/authService.js";

const auth = express.Router();

// Criando as injeções de dependência
const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const authService = new AuthService(userRepository);

const authController = new AuthController(authService, userService);



auth.use(express.json());

auth.get("/login", authController.getLogin);
auth.post("/login", authController.postLogin);
auth.get("/signin", authController.getSignin);
auth.post("/signin", authController.postSignin);

export default auth;