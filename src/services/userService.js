
class UserService {

    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    static save(user){
        try {
            const savedUser = this.userRepository.create(user);
            return savedUser;
        } catch (error) {
            throw error;
        }
    }

    static getById(id) {
        try{
            const user = this.userRepository.findByPk(id);
            return user;
        }catch(error){
            throw error;
        }
    }
    static getAll() {
        try{
            const users = this.userRepository.findAll();
            return users;
        }catch(error){
            throw error;
        }
    }

    static getByEmail(email) {
        try{
            const user = this.userRepository.findOne({ where: { email: email } });
            return user;
        }catch(error){
            throw error;
        }
    }
}


export default UserService;