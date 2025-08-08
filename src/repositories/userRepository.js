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
        const user = await User.findOne({ where: { email } });
        return user;
    }

    delete(){}



}

export default UserRepository