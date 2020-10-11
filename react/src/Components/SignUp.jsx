import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TextField, Typography, Card, CardActions, Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom'
import { postUserSignup } from '../Redux/actions'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        marginLeft: 550,
        marginTop: 150
    },
});

export default function SignUp() {
    const classes = useStyles();
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
            {register ? (<Redirect to="/login" />) : (

                <>
                    <Card className={classes.root}>
                        <Typography gutterBottom variant="h3" component="h2"> <h4>SignUp</h4></Typography>

                        <CardActions>
                            <form noValidate autoComplete="off">
                                <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(e) => (setName(e.target.value))} />
                                <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e) => (setEmail(e.target.value))} />
                                <TextField id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e) => (setPassword(e.target.value))} />
                                <div><Button variant="contained" onClick={handleSignup}>SignUp</Button></div>
                            </form>
                        </CardActions>
                    </Card>
                </>
            )
            }
        </>
    )
}

