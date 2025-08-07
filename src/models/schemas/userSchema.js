import { DataTypes } from "sequelize";
/** Modelo do Objeto Relacional User
 *
 *  @constructor
 *
 *  @param {uuid} id - Autoincremented uuid to identify the user
 *  @param {string} name - Name of the user
 *  @param {string} email - Email of the user
 *  @param {string} password - Password of the user
 *  @param {string} name - Name of the user
 */




const userSchema = {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  modelName: "User"

};


export default userSchema;