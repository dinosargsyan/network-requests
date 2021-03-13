import React, { useState } from 'react';
import Login from './Login/Login';
import Signup from './Signup/Signup';

import './Auth.scss';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(false);

    const toggleView = () => {
        setIsLogin(!isLogin);
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
