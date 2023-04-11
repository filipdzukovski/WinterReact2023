import React from 'react';
import PropTypes from 'prop-types';

export function Hotel({capacity,reservations,availability}){

    return(
        <div>
            <h1>Hotel React</h1>
            <p> Reservations: {reservations} / Capacity: {capacity} </p>
            {availability === true ? 
            <p>There are available rooms in the hotel</p> 
            :
            <p>No rooms available</p>
        }
        </div>
    )
}

Hotel.propTypes = {
    capacity: PropTypes.number,
    reservations: PropTypes.number,
    availability:PropTypes.bool
}