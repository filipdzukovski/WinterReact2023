import {
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAIL,
  DELETE_COMMENTS_REQUEST,
  DELETE_COMMENTS_SUCCESS,
  DELETE_COMMENTS_FAIL,
  EDIT_COMMENTS_REQUEST,
  EDIT_COMMENTS_SUCCESS,
  EDIT_COMMENTS_FAIL,
} from "./constants";

const initialState = {
  comments: [],
  message: undefined,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_COMMENTS_REQUEST:
      return {
        ...state,
      };

    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
      };

    case GET_COMMENTS_FAIL:
      return {
        ...state,
        message: action.payload,
      };

    case DELETE_COMMENTS_REQUEST:
      return {
        ...state,
      };

    case DELETE_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: [
          ...state.comments.filter((comm) => comm.id !== action.payload),
        ],
      };

    case DELETE_COMMENTS_FAIL:
      return {
        ...state,
        message: action.payload,
      };

    case EDIT_COMMENTS_REQUEST:
      return {
        ...state,
      };

    case EDIT_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: [
          ...state.comments.map((comm) =>
            comm.id === action.payload.id ? action.payload : comm
          ),
        ],
      };

    case EDIT_COMMENTS_FAIL:
      return {
        ...state,
        message: action.payload,
      };

    default:
      return state;
  }
}
