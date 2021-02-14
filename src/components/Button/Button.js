import React from 'react';

import './Button.scss';

const Button = ({onClick,children,className=''}) => {
    return (
        <div>
            <button className='app-button' onClick={onClick} className={className}>{children}</button>
        </div>
    )
}

export default Button;
