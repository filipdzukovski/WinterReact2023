import React from 'react';
import {Link} from 'react-router-dom';

export const Navigation = () => {

    return(
        <ul>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/todos">Todos</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
        </ul>
    )
}