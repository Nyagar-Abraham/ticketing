import request from "supertest";
import { app } from "../../app";

it("fail when email does not exist", async () => {
  await request(app)
    .post("/api/users/signin")
    .send({
      email: "email@gmail.com",
      password: "password",
    })
    .expect(400);
});

it("fail when password is incorrect", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "email@gmail.com",
      password: "password",
    })
    .expect(201);

  await request(app)
    .post("/api/users/signin")
    .send({
      email: "email@gmail.com",
      password: "passwod",
    })
    .expect(400);
});

// it("sets a cookie after successful signup", async () => {
//   const response = await request(app)
//     .post("/api/users/signup")
//     .send({
//       email: "abraham3@gmail.com",
//       password: "password",
//     })
//     .expect(201);
//   expect(response.get("Set-Cookie")).toBeDefined();
// });
