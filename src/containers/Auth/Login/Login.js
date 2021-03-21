import React, { useState, useContext } from 'react';
import { Button } from '@material-ui/core';
import Input from 'components/Input/Input';
import fbService from 'api/fbService';

import './Login.scss';
import { AppContext } from 'context/AppContext';
import { actionTypes } from 'context/contextTypes';

const Login = () => {
    const context = useContext(AppContext);
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })
    const changeHandler = (name, value) => {
        setCredentials({
            ...credentials,
            [name]: value
        })
    }
    const loginHandler = async () => {
        const user = await fbService.login(credentials);
        context.dispatch({ type: actionTypes.SET_USER, payload: { user } })

    }
    return (
        <div className="app-auth-login">
            <Input value={credentials.email} className="app-auth-login__input" placeholder="Email" onChange={(e) => changeHandler('email', e.target.value)} />
            <Input value={credentials.password} className="app-auth-login__input" placeholder="Password" onChange={(e) => changeHandler('password', e.target.value)} />
            <Button variant="contained" color="primary" className="app-auth-login__button" onClick={loginHandler}>Login</Button>
        </div>
    )
}

export default Login;
