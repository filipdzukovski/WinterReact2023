import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

export const CommentsComponent = ({
  comments,
  message,
  deleteCommentFunction,
  editCommentFunction
}) => {
  return (
    <div id="comments-component">
      {message === undefined ? (
        <table border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
              <th>View More</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((comm) => {
              return (
                <tr key={comm.id}>
                  <td>{comm.id}</td>
                  <td>{comm.name}</td>
                  <td>{comm.email}</td>
                  <td>
                    <button onClick={() => deleteCommentFunction(comm.id)}>
                      Delete
                    </button>
                    <button onClick={()=>editCommentFunction(comm)}>Edit</button>
                   
                  </td>
                  <td>
                  <Link to={`/comment/${comm.id}`}>Details...</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h3>{message}</h3>
      )}
    </div>
  );
};

CommentsComponent.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  message: PropTypes.string,
  deleteCommentFunction: PropTypes.func,
  editCommentFunction: PropTypes.func
};
