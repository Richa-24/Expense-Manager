import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TextField, Button, Typography, Box } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom'
import { postUserSignup } from '../Redux/auth/actions'
import Form from '../Components/Form';

export default function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const { register } = useSelector((state) => state.auth)

    if (register) return <Redirect to='/login' />

    const handleSignup = () => {
        dispatch(postUserSignup({ name, email, password }))
    }

    return (
        <Form>
            <Typography variant='h3'>
                Signup
            </Typography>
            <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(e) => (setName(e.target.value))} />
            <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e) => (setEmail(e.target.value))} />
            <TextField id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e) => (setPassword(e.target.value))} />
            <Button variant="contained" color='primary' onClick={handleSignup}>SignUp</Button>

            <Box borderTop='1px solid #eee' padding='2rem 0' style={{ margin: '2rem 0' }}>
                <Link to='/login' component={Button} fullWidth variant='outlined' >
                    Login
                </Link>
            </Box>
        </Form>
    )
}

