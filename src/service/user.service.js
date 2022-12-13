import InitAxios from './initAxios.service';

class UserAPI extends InitAxios {
    constructor() {
        super('todolist')// colocar ruta 
    }

    me(token) {
        return this.axios.get('', { // ruta del backend
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then((response) => response.data);
    }

    // config --> header --> authorization --> Bearer token
    // axios.get(ruta, config) 
    // axios.delete(ruta, config)
    // axios.post(ruta, body, config)
    // axios.put(ruta, body, config)
}

export default new UserAPI();