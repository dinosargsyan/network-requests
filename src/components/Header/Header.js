import React from 'react';
import {NavLink, BrowserRouter} from 'react-router-dom';

import './Header.scss';

const Header = () => {
    return (
       
        <div className="app-header">
            <nav className="app-header__nav">
                <ul className="app-header__nav__ul">
                    <NavLink exact to="/"  activeClassName="selected"><li className="app-header__nav__ul__li" >Home Page</li></NavLink> 
                    <NavLink to="/posts" activeClassName="selected"><li className="app-header__nav__ul__li" >Posts</li></NavLink>
                    <NavLink to="/users" activeClassName="selected"> <li className="app-header__nav__ul__li" >Users</li></NavLink>
                </ul>
            </nav>       
        </div>
        
    )
}

export default Header;
