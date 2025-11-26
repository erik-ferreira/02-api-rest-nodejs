import fastify from "fastify"
import crypto from "node:crypto"

import { knex } from "./database.js"

import { env } from "./env/index.js"

const app = fastify()

app.get("/hello", async () => {
  const transactions = knex("transactions").select("*")

  return transactions
})

app.listen({ port: env.PORT }).then(() => {
  console.log(`HTTP server running on http://localhost:${env.PORT}`)
})
