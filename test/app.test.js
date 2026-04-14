const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  it("should return project success message", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Hello from Elevate Labs CI/CD Pipeline Project!");
  });
});
