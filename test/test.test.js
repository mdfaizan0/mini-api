import request from "supertest"
import { expect } from "chai"
import app from "../server.js"

describe("Product API", () => {
    it("GET /products should all products", async () => {
        const res = await request(app).get("/products")
        expect(res.status).to.equal(200)
        expect(res.body).to.be.an("array")
    })

    it("GET /products/:id should return a single product", async () => {
        const res = await request(app).get("/products/1")
        expect(res.status).to.equal(200)
        expect(res.body).to.have.property("id", 1)
    })

    it("GET /products/:id should return 404 with invalid id", async () => {
        const res = await request(app).get("/products/999")
        expect(res.status).to.equal(404)
    })
})