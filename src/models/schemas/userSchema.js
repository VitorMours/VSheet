import { notDeepEqual } from "assert";
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
      isAlpha: true
    },
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true, 
      isAlpha: true, 
    },
    length: {
      min: 2, 
      max: 50 
    }
  },
  
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
      isEmail: true
    },
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isStrongPassword(value) {
        const regexPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,32}$/;
        if (!regexPattern.test(value)) {
          throw new Error( `Password must be between 6 and 32 characters long, 
                            contain at least one uppercase letter, one lowercase letter, one number, 
                            and one special character.`);
        }
      }
    },
    
    length: {
      min: 6,
      max: 32
    }
  },
};


export default userSchema;