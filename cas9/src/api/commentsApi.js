import { properties } from "./../config/properties";

export const getComments = () => {
  return fetch(`${properties.api.root}/comments`)
    .then((res) => res.json())
    .then((data) => Promise.resolve(data))
    .catch((err) => Promise.reject(err));
};

export const removeComment = (id) => {
  return fetch(`${properties.api.root}/comments/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => Promise.resolve(id)) // {} 204 No Content
    .catch((err) => Promise.reject(err));
};

export const changeComment = (comment) => {
  return fetch(`${properties.api.root}/comments/${comment.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(comment),
  })
    .then((res) => res.json())
    .then((data) => Promise.resolve(data))
    .catch((err) => Promise.reject(err));
};
