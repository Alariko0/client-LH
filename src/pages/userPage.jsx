import { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import TodoListAPI from "../service/todoList.service"


const User = () => {
    const [todoLists, setTodoLists] = useState([])

    useEffect(() => {
        TodoListAPI.getAllTodoList().then((todoList) => {

            setTodoLists(todoList)
        })
    }, [])


    return (
        <div>
            <Container>
                <Row>


                    {todoLists.map((List) => {
                        console.log(List.tasks.room)


                        return (
                            <div key={List._id}>
                                <p><strong>{List.name}</strong></p><br></br>
                                <p><strong>Albañil :<br></br><br></br></strong><input type="checkbox" /> {List.tasks.room.constructionWorker.job?.walls.task}</p><br></br>
                                <p><input type="checkbox" /> {List.tasks.room.constructionWorker.job?.floor.task}</p><br></br>
                                <p><input type="checkbox" /> {List.tasks.room.constructionWorker.job?.ceiling?.task}</p><br></br>
                            </div>

                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default User