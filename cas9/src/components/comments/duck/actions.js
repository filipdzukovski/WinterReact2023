import {
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAIL,
  DELETE_COMMENTS_FAIL,
  DELETE_COMMENTS_REQUEST,
  DELETE_COMMENTS_SUCCESS,
  EDIT_COMMENTS_REQUEST,
  EDIT_COMMENTS_SUCCESS,
  EDIT_COMMENTS_FAIL,
} from "./constants";

export const fetchCommentsRequest = (requestParams) => {
  return {
    type: GET_COMMENTS_REQUEST,
    payload: requestParams,
  };
};

export const fetchCommentsSuccess = (comments) => {
  return {
    type: GET_COMMENTS_SUCCESS,
    payload: comments,
  };
};

export const fetchCommentsFail = (error) => {
  return {
    type: GET_COMMENTS_FAIL,
    payload: error,
  };
};

export const deleteCommentsRequest = (requestParams) => {
  return {
    type: DELETE_COMMENTS_REQUEST,
    payload: requestParams,
  };
};

export const deleteCommentsSuccess = (commentId) => {
  return {
    type: DELETE_COMMENTS_SUCCESS,
    payload: commentId,
  };
};

export const deleteCommentsFail = (err) => {
  return {
    type: DELETE_COMMENTS_FAIL,
    payload: err,
  };
};

export const editCommentsRequest = (requestParams) => {
  return {
    type: EDIT_COMMENTS_REQUEST,
    payload: requestParams,
  };
};

export const editCommentsSuccess = (comment) => {
  return {
    type: EDIT_COMMENTS_SUCCESS,
    payload: comment,
  };
};

export const editCommentsFail = (err) => {
  return {
    type: EDIT_COMMENTS_FAIL,
    payload: err,
  };
};
