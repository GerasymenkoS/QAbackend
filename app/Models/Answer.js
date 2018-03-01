'use strict'

const Model = use('Model')

class Answer extends Model {
  user() {
    return this.belongsTo("App/Models/User")
  }
}

module.exports = Answer
