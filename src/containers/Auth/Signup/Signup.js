import React,{useState} from 'react';
import { Button } from '@material-ui/core';
import Input from 'components/Input/Input';
import fbService from 'api/fbService';

import './Signup.scss';

const Signup = () => {
    const [credentials,setCredentials] = useState({
        email: '',
        password: ''
    })
    const changeHandler = (name,value) =>{
        setCredentials({
            ...credentials,
            [name]:value
        })
    }
    const signupHandler = ()=>{
        fbService.signup(credentials)
    }
    return (
        <div className="app-auth-signup">
            <Input value={credentials.email} className="app-auth-signup__input" placeholder="Email" onChange={(e)=>changeHandler('email', e.target.value)} />
            <Input value={credentials.password} className="app-auth-signup__input" placeholder="Password" onChange={(e)=>changeHandler('password',e.target.value)}/>
            <Button variant="contained" color="primary" className="app-auth-signup__button" onClick={signupHandler}>Sign Up</Button>
            
        </div>
    )
}

export default Signup;
