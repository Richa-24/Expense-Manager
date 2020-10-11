import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Typography, Button, Card, CardActions } from '@material-ui/core';
import { postUserLogin } from '../Redux/auth/actions'
import { Redirect } from 'react-router-dom'
import swal from 'sweetalert'

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        margin: '2rem auto',
        display: 'flex',
        flexDirection: 'column'
    },
});

export default function Login() {
    const classes = useStyles();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const isAuth = useSelector((state) => state.auth.isAuth)

    const handleLogin = () => {
        dispatch(postUserLogin({ email, password }))
        swal("Congratulations!", "Login Successfull", "success")
    }

    return (
        <>
            {isAuth ? (<Redirect to="/Dashboard" />) : (

                <Card className={classes.root}>

                    <Typography gutterBottom variant="h3" component="h2"> <h4>Login</h4></Typography>

                    <CardActions>

                        <form noValidate autoComplete="off">
                            <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e) => (setEmail(e.target.value))} />
                            <TextField id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e) => (setPassword(e.target.value))} />
                            <div><Button variant="contained" onClick={handleLogin}>Login</Button></div>
                        </form>

                    </CardActions>
                </Card>

            )}
        </>
    );
}



