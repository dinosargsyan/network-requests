import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'
import fbService from 'api/fbService'
import { AppContext } from 'context/AppContext'
import { actionTypes } from 'context/contextTypes'

const Profile = () => {
    const history = useHistory();
    const context = useContext(AppContext);
    const logoutHandler = async () => {
        await fbService.logout();
        localStorage.removeItem('user');
        context.dispatch({type: actionTypes.REMOVE_USER});
        history.push('/auth');

    }
    return (
        <div>
            <Button variant="contained" color="secondary" onClick={logoutHandler}>Log Out</Button>
        </div>
    )
}

export default Profile
