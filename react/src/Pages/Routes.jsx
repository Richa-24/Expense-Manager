import React from 'react'
import { Route } from 'react-router-dom';
import Login from '../Components/Login';
import SignUp from '../Components/SignUp';
import Links from './Links';

export default function Routes() {

    return (
        <>
            <Route path="/" exact component={Links}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={SignUp}></Route>
        </>
    )
}