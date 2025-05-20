import mongoose from "mongoose";

async function connectDatabase(mongoUri){
    const connection = mongoose.connect("adicioanrurl", {})
    .then(() => console.log('Conectado ao MongoDB!'))
    .catch(err => console.error('Erro de conexão:', err));
    return connection
}
export default connectDatabase;