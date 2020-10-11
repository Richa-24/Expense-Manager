import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography, Toolbar, CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    // maxWidth: 400,
    // marginLeft: 550,
    // marginTop: 150

}))

export default function Navbar() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6" noWrap>
                            <Link to="/">Home</Link>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Sign Up</Link>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    )
}