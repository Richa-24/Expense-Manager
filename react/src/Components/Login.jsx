import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TextField, Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { postUserLogin } from '../Redux/actions'

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const isAuth = useSelector((state) => state.auth.isAuth)

    const handleLogin = () => {
        dispatch(postUserLogin({ email, password }))
    }

    return (
        <>
            {isAuth ? <Redirect to="/Dashboard" /> :
                <>
                    <h1>Login</h1>
                    <form noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e) => (setEmail(e.target.value))} />
                        <TextField id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e) => (setPassword(e.target.value))} />
                    </form>
                    <div><Button variant="contained" onClick={handleLogin}>Login</Button></div>
                </>
            }
        </>
    )
}






