'use strict'

const Schema = use('Schema')

class CargoSchema extends Schema {
  up () {
    this.create('questions', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string("name")
      table.text("text")
      table.timestamps()

    })
  }

  down () {
    this.drop('questions')
  }
}

module.exports = CargoSchema
