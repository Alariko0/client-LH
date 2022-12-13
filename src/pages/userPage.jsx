import { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import TodoListAPI from "../service/todoList.service"


const User = () => {



    const [todoLists, setTodoLists] = useState([])

    const todoListAPI = new TodoListAPI()

    useEffect(() => {
        todoListAPI.getAllTodoList().then((todoList) => {
            console.log(todoList)
            setTodoLists(todoList)
        })
    }, [])


    return (
        <div>
            <Container>
                <Row>

                    {todoLists.map((todoLists) => {
                        return (

                            <div key={todoLists._id}>
                                <p><strong>{todoLists.name}</strong></p><br></br>

                                <p>{todoLists.tasks.room.constructionWorker.job.walls.task}</p><br></br>
                                <p>{todoLists.tasks.room.constructionWorker.job.floor.task}</p><br></br>
                                <p>{todoLists.tasks.room.constructionWorker.job.ceiling.task}</p><br></br>
                            </div>

                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default User