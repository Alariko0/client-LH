import { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import authApi from '../service/auth.service'
import { AuthContext } from '../context/auth.context'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const { storeSetToken, authentication, setIsLoading } = useContext(AuthContext)

    const onChangeUser = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
        console.log(user)
    }

    const LoginUser = (event) => {
        event.preventDefault()
        authApi.loginUser(user).then((res) => {
            storeSetToken(res.token)
            setIsLoading(true)
            authentication()
            navigate('/me')

        })
    }

    return (
        <div style={{ margin: '60px' }}>
            <Form onSubmit={LoginUser}>
                <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        onChange={onChangeUser}
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={user.email}
                        required
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlInput2'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Password'
                        onChange={onChangeUser}
                        name='password'
                        value={user.password}
                        required
                    />
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default Login