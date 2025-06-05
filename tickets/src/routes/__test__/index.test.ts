import request from "supertest";
import { app } from "../../app";

it("can fetch a list of tickets", async () => {
  await request(app).get("/api/tickets").set("Cookie", global.signin()).send({
    title: "Concert Ticket",
    price: 100,
  });

  await request(app).post("/api/tickets").set("Cookie", global.signin()).send({
    title: "Theater Ticket",
    price: 50,
  });

  const response = await request(app)
    .get("/api/tickets")
    .set("Cookie", global.signin())
    .send()
    .expect(200);
  expect(response.body.length).toEqual(2);
});
