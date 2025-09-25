import express from "express"
import rateLimit from "express-rate-limit"
import { products } from "./products.js"

const app = express()

const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 100,
    message: { error: "Too many requests, try again later." }
})

app.use(limiter)

app.get("/products", (req, res) => {
    res.json(products)
})

app.get("/products/:id", (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id))

    if (!product) {
        return res.status(404).json({ error: "Product not found" })
    }
    res.json(product)
})

const PORT = 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

export default app