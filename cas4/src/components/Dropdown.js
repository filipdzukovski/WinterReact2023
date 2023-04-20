import React from 'react';
import PropTypes from 'prop-types';

export const Dropdown = ({ elements, changeApp }) => {

    return (
        <p>
            <label htmlFor="app-select">Select an app:</label>
            <select onChange={changeApp} name="app-select" id="app-select">
                {elements.map((elem, i) => {
                    return (
                        <option key={i} value={elem.value}>{elem.name}</option>
                    )
                })}
            </select>
        </p>
    )
}

Dropdown.propTypes = {
    elements: PropTypes.arrayOf(PropTypes.object).isRequired,
    changeApp: PropTypes.func.isRequired
}