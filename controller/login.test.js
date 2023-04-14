const express = require("express");
const request = require("supertest");

const login = require("./userController");

const app = express();

app.get("/login", login);

describe("test login controller", () => {
    // beforAll(() => app.listen(3000));9
    // afterAll(() => app.close());

    test("login return status", async () => {
        const response = await request(app).get("/login");
        // console.log(response.status);
        expect(response.status).toBe(200);
    });
})