import type { Knex } from "knex"

// O que a migration vai fazer, criar a tabela, adicionar um campo e etc
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("transactions", (table) => {
    table.uuid("id").primary()
    table.text("title").notNullable()
    table.decimal("amount", 10, 2).notNullable()
    table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable()
  })
}

// O que a migration vai desfazer, deletar a tabela, remover o campo e etc
export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("transactions")
}
