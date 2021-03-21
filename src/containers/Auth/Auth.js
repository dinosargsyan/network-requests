import React, { useState,useContext } from 'react';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import { AppContext } from 'context/AppContext';

import './Auth.scss';

const Auth = () => {
    const context = useContext(AppContext);
    const [isLogin, setIsLogin] = useState(false);

    const toggleView = () => {
        setIsLogin(!isLogin);
        console.log(context)
    }
    return (
        <div className="app-auth">

            {isLogin ? <Login />
                : <Signup />
            }
            <span onClick={toggleView}>{isLogin ? `Go to SignUp` : `Go to Login`}</span>
        </div>
    )
}

export default Auth;
