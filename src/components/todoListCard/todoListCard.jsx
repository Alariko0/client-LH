import { useState } from "react";
import Checkbox from "../checkbox/checkbox"
import todoListAPI from "../../service/todoList.service"
import { Button } from "react-bootstrap";
const TodoListCard = ({ todoListProp, updatePage }) => {
    const [todoList, setTodoList] = useState(todoListProp)
    const deletList = (id) => {
        todoListAPI.deleteOneTodoListById(id).then(() => updatePage())
    }
    const updateList = () => {
        todoListAPI
            .updateOneTodoListById(todoList._id, todoList)
            .then(() => {
                console.log('Updated')
                updatePage()
            })
            .catch(err => console.log(err))

    }

    console.log('TodoList-----------------', todoList)



    return (
        <div>
            <p><strong>{todoList.name}</strong></p><br></br><br></br>
            <p><strong>Electricista :<br></br><br></br></strong><Checkbox setTodoList={setTodoList} initialState={todoList.tasks.room.electrician?.completed} worker={'electrician'} /> {todoList.tasks.room.electrician?.job}</p><br></br>
            <p><strong>Fontanero :<br></br><br></br></strong><Checkbox setTodoList={setTodoList} initialState={todoList.tasks.room.plumber?.completed} worker={'plumber'} /> {todoList.tasks.room.plumber?.job}</p><br></br>
            <p><strong>Albañil :<br></br><br></br></strong><Checkbox setTodoList={setTodoList} initialState={todoList.tasks.room.constructionWorker.job?.walls.completed} worker={'constructionWorker'} subwork={'walls'} /> {todoList.tasks.room.constructionWorker.job?.walls.task}</p><br></br>
            <p><Checkbox setTodoList={setTodoList} initialState={todoList.tasks.room.constructionWorker.job?.floor.completed} worker={'constructionWorker'} subwork={'floor'} /> {todoList.tasks.room.constructionWorker.job?.floor.task}</p><br></br>
            <p><Checkbox setTodoList={setTodoList} initialState={todoList.tasks.room.constructionWorker.job?.ceiling.completed} worker={'constructionWorker'} subwork={'ceiling'} /> {todoList.tasks.room.constructionWorker.job?.ceiling?.task}</p><br></br>
            <Button onClick={() => deletList(todoList._id)} >Eliminar</Button>
            {/* <Button onClick={updateList} >Modificar</Button> */}
            <Button onClick={updateList} >Actualizar</Button>
        </div>
    )
}
export default TodoListCard