import {
  addPost as addPostAPI,
  increasePostVotes as increasePostVotesAPI,
  decreasePostVotes as decreasePostVotesAPI,
  deletePost as deletePostAPI,
  editPost as editPostAPI
} from '../utils/readableApi'

export const SET_ALL_POSTS = 'SET_ALL_POSTS'
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const INCREASE_POST_VOTES = 'INCREASE_POST_VOTES'
export const DECREASE_POST_VOTES = 'DECREASE_POST_VOTES'
export const INCREASE_POST_COMMENT_COUNT = 'INCREASE_POST_COMMENT_COUNT'
export const DECREASE_POST_COMMENT_COUNT = 'DECREASE_POST_COMMENT_COUNT'

export function setAllPosts (posts) {
  return {
    type: SET_ALL_POSTS,
    posts
  }
}

export function addPost (post) {
  return {
    type: ADD_POST,
    post,
  }
}

function increasePostVotes (postId) {
  return {
    type: INCREASE_POST_VOTES,
    postId,
  }
}

function decreasePostVotes (postId) {
  return {
    type: DECREASE_POST_VOTES,
    postId,
  }
}

export function increasePostCommentCount (postId) {
  return {
    type: INCREASE_POST_COMMENT_COUNT,
    postId,
  }
}

export function decreasePostCommentCount (postId) {
  return {
    type: DECREASE_POST_COMMENT_COUNT,
    postId,
  }
}

function deletePost (postId) {
  return {
    type: DELETE_POST,
    postId,
  }
}

export function handleAddPost (title, category, body) {
  return (dispatch, getState) => {
    const { user } = getState()
    const postData = {
      id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
      timestamp: Date.now(),
      title,
      body,
      author: user.userId,
      category,
    }

    return addPostAPI(postData)
      .then((post) => dispatch(addPost(post)))
      .catch(error =>  console.warn(error))
  }
}

export function handleEditPost (post) {
  return (dispatch, getState) => {
    const postData = {
      ...post,
      timestamp: Date.now(),
    }

    dispatch(addPost(postData))

    return editPostAPI(postData)
      .catch(error =>  console.warn(error))
  }
}

export function handleDeletePost (postId) {
  return (dispatch) => {
    return deletePostAPI(postId)
      .then((postId) => dispatch(deletePost(postId)))
      .catch(error =>  console.warn(error))
  }
}

export function handleIncreasePostVotes (postId) {
  return (dispatch) => {
    dispatch(increasePostVotes(postId))

    return increasePostVotesAPI(postId)
      .catch(error =>  {
        dispatch(decreasePostVotes(postId))
        console.warn(error)
      })
  }
}

export function handleDecreasePostVotes (postId) {
  return (dispatch) => {
    dispatch(decreasePostVotes(postId))

    return decreasePostVotesAPI(postId)
      .catch(error =>  {
        dispatch(increasePostVotes(postId))
        console.warn(error)
      })
  }
}