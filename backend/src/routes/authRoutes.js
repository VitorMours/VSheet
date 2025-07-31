import express from "express";

const router = express.Router();


router.get("/login",  getLogin(request, response));
router.post("/login", (request, response) => {

	try{
		return response.status(200).send();
	}catch(error){

	}
});

router.get("/signin", (request, response) => {
	try{
		return response.status(200).send();
	}catch(error){

	}
});


router.post("/signin", (request, response) => {
	try{
		return response.status(200).send();
	}catch(error){

	}
});
