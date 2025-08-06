import express from "express";
import multer from "multer";
import helmet from "helmet";
import router from "./routes/initRoutes.js";
import bodyParser from "body-parser";
import connectToDatabase from "./config/databaseConfig.js";
import hateoasLinker from "express-hateoas-links";
function launch_app() {
  const PORT = process.env.PORT || 3000;
  const app = express();

  const upload = multer({ dest: "./public/uploads/" });

  // Adding the middlewares
  app.use(express.json());
  app.use(bodyParser.json());
  app.use("/api", router);
  app.use(hateoasLinker);

  // Security Policies
  app.use(helmet());
  app.disable("x-powered-by");

  connectToDatabase();
  app.listen(PORT, () => {
    console.log("App rodando dentro da porta 3000...");
  });
}

launch_app();
