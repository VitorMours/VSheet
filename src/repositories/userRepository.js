import { type } from "os";
import { User } from "../models/models.js"

class UserRepository {

    static async create(userData){
        const user = await User.create(userData);
        return user;
    }

    update(){}

    findById(id){
        const user = User.findById();

    }

    getAll(){}
    
    static async findByEmail(email){
        try{
            const user = await User.findOne({ where: { email } });
            if(typeof user === "undefined" || user === null) {
                return null;
            }
            return user;
        }catch(error){
            return error;
        }        
    }

    delete(){}



}

export default UserRepository