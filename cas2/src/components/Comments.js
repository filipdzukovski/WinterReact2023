import React from 'react';
import PropTypes from 'prop-types';

export const Comments = ({listOfComments,randomNumber}) => {
    console.log(listOfComments)
    return(
        <div id="comments">
            <h2>Comments</h2>
            {listOfComments.map((comment,i)=>{
                return(
                    <div key={comment.id}>
                        <h4>Author: {comment.author} </h4>
                        <p>Content: {comment.content} </p>
                        <h6>Date: {comment.date} </h6>
                        <h5>Star rating: {comment.starRating.stars}</h5>
                        <p>Number: {randomNumber}</p>
                    </div>
                )
            })}
        </div>
    )
}

Comments.propTypes = {
    listOfComments: PropTypes.arrayOf(PropTypes.object).isRequired,
    randomNumber: PropTypes.number
}