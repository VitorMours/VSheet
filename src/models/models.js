import { Sequelize } from "sequelize";
import userSchema from "./schemas/userSchema.js";

const sequelize = new Sequelize({
  dialect: process.env.DATABASE_DIALECT || "sqlite",
  storage: process.env.DATABASE_STORAGE || "./instance/database.sqlite",
});

async function connectToDatabase() {
  try {
    console.info("Tentando conectar ao banco de dados...");
    await sequelize.authenticate();
    console.info("Criando tabelas dentro do banco de dados...");
    await syncSchemas()
    
    console.info("Conexão com o banco de dados estabelecida com sucesso!");
  } catch (error) {
    console.error(error);
  }
}

async function syncSchemas() {
    sequelize.define("User", userSchema);
    const User = sequelize.models.User;
    User.sync();
}







export default connectToDatabase;
