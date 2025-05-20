import User from "../models/userModel.js";

export async function getUsers(request, response){
    try{
        const users = await User.find();
        return response.status(200).send({"users": users});
    }catch(error){
        console.error("Erro na busca dos usuarios:" + error);
    }
}
export async function countUsers(request, response){
    try{
        const userQuantity = await User.count();
        return response.status(200).send({"user_quantity":userQuantity});
    }catch(error){
        console.error(error);
    }
}

export async function getUserById(request, response){
    try{
        const id = request.param.id;
        const user = await User.findById(id);
        return response.status(200).send({"user": user});
    }catch(error){
        console.error("Erro na busca de usario indexado" + error)
    }
}

async function postUser(request, response){
    try{
        console.log("true");
    }catch(error){
        console.log("true");
    }
}
