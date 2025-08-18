import UserRepository from "../repositories/userRepository.js";

class UserService {

    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    static async save(user){
        try {
            const savedUser = await UserRepository.create(user);
            return savedUser;
        } catch (error) {
            throw error;
        }
    }

    static async getById(id) {
        try{
            const user = await UserRepository.findByPk(id);
            return user;
        }catch(error){
            throw error;
        }
    }
    
    static async getAll() {
        try{
            const users = await UserRepository.findAll();
            return users;
        }catch(error){
            throw error;
        }
    }

    static async getByEmail(email) {
        try{
            const user = await UserRepository.findByEmail(email);
            if(!user) {
                return null;
            }            
            return user;
        }catch(error){
            return { "error": error.message };
        }
    }
}


export default UserService;