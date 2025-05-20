import express from "express";
import userRouter from "./userRoutes.js";
import userService from "../services/userService.js";


const userServiceImpl = new userService();

// Adding the routes to the root
const initRouter = express.Router();
initRouter.use("/users", userRouter);

// Creating routes for global information
initRouter.get("/global_metrics", (request, response) => {
	try{
		return response.status(200).send({"Tentando receber mensagem":true});
	}catch(error){
		return response.status(500).send({"error": error.message});
	}
});




export default initRouter