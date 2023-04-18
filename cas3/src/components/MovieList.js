import React from 'react';
import PropTypes from 'prop-types';

export const MovieList = ({listOfMovies}) => {
    console.log(listOfMovies)
    return(
        <div>   
                {listOfMovies.map((movie,i)=>{
                    return(
                        <div key={i}>
                            <h2>Name: {movie.name}</h2>
                            <h4>Date: {movie.date}</h4>
                            <p>Genre: {movie.genre}</p>
                            <p>Plot: {movie.plot}</p>
                            <a href={movie.imdbLink} target="_blank" rel="noreferrer">Go to IMDb</a>
                            <br/>
                            <img width={200} height={250} src={movie.imgUrl} alt={movie.name}/>
                            <hr/>
                        </div>
                    )
                })}
        </div>
    )
}

MovieList.propTypes = {
    listOfMovies: PropTypes.arrayOf(PropTypes.object).isRequired
}