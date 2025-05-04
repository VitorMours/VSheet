import User from "../models/userModel.js";

async function getUsers(request, response){
    try{
        const users = await User.find();
        return users;
    }catch(error){
        console.error("Erro na busca dos usuarios:" + error);
    }
}

export default getUsers;