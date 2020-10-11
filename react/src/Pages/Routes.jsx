import React from 'react'
import { Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';

export default function Routes() {

    return (
        <>
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={SignUp}></Route>
        </>
    )
}