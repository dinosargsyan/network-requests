import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Input from 'components/Input/Input';
import fbService from 'api/fbService';
import { AppContext } from 'context/AppContext';
import './Signup.scss';
import { actionTypes } from 'context/contextTypes';

const Signup = () => {
    const history = useHistory();
    const context = useContext(AppContext);
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
        displayName: ''
    })
    const changeHandler = (name, value) => {
        setCredentials({
            ...credentials,
            [name]: value
        })
    }
    const signupHandler = async () => {
        try {

            const user = await fbService.signup(credentials);
            context.dispatch({ type: actionTypes.SET_USER, payload: { user } });
            localStorage.setItem("user", JSON.stringify(user));
            history.push("/profile");



        } catch (err) {

        }
    }
    return (
        <div className="app-auth-signup">
            <Input
                value={credentials.email}
                className="app-auth-signup__input"
                placeholder="Username"
                onChange={(e) => changeHandler('displayName', e.target.value)}
            />
            <Input
                value={credentials.email}
                className="app-auth-signup__input"
                placeholder="Email"
                onChange={(e) => changeHandler('email', e.target.value)}
            />
            <Input
                value={credentials.password}
                className="app-auth-signup__input"
                placeholder="Password"
                onChange={(e) => changeHandler('password', e.target.value)}
                type="password" />
            <Button variant="contained" color="primary" className="app-auth-signup__button" onClick={signupHandler}>Sign Up</Button>

        </div>
    )
}

export default Signup;
