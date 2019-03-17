import { SET_ALL_POSTS } from '../actions/posts'

export default function posts(state = {}, action) {
  switch(action.type){
    case SET_ALL_POSTS:
      return {
        ...action.posts
      }
    default:
      return state
  }
}