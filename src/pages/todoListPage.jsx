import { useEffect, useState } from "react"
import { Button, Container, Row } from "react-bootstrap"
import TodoListAPI from "../service/todoList.service"



const TodoList = () => {
    const [todoLists, setTodoLists] = useState([])

    useEffect(() => {

        TodoListAPI.getAllTodoList().then((todoList) => {

            setTodoLists(todoList)
        })
    }, [])

    const deletList = (id) => {
        TodoListAPI.deleteOneTodoListById(id).then(() => updatePage())

    }

    const updatePage = () => {
        TodoListAPI.getAllTodoList().then((todoList) => {

            setTodoLists(todoList)
        })
    }

    const updateList = () => {
        TodoListAPI.updateOneTodoListById()
    }



    return (
        <div>
            <Container>
                <Row>

                    {todoLists.map((List) => {
                        return (

                            <div key={List._id}>
                                <p><strong>{List.name}</strong></p><br></br><br></br>
                                <p><strong>Electricista :<br></br><br></br></strong><input type="checkbox" /> {List.tasks.room.electrician?.job}</p><br></br>
                                <p><strong>Fontanero :<br></br><br></br></strong><input type="checkbox" /> {List.tasks.room.plumber?.job}</p><br></br>
                                <p><strong>Albañil :<br></br><br></br></strong><input type="checkbox" /> {List.tasks.room.constructionWorker.job?.walls.task}</p><br></br>
                                <p><input type="checkbox" /> {List.tasks.room.constructionWorker.job?.floor.task}</p><br></br>
                                <p><input type="checkbox" /> {List.tasks.room.constructionWorker.job?.ceiling?.task}</p><br></br>

                                <Button onClick={() => deletList(List._id)} >Eliminar</Button>
                                <Button onClick={updateList} >Modificar</Button>
                            </div>

                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default TodoList