import jwt from "jsonwebtoken";

class AuthService {

    AuthService(userRepository){
        this.userRepository = userRepository;
    }

    get(){}



    findById(id){
        try{
            const user = this.userRepository.findById(id);
        } catch(error){
            throw error;
        }
    }

    authenticateToken(){}

    

    generateToken(user){
        const payload = {
            id: user.id,
            email: user.email,
            name: user.name,
        };
        const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1h' });
        return token;
    }




}

export default AuthService;