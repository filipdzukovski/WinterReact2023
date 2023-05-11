import { logInFailed, logInSuccess, logOutUser } from "./actions";
import { LogInUser } from "../../../api/authApi";

export const logInToApp = (email, password) => {
  return (dispatch) => {
    return LogInUser(email, password)
      .then((res) => {
        dispatch(logInSuccess(res));
        return res;
      })
      .catch((err) => {
        dispatch(logInFailed("Invalid Credentials"));
        return err;
      });
  };
};

export const logOut = () => {
  return (dispatch) => {
    dispatch(logOutUser());
  };
};
