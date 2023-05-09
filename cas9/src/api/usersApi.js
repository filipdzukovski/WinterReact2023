import { properties } from "./../config/properties";

export const getUsers = () => {
  return fetch(`${properties.api.root}/users`)
    .then((res) => res.json())
    .then((data) => Promise.resolve(data))
    .catch((error) => Promise.reject(error));
};
