'use strict'

const User = use("App/Models/User")
const RegisterUser = use("App/Validators/RegisterUser")
const {validateAll} = use('Validator')

class UserController {

    async login({request, auth}) {
        const {email, password} = request.all()

        return auth.withRefreshToken().attempt(email, password, true)
    }

    async register({request, auth}) {

        const {first_name, last_name, email, password, phone} = request.all()

        const user = new User()
        user.first_name = first_name
        user.last_name = last_name
        user.email = email
        user.phone = phone
        user.password = password
        await user.save()

        return auth.withRefreshToken().generate(user, true)

    }

    async user({auth}) {

        return auth.getUser()
    }


}

module.exports = UserController
