import InitAxios from "./initAxios.service"
import axios from "axios"


class TodoListAPI extends InitAxios {
    constructor() {
        this.axios = axios.create({
            baseURL: 'http://localhost:5005/todolist'
        })
    }
    // Cada una de las rutas que vmos a utilizar

    getAllTodo() {
        return this.axios('/').then((response) => response.data)
    }

}

export default TodoListAPI