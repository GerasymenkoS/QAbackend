'use strict'

const Schema = use('Schema')

class AnswerSchema extends Schema {
  up() {
    this.create('answers', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('question_id').unsigned().references('id').inTable('questions')
      table.text("text")
      table.timestamps()
    })
  }

  down() {
    this.drop('answers')
  }
}

module.exports = AnswerSchema
