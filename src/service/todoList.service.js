<<<<<<< HEAD
import initAxios from "./initAxios.service"

class TodoListAPI extends initAxios {
=======
import InitAxios from "./initAxios.service"
import axios from "axios"


class TodoListAPI extends InitAxios {
>>>>>>> 8bdca932506f3148530da789013329b3d93a82ca
    constructor() {
        super('todoList')
    }
    // Cada una de las rutas que vamos a utilizar

<<<<<<< HEAD
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
=======
    getAllTodo() {
        return this.axios('/').then((response) => response.data)
>>>>>>> 8bdca932506f3148530da789013329b3d93a82ca
    }

}

export default TodoListAPI