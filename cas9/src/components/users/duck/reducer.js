import {
  GET_USERS_FAIL,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
} from "./constants";

const initialState = {
  users: [],
  errorMessage: undefined,
  // usersLoader: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        // usersLoader:true
      };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        // usersLoader:false
      };

    case GET_USERS_FAIL:
      return {
        ...state,
        errorMessage: action.payload,
        // usersLoader: false
      };

    default:
      return state;
  }
}
