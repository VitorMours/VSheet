import express from "express";
import multer from "multer";
import helmet from "helmet";
import router from "./routes/initRoutes.js";
import bodyParser from "body-parser";
import { connectToDatabase, syncSchemas } from "./models/models.js";
import passport from "./config/authConfig.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

function createApp() {
  const app = express();
  const upload = multer({ dest: "./public/uploads/" });


  // Adding the middlewares
  app.use(cors({
        origin: 'http://localhost:5173',
        methods: ["GET","POST"]
      }));
  app.use(express.json());
  app.use(bodyParser.json());
  app.use("/api", router);

  app.use(helmet());
  app.use(passport.initialize());
  
  app.disable("x-powered-by");

  connectToDatabase();
  syncSchemas();

  app.use("/public/uploads", express.static("public/uploads"));
  return app;
}

function launchApp() {
  const app = createApp();
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log("App rodando dentro da porta 3000...");
  });
}

export { createApp };
launchApp();
