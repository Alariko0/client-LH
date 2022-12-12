import axios from "axios"

class TodoListAPI {
    constructor() {
        this.axios = axios.create({
            baseURL: 'http://localhost:5005/todolist'
        })
    }
    // Cada una de las rutas que vamos a utilizar

    getAllTodo() {
        return this.axios('/').then((response) => response.data)
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