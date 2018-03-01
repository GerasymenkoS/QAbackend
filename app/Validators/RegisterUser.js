module.exports = class RegisterUser {
    get rules() {
        return {
            first_name: 'required',
            last_name: 'required',
            phone: 'required|unique:users',
            email: 'required|email|unique:users',
            password: 'required'
        }
    }
}
