import User from "../models/models.js"

class UserRepository {

    static save(){}

    static update(){}

    static getById(id){
        const user = User.findById();

    }

    static getAll(){}

    static delete(){}



}

export default UserRepository