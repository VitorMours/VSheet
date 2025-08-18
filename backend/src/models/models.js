import { Sequelize } from "sequelize";
import userSchema from "./schemas/userSchema.js";

let User;

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);

async function connectToDatabase() {
  try {
    console.info("Tentando conectar ao banco de dados...");
    await sequelize.authenticate();
    console.info("Conexão com o banco de dados estabelecida com sucesso!");
  } catch (error) {
    console.error(error);
  }
}


async function syncSchemas() {
    sequelize.define("User", userSchema);
    User = sequelize.models.User;
    await sequelize.sync();
    await User.sync();

}


export { User, connectToDatabase, syncSchemas };

