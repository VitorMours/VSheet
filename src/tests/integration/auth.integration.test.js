import request from "supertest";
import { createApp } from "../../index.js";
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
let server;
let app;

beforeAll(async () => {
  app = await createApp(); // createApp deve retornar o app do Express
  server = app.listen(3001);
});

afterAll(async () => {
  await new Promise((resolve) => server.close(resolve));
});

describe("Auth Routes Tests", () => {

  it("GET login route: /auth/login", async () => {
    const response = await request(server).get("/api/auth/login");
    expect(response.headers["content-type"]).toContain("application/json");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("credential");
    expect(response.body).toHaveProperty("password");
  });

  it("GET signin route: /auth/signin", async () => {
    const response = await request(server).get("/api/auth/signin");
    expect(response.headers["content-type"]).toContain("application/json");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("email", "email@example.com");
    expect(response.body).toHaveProperty("password", "type-your-password");
    expect(response.body).toHaveProperty("name", "Type your name");
    expect(response.body).toHaveProperty("surname", "type your surname").assert ;
  });

});
