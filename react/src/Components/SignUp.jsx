import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TextField, Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom'
import { postUserSignup } from '../Redux/actions'

export default function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const register = useSelector((state) => state.auth.register)


    const handleSignup = () => {
        dispatch(postUserSignup({ name, email, password }))
    }
    return (
        <>
            {register ? <Redirect to="/login" /> :
                <>
                    <h1>SignUp</h1>
                    <form noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(e) => (setName(e.target.value))} />
                        <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e) => (setEmail(e.target.value))} />
                        <TextField id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e) => (setPassword(e.target.value))} />
                    </form>
                    <div><Button variant="contained" onClick={handleSignup}>SignUp</Button></div>
                </>
            }
        </>
    )
}

