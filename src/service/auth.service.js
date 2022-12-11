import InitAxios from './initAxios.service'

class AuthAPI extends InitAxios {
    constructor() {
        super('auth')
    }

    signupUser(body) {
        return this.axios.post('/signup', body).then((response) => response.data)
    }

    loginUser(body) {
        return this.axios.post('/login', body).then((response) => response.data)
    }
}

export default new AuthAPI()