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
                    <Form.Label>DIRECCION</Form.Label>
                    <Form.Control
                        onChange={updateNewTodoList}
                        type='text'
                        name='name'
                        placeholder='----'
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                    <Form.Label>ROOM</Form.Label>
                    <Form.Control
                        onChange={updateNewTodoList}
                        type='text'
                        name='room'
                        placeholder='----'
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlInput3'>
                    <Form.Label>FONTANERO</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='-------'
                        name='job'
                        onChange={(e) => updateNewTodoListTask(e, 'plumber')}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlInput3'>
                    <Form.Label>ELECTRICISTA</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='-------'
                        name='job'
                        onChange={(e) => updateNewTodoListTask(e, 'electrician')}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlInput3'>
                    <Form.Label>PAREDES</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='-------'
                        name='task'
                        onChange={(e) => updateNewTodoListConstructionWorker(e, 'walls')}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlInput3'>
                    <Form.Label>SUELO</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='-------'
                        name='task'
                        onChange={(e) => updateNewTodoListConstructionWorker(e, 'floor')}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlInput3'>
                    <Form.Label>TECHO</Form.Label>
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
                    CREAR
                </Button>
            </Form>
        </>
    );
};
export default TodoListCreate