import initAxios from "./initAxios.service"

class TodoListAPI extends initAxios {
    constructor() {
        super('todoList')
    }
    // Cada una de las rutas que vamos a utilizar

    getAllTodoList() {
        return this.axios('/galler').then((response) => response.data, console.log('primera ruta'))
    }


    getOneTodoListById(id) {
        return this.axios.get(`/${id}`).then((response) => response.data);
    }

    createTodoList(body) {
        return this.axios.post(`/`, body).then((response) => response.data);
    }

    updateOneTodoListById(id, body) {
        return this.axios
            .put(`/${id}`, body)
            .then((response) => response.data);
    }

    deleteOneTodoListById(id) {
        return this.axios
            .delete(`/${id}`)
            .then((response) => response.data);
    }

}

export default TodoListAPI