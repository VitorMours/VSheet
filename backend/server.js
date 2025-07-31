import express from "express";
import multer from "multer";
import helmet from "helmet";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.listen(PORT, () => {
	console.log("Escutando o servidor dentro da porta 3000...");
});