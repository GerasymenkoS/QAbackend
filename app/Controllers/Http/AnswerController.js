'use strict'
const Answer = use("App/Models/Answer")

class AnswerController {
  async index({params}) {
    return await Answer.query().where('question_id', params.question_id).with('user').orderBy('updated_at', 'DESC').fetch()
  }

  async store({auth, params, request}) {
    const {text} = request.all()
    const answer = new Answer
    answer.question_id = params.question_id
    answer.user_id = auth.user.id
    answer.text = text
    await answer.save()
    return {"success": true}

  }

  async show({params}) {
    return await Answer.query().with('user').where('id', params.id).first()
  }
}

module.exports = AnswerController
