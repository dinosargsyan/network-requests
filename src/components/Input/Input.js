import React from 'react'

const Input = ({ onChange, value,placeholder}) => {
    return (
        <div>
            <input onChange={onChange} value={value} placeholder={placeholder}/>
        </div>
    )
}

export default Input
