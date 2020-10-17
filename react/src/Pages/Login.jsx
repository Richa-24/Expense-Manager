import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TextField, Typography, Button, Box } from '@material-ui/core';
import { postUserLogin } from '../Redux/auth/actions'
import { Redirect, useHistory } from 'react-router-dom'
import Form from '../Components/Form';

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const history = useHistory()
    const { isAuth } = useSelector((state) => state.auth)

    const handleLogin = () => {
        dispatch(postUserLogin({ email, password }))
    }

    if (isAuth) return <Redirect to="/dashboard" />

    return (
        <Form>
            <Typography gutterBottom variant="h3"> Login </Typography>
            <TextField id="outlined-basic" label="Email" type='email' variant="outlined" value={email} onChange={(e) => (setEmail(e.target.value))} />
            <TextField id="outlined-basic" label="Password" type='password' variant="outlined" value={password} onChange={(e) => (setPassword(e.target.value))} />
            <Button variant="contained" color='primary' onClick={handleLogin}>Login</Button>

            <Box borderTop='1px solid #eee' padding='2rem 0' style={{ margin: '2rem 0' }}>
                <Button onClick={() => history.push('/signup')} fullWidth variant='outlined' >
                    Sign up
                </Button>
            </Box>
        </Form>
    );
}



