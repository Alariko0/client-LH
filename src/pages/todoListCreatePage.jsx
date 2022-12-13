import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import TodoListAPI from '../service/todoList.service';
import { useNavigate } from 'react-router-dom'

const TodoListCreate = () => {
    const navigate = useNavigate()
    const [todoList, setTodoList] = useState({})

    const createNewTodoList = (event) => {
        event.preventDefault();
        todoList
            .createTodoList(todoList)
            .then(() => {
                navigate('/gallery')
            })
    }

    const updateNewTodoList = (event) => {
        const { name, value } = event.target
        setTodoList({ ...todoList, [name]: value })
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
                        name='-----'
                        placeholder='----'
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlInput2'>
                    <Form.Label>ROOM</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='--------'
                        name='--------'
                        onChange={updateNewTodoList}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlInput3'>
                    <Form.Label>TASKS</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='-------'
                        name='---------'
                        onChange={updateNewTodoList}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>WORKERS</Form.Label>
                    <Form.Control
                        as='textarea'
                        rows={3}
                        name='--------'
                        onChange={updateNewTodoList}
                    />
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Create
                </Button>
            </Form>
        </>
    );
};

export default TodoListCreate