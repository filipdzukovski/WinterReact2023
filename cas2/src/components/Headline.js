import React from 'react';
import PropTypes from 'prop-types';

export function Headline({naslov}){
    console.log(naslov)
    return(
        <div>
            <p>Headline: {naslov.title}</p>
            <p>Content: {naslov.content}</p>
            <p>Author: {naslov.auhtor} </p>
        </div>
    )
    //naslov.datum -> undefined
}

Headline.propTypes = {
    naslov:PropTypes.object
}