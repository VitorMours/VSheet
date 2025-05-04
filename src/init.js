import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
// Importing routes
import userRouter from "./routes/userRoutes.js";

const app = express(); 
const PORT = process.env.PORT || 3000;

// Adding standard middlewares 
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

// Adding routes middlewares
app.use("/users", userRouter);

app.listen(PORT, (request, response) => {
    console.info(`Running the server in the port ${PORT}`);
    console.log("\n ====================== Logging the request ======================");
});