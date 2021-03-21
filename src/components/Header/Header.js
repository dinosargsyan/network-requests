import { AppContext } from 'context/AppContext';
import React, {useContext} from 'react';
import {NavLink, BrowserRouter} from 'react-router-dom';

import './Header.scss';

const Header = () => {
    const context = useContext(AppContext);
    
    const Links=[
        {
            title: "Home Page",
            to: "/"
        },
        {
            title: "Posts",
            to: "/posts"
        },
        {
            title: "Users",
            to: "/users"
        }
    ];
    return (
        <div className="app-header">
            <nav className="app-header__nav">
                <ul className="app-header__nav__ul">
                    {Links.map(el=>{
                        return   (<NavLink key={el.title}  exact to={el.to}  activeClassName="selected"><li key={el.title} className="app-header__nav__ul__li" >{el.title}</li></NavLink>)
                    })}
                    { !context.state.user ? (
                        <NavLink key='auth'  exact to='/auth'  activeClassName="selected"><li key='auth' className="app-header__nav__ul__li" >Auth</li></NavLink>
                    ):(
                        <NavLink key='profile'  exact to='/profile'  activeClassName="selected"><li key='profile' className="app-header__nav__ul__li" >Profile</li></NavLink>
                    ) }
                </ul>
            </nav>       
        </div>
        
    )
}

export default Header;
