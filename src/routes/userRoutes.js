import express from "express";
import { getUsers, getUserById } from "../controllers/userControllers.js";

const userRouter = express.Router();


userRouter.get("/", getUsers);
userRouter.get("/:id", getUserById)

export default userRouter;