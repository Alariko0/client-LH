import { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import TodoListAPI from "../service/todoList.service"


const TodoList = () => {

    //   const list = [
    //       {
    //           "name": "Obra C/ Vinateros 29",
    //           "tasks": {
    //               "room": {
    //                   "electrician": {
    //                       "job": "Poner 2 enchufes y 5 puntos de luz: 1 para enchufes y el resto para bombillas",
    //                       "completed": false
    //                   },
    //                   "plumber": {
    //                       "job": "5 puntos de agua: Ducha, lavamanos, WC",
    //                       "completed": false
    //                   },
    //                   "constructionWorker": {
    //                       "job": {
    //                           "walls": {
    //                               "task": "Plaquetas de blanco perla 10x10, 5,5 m2",
    //                               "completed": false
    //                           },
    //                           "floor": {
    //                               "task": "Plaquetas de marron sahara 60x15 2.5m2",
    //                               "completed": false
    //                           },
    //                           "ceiling": {
    //                               "task": "Pintura blanca satinada 2.5m2",
    //                               "completed": false
    //                           },
    //                           "completed": false
    //                       },
    //                       "completed": false
    //                   }
    //               }
    //           },
    //           "completed": false
    //       },
    //       {
    //           "name": "Obra C/ Mirasierra 38",
    //           "tasks": {
    //               "room": {
    //                   "electrician": {
    //                       "job": "Poner 8 enchufes y 19 puntos de luz: 1 para enchufes y el resto para bombillas/led",
    //                       "completed": false
    //                   },
    //                   "plumber": {
    //                       "job": "3 Puntos agua caliente: 3 radiadores",
    //                       "completed": false
    //                   },
    //                   "constructionWorker": {
    //                       "job": {
    //                           "walls": {
    //                               "task": "Saneamiento, alineado y terminar a gusto de cliente: 60 m2",
    //                               "completed": false
    //                           },
    //                           "floor": {
    //                               "task": "Tarima flotante caoba Nevada : 58 m2",
    //                               "completed": false
    //                           },
    //                           "ceiling": {
    //                               "task": "Falso techo en pladur(dejar hueco led): 40 m2",
    //                               "completed": false
    //                           },
    //                           "completed": false
    //                       },
    //                       "completed": false
    //                   }
    //               }
    //           },
    //           "completed": false
    //       }
    //   ]

    const [todoLists, setTodoLists] = useState([])

    const todoListAPI = new TodoListAPI()

    useEffect(() => {
        todoListAPI.getAllTodoList().then((TodoList) => {
            console.log(TodoList)
            setTodoLists(TodoList)
        })
    },)


    return (
        <div>
            <Container>
                <Row>

                    {todoLists.map((todoLists) => {
                        return (

                            <div>
                                <p><strong>{todoLists.name}</strong></p><br></br>
                                <p>{todoLists.tasks.room.electrician.job}</p><br></br>
                                <p>{todoLists.tasks.room.plumber.job}</p><br></br>
                                <p>{todoLists.tasks.room.constructionWorker.job.walls.task}</p><br></br>
                                <p>{todoLists.tasks.room.constructionWorker.job.floor.task}</p><br></br>
                                <p>{todoLists.tasks.room.constructionWorker.job.ceiling.task}</p><br></br>t
                            </div>

                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default TodoList