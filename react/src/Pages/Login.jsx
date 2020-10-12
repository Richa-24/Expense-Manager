import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TextField, Typography, Button } from '@material-ui/core';
import { postUserLogin } from '../Redux/auth/actions'
import { Redirect } from 'react-router-dom'
import Form from '../Components/Form';

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const { isAuth } = useSelector((state) => state.auth)

    const handleLogin = () => {
        dispatch(postUserLogin({ email, password }))
    }

    if (isAuth) return <Redirect to="/Dashboard" />

    return (
        <Form>
            <Typography gutterBottom variant="h3" component="h2"> <h4>Login</h4></Typography>
            <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e) => (setEmail(e.target.value))} />
            <TextField id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e) => (setPassword(e.target.value))} />
            <Button variant="contained" color='primary' onClick={handleLogin}>Login</Button>
        </Form>
    );
}



