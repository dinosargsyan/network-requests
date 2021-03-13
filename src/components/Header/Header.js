import React from 'react';
import {NavLink, BrowserRouter} from 'react-router-dom';

import './Header.scss';

const Header = () => {
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
        },
        {
            title: "Auth",
            to: "/auth"
        }
    ];
    return (
        <div className="app-header">
            <nav className="app-header__nav">
                <ul className="app-header__nav__ul">
                    {Links.map(el=>{
                        return   (<NavLink key={el.title}  exact to={el.to}  activeClassName="selected"><li key={el.title} className="app-header__nav__ul__li" >{el.title}</li></NavLink>)
                    })}
                </ul>
            </nav>       
        </div>
        
    )
}

export default Header;
