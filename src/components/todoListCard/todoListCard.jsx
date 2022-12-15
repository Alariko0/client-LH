import { useState } from "react";
import { Link } from "react-router-dom";
import Checkbox from "../checkbox/checkbox"
import todoListAPI from "../../service/todoList.service"
import { Button } from "react-bootstrap";

const TodoListCard = ({ todoListProp, updatePage }) => {
    const [todoList, setTodoList] = useState(todoListProp)

    const deletList = (id) => {
        todoListAPI.deleteOneTodoListById(id).then(() => updatePage())

    }

    const updateList = () => {
        todoListAPI.updateOneTodoListById()
    }


    return (
        <div>
            <p><strong>{todoList.name}</strong></p><br></br><br></br>
            <p><strong>Electricista :<br></br><br></br></strong><Checkbox initialState={todoList.tasks.room.electrician?.completed} /> {todoList.tasks.room.electrician?.job}</p><br></br>
            <p><strong>Fontanero :<br></br><br></br></strong><Checkbox initialState={todoList.tasks.room.plumber?.completed} /> {todoList.tasks.room.plumber?.job}</p><br></br>
            <p><strong>Albañil :<br></br><br></br></strong><Checkbox initialState={todoList.tasks.room.constructionWorker.job?.walls.completed} /> {todoList.tasks.room.constructionWorker.job?.walls.task}</p><br></br>
            <p><Checkbox initialState={todoList.tasks.room.constructionWorker.job?.floor.completed} /> {todoList.tasks.room.constructionWorker.job?.floor.task}</p><br></br>
            <p><Checkbox initialState={todoList.tasks.room.constructionWorker.job?.ceiling.completed} /> {todoList.tasks.room.constructionWorker.job?.ceiling?.task}</p><br></br>

            <Button onClick={() => deletList(todoList._id)} >Eliminar</Button>
            <Button onClick={updateList} >Modificar</Button>
        </div>

    )

}
export default TodoListCard