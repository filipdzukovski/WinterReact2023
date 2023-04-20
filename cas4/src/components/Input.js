import React from 'react';
import PropTypes from 'prop-types';
 
export const Input = ({type,placeholder,value,onChange,name,smeniPole}) => {

    return(
        <p>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
          {name === 'password' ? <button type='button' onClick={smeniPole}>
                <i className={type === 'password' ? 'fa fa-eye-slash': 'fa fa-eye'}></i>
            </button> : null}
        </p>
    )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name:PropTypes.string,
    smeniPole: PropTypes.func
}