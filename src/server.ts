import fastify from "fastify"

import { transactionsRoutes } from "./routes/transactions.js"

import { env } from "./env/index.js"

const app = fastify()

app.register(transactionsRoutes, { prefix: "transactions" })

app.listen({ port: env.PORT }).then(() => {
  console.log(`HTTP server running on http://localhost:${env.PORT}`)
})
