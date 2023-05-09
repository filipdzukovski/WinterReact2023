import React from "react";
import PropTypes from "prop-types";

export const UsersComponent = ({ users, errorMessage }) => {
  return (
    <div id="users-component">
      {errorMessage === undefined ? (
        <table border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h1>{errorMessage}</h1>
      )}
    </div>
  );
};

UsersComponent.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  errorMessage: PropTypes.string,
};
