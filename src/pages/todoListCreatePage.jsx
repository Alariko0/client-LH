import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import todoListApi from '../service/todoList.service'
import { useNavigate } from 'react-router-dom'
const TodoListCreate = () => {
    const navigate = useNavigate()
    const [todoList, setTodoList] = useState({ tasks: { room: { constructionWorker: { job: {} } } } })
    const createNewTodoList = (event) => {
        event.preventDefault();
        todoListApi
            .createTodoList(todoList)
            .then(() => {
                navigate('/lists')
            })
    }
    const updateNewTodoList = (event) => {
        const { name, value } = event.target
        setTodoList({ ...todoList, [name]: value })
    }

    const updateNewTodoListTask = (event, target) => {
        const { name, value } = event.target
        const _todoList = JSON.parse(JSON.stringify(todoList));
        _todoList.tasks.room[target] = { ..._todoList.tasks.room[target], [name]: value }
        console.log(_todoList);
        setTodoList(_todoList);
    }

    const updateNewTodoListConstructionWorker = (event, target) => {
        const { name, value } = event.target
        const _todoList = JSON.parse(JSON.stringify(todoList));
        _todoList.tasks.room.constructionWorker.job[target] = { ..._todoList.tasks.room.constructionWorker.job[target], [name]: value }
        console.log(_todoList);
        setTodoList(_todoList);
    }




    return (
        <>
            <div style={{ marginTop: '60px' }}></div>
            <Form onSubmit={createNewTodoList}>
                <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                    <Form.Label>NAME</Form.Label>
                    <Form.Control
                        onChange={updateNewTodoList}
                        type='text'
                        name='name'
                        placeholder='----'
                    />
                </Form.Group>
                <Form.Select aria-label="Default select example">
                    <option>Rooms</option>
                    <option value="1">Electrician</option>
                    <option value="2">Plumber</option>
                    <option value="3">Construction Worker</option>
                </Form.Select>
                {/* {<Form.Group className='mb-3' controlId='exampleForm.ControlInput2'>
                    <Form.Label>ROOM</Form.Label>
                    <Form.Control
                        select
                        type='text'
                        placeholder='--------'
                        name='--------'
                        onChange={updateNewTodoList}
                    />
                </Form.Group>} */}
                <Form.Group className='mb-3' controlId='exampleForm.ControlInput3'>
                    <Form.Label>PLUMBER</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='-------'
                        name='job'
                        onChange={(e) => updateNewTodoListTask(e, 'plumber')}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlInput3'>
                    <Form.Label>ELECTRICIAN</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='-------'
                        name='job'
                        onChange={(e) => updateNewTodoListTask(e, 'electrician')}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlInput3'>
                    <Form.Label>WALLS</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='-------'
                        name='task'
                        onChange={(e) => updateNewTodoListConstructionWorker(e, 'walls')}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlInput3'>
                    <Form.Label>FLOOR</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='-------'
                        name='task'
                        onChange={(e) => updateNewTodoListConstructionWorker(e, 'floor')}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlInput3'>
                    <Form.Label>CEILING</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='-------'
                        name='task'
                        onChange={(e) => updateNewTodoListConstructionWorker(e, 'ceiling')}
                    />
                </Form.Group>
                {/* <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>WORKERS</Form.Label>
                    <Form.Control
                        as='textarea'
                        rows={3}
                        name='--------'
                        onChange={updateNewTodoList}
                    />
                </Form.Group> */}
                <Button variant='primary' type='submit'>
                    Create
                </Button>
            </Form>
        </>
    );
};
export default TodoListCreate