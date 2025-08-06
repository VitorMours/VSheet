import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: process.env.DATABASE_DIALECT || "sqlite",
  storage: process.env.DATABASE_STORAGE || "./instance/database.sqlite",
});

async function connectToDatabase() {
  try {
    console.info("Tentando conectar ao banco de dados...");
    await sequelize.authenticate();
    console.info("Conexão com o banco de dados estabelecida com sucesso!");
  } catch (error) {
    console.error(error);
  }
}

export default connectToDatabase;
