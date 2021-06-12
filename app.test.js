const request = require("supertest");
const app = require("./app");

describe("GET /", () => {
  it("responds with json", async () => {
    const response = await request(app)
      .get("/")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual({
      message: "Hello, from CD/CI pipeline, welcome",
    });
  });
});
