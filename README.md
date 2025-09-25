# Mini Product Inventory API

A lightweight Node.js/Express API that exposes product inventory details without requiring authentication.
Supports JSON responses and rate limiting  (100 requests per minute).

---

## Features

- **GET /products** — List all products with basic info (Name, price, stock)
- **GET /products/:id** — Get details of a single product by its ID
- **JSON Responses** — All endpoints return JSON.
- **Rate Limiter** — In-built rate-limiter with only 100 requests per minute per IP Address.

## Stack

- Node.js
- Express
- express-rate-limit
- Mocha / Chai / Supertest for testing

## Set-Up

1. **Clone the repo**

```bash
git clone ""
cd mini-api
```

2. **Install Dependencies**

```bash
npm install
```

3. **Run Locally (with Nodemon)**

```bash
npm run dev
```

4. **Run Tests**

```bash
npm test
```

> By default the API starts on http://localhost:5000

## API Endpoints

1. `GET /products`

- Returns a list of all products.

- Response example:
    ```bash
    [
        {
            "id": 1,
            "name": "Apple",
            "price": 100,
            "stock": 10
        },
        {
            "id": 2,
            "name": "Banana",
            "price": 200,
            "stock": 5
        },
        {
            "id": 3,
            "name": "Orange",
            "price": 300,
            "stock": 0
        }
    ]
    ```

2. `GET /products/:id`

- Returns details of a specific product.

- Response example:
    ```bash
    {
        "id": 1,
        "name": "Apple",
        "price": 100,
        "stock": 10
    }
    ```

3. `GET /products/:id`

- when `id` doesn't exist

- Response example:
    ```bash
    {
       "error": "Product not found"
    }
    ```
    with HTTP 404.