import React from 'react';

import './Button.scss';

const Button = ({onClick,children}) => {
    return (
        <div>
            <button className='app-button' onClick={onClick}>{children}</button>
        </div>
    )
}

export default Button;
