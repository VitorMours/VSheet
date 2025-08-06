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

import { sequelize, DataTypes } from "sequelize";

const User = sequelize.define("User", {
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
});
