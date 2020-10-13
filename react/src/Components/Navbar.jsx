import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography, Toolbar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        position: 'sticky',
        top: 0
    }
}))

export default function Navbar() {
    const classes = useStyles();
    return (
        <AppBar position="fixed" className={classes.root}>
            <Toolbar>
                <Typography variant="h6" noWrap>
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign Up</Link>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}