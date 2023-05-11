import { properties } from "../config/properties";

export const LogInUser = (mejl, lozinka) => {
  const header = {
    "Content-Type": "application/json",
    Accept: "application/json,text/plain,*/*",
  };
  const data = { email: mejl, password: lozinka };

  return fetch(`${properties.api.localRoute}/login`, {
    method: "POST",
    headers: header,
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((json) => Promise.resolve(json))
    .catch((err) => Promise.reject(err));
};
