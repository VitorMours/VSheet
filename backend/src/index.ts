import express, { type Express, type Response, type Request }  from "express";

const PORT: number = parseInt(process.env.PORT || '3000', 10);

function launchServer() {

    const app: Express = express();

    app.use(express.json());


    app.listen(PORT, () => {
        console.log(`Listening the server in the port: ${PORT}`);
    })
}

launchServer();


export default launchServer;