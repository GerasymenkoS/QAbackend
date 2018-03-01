'use strict'
const Question = use("App/Models/Question")

class QuestionController {
  async index({request}) {
    return await Question.query().with('answers').with('user').orderBy('updated_at', 'DESC').fetch()
  }

  async store({request, auth}) {

    const {name, text} = request.all()

    const question = new Question()
    question.name = name
    question.text = text
    question.user_id = auth.user.id
    await question.save()

    return question.id

  }

  async show({auth, params}) {
    return await Question.query().with('answers.user').with('user').where('id', params.id).first()
  }
}

module.exports = QuestionController
