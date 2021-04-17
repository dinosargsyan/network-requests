import React from 'react';
import PropTypes from 'prop-types'
import "./Input.scss";

const Input = ({ 
    type='text',
    value,
    onChange,
    className='app-input',
    loading= false,
    placeholder='',
    inputRef,
    }) => {
    return (
        <div>
            <input
             type={type}
             onChange={onChange}
             value={value} 
             placeholder={placeholder} 
             className={className}
             disabled={loading}
             ref={inputRef}
             />
        </div>
    )
}

    Input.propTypes={
        type: PropTypes.string,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        className: PropTypes.string,
        loading: PropTypes.bool,
        placeholder: PropTypes.string
    }
export default Input;
