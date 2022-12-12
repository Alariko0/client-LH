import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import authApi from '../service/auth.service'

const Signup = () => {
    const [newUser, setNewUser] = useState({})

    const onChangeNewUser = (event) => {
        const { name, value } = event.target
        setNewUser({ ...newUser, [name]: value })
    }

    const createNewUser = (event) => {
        event.preventDefault()
        authApi.signupUser(newUser).then((res) => {
            console.log(res)
        })
    }

    return (
        <div style={{ margin: '60px' }}>
            <Form onSubmit={createNewUser}>
                <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        onChange={onChangeNewUser}
                        type='name'
                        placeholder='Name'
                        name='name'
                        value={newUser.name}
                        required
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        onChange={onChangeNewUser}
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={newUser.email}
                        required
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlInput2'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Password'
                        onChange={onChangeNewUser}
                        name='password'
                        value={newUser.password}
                        required
                    />
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Signup
                </Button>
            </Form>
        </div>
    )
}

export default Signup