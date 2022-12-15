import { useEffect, useState } from "react"
import { Button, Container, Row } from "react-bootstrap"
import TodoListAPI from "../service/todoList.service"
import Checkbox from "../components/checkbox/checkbox"
import TodoListCard from "../components/todoListCard/todoListCard"



const TodoList = () => {
    const [todoLists, setTodoLists] = useState([])

    useEffect(() => {

        TodoListAPI.getAllTodoList().then((todoList) => {

            setTodoLists(todoList)
        })
    }, [])

    const updatePage = () => {
        TodoListAPI.getAllTodoList().then((todoList) => {

            setTodoLists(todoList)
        })
    }

    return (
        <div>
            <Container>
                <Row>
                    {todoLists.map((list) =>
                        <TodoListCard key={list._id} todoListProp={list} updatePage={updatePage} />
                    )}
                </Row>
            </Container>
        </div>
    )
}

export default TodoList