import React from 'react';

import "./Input.scss";

const Input = ({ onChange, value,placeholder, className="app-input"}) => {
    return (
        <div>
            <input onChange={onChange} value={value} placeholder={placeholder} className={className}/>
        </div>
    )
}

export default Input
