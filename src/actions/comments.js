import {
  increaseCommentVotes as increaseCommentVotesAPI,
  decreaseCommentVotes as decreaseCommentVotesAPI,
  addComment as addCommentAPI,
  deleteComment as deleteCommentAPI,
  editComment as editCommentAPI
} from '../utils/readableApi'

import { increasePostCommentCount, decreasePostCommentCount} from './posts'

export const SET_ALL_COMMENTS_FOR_POST = 'SET_ALL_COMMENTS_FOR_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const INCREASE_COMMENT_VOTES = 'INCREASE_COMMENT_VOTES'
export const DECREASE_COMMENT_VOTES = 'DECREASE_COMMENT_VOTES'


export function setAllCommentsForPost (comments) {
  return {
    type: SET_ALL_COMMENTS_FOR_POST,
    comments,
  }
}

function addComment (comment) {
  return {
    type: ADD_COMMENT,
    comment,
  }
}

function deleteComment (comment) {
  return {
    type: DELETE_COMMENT,
    comment,
  }
}

function increaseCommentVotes (commentId, postId) {
  return {
    type: INCREASE_COMMENT_VOTES,
    commentId,
    postId,
  }
}

function decreaseCommentVotes (commentId, postId) {
  return {
    type: DECREASE_COMMENT_VOTES,
    commentId,
    postId,
  }
}

export function handleAddComment (postId, body) {
  return (dispatch, getState) => {
    const { user } = getState()
    const commentData = {
      id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
      timestamp: Date.now(),
      body,
      author: user.userId,
      parentId: postId,
    }

    return addCommentAPI(commentData)
      .then((comment) => {
        dispatch(addComment(comment))
        dispatch(increasePostCommentCount(comment.parentId))
      })
      .catch(error =>  console.warn(error))
  }
}

export function handleEditComment (comment) {
  return (dispatch, getState) => {
    comment.timestamp = Date.now()
    dispatch(addComment(comment))

    return editCommentAPI(comment)
      .catch(error =>  console.warn(error))
  }
}

export function handleDeleteComment (comment) {
  return (dispatch) => {
    dispatch(deleteComment(comment))
    dispatch(decreasePostCommentCount(comment.parentId))
    return deleteCommentAPI(comment.id)
      .catch(error =>  {
        console.warn(error)
        addComment(comment)
        dispatch(increasePostCommentCount(comment.parentId))
      })
  }
}

export function handleIncreaseCommentVotes (commentId, postId) {
  return (dispatch) => {
    dispatch(increaseCommentVotes(commentId, postId))

    return increaseCommentVotesAPI(commentId, postId)
      .catch(error =>  {
        dispatch(decreaseCommentVotes(commentId, postId))
        console.warn(error)
      })
  }
}

export function handleDecreaseCommentVotes (commentId, postId) {
  return (dispatch) => {
    dispatch(decreaseCommentVotes(commentId, postId))

    return decreaseCommentVotesAPI(commentId, postId)
      .catch(error =>  {
        dispatch(increaseCommentVotes(commentId, postId))
        console.warn(error)
      })
  }
}
