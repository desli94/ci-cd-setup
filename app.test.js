const supertest = require("supertest")
const { expect } = require("chai")

const { app } = require("./app")

const request = supertest.agent(app)

describe("Application", () => {
  test("Application responds", () => {
    return request
      .get("/")
      .expect(200)
      .then(res => {
        expect(res.text).to.equal("It's working")
      })
  })
})