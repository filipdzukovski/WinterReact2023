import { LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT_USER } from "./constants";
import { setUser, removeUser } from "./../../../config/StorageFunctions";

const initialState = {
  user: null,
  token: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      setUser(action.payload.accessToken, action.payload.username);
      return {
        ...state,
        token: action.payload.accessToken,
        user: action.payload.username,
      };
    case LOGIN_FAILED:
      return {
        ...state,
      };
    case LOGOUT_USER:
      removeUser();
      return {
        ...state,
        user: null,
        token: null,
      };

    default:
      return state;
  }
}
