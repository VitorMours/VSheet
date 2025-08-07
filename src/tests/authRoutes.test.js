describe("Auth Routes Tests", () => {

    it("GET login route: /auth/login", async () => {
        const response = await fetch("http://localhost:3000/api/auth/login");
        expect(response.status).toBe(200);
        const data = await response.json();
        expect(data).toHaveProperty("credential");
        expect(data).toHaveProperty("password");
    })
    it("GET signin route: /auth/signin", async () => {
        const response = await fetch("http://localhost:3000/api/auth/signin");
        expect(response.status).toBe(200);
    })
});