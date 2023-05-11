import {
  fetchCommentsRequest,
  fetchCommentsSuccess,
  fetchCommentsFail,
  deleteCommentsRequest,
  deleteCommentsSuccess,
  deleteCommentsFail,
  editCommentsRequest,
  editCommentsSuccess,
  editCommentsFail
} from "./actions";
import { getComments, removeComment,changeComment } from "./../../../api/commentsApi";

export const fetchComments = (requestParams) => {
  return (dispatch) => {
    dispatch(fetchCommentsRequest(requestParams));
    return getComments()
      .then((result) => {
        dispatch(fetchCommentsSuccess(result));
        return result;
      })
      .catch((err) => {
        dispatch(fetchCommentsFail(err));
        return err;
      });
  };
};

export const deleteComment = (requestParams) => {
  return (dispatch) => {
    dispatch(deleteCommentsRequest(requestParams));
    return removeComment(requestParams)
      .then((result) => {
        dispatch(deleteCommentsSuccess(result));
        return result;
      })
      .catch((err) => {
        dispatch(deleteCommentsFail(err));
        return err;
      });
  };
};

export const editComment = (requestParams) => {
  return (dispatch) => {
    dispatch(editCommentsRequest(requestParams));
    return changeComment(requestParams)
      .then((result) => {
        dispatch(editCommentsSuccess(result));
        return result;
      })
      .catch((err) => {
        dispatch(editCommentsFail(err));
        return err;
      });
  };
};
