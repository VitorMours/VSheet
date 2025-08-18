import { createApp } from "../../index.js";
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import request from "supertest";
import { getMockReq, getMockRes } from 'vitest-mock-express';
import  { getLogin , postLogin, getSignin, postSignin } from "../../controllers/authController.js";

let server;
let app;

describe("Auth Route Unit Tests", () => {
    it("200: GET User Login", async () => {

        const { req } = getMockReq();
        const { res } = getMockRes();
        await getLogin(req, res);
        expect(res.statusCode).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith({
            credential: "email@example.com",
            password:"type-your-password",
        });
    });

    it("400: GET User Login with body", async () => {

        const { req } = getMockReq( {body: {credential:"any"}} );
        const { res } = getMockRes();

        await getLogin(req, res);

        expect(res.statusCode).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalledWith({
            error: "Invalid Request",
        });

    });


    it("400: POST User Login error(empty request)", async () => {
        const { req } = getMockReq({});
        const { res } = getMockRes({});
        await postLogin(req, res);
        expect(res.statusCode).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalledWith({
            error: "Invalid Request",
        });
    })
});