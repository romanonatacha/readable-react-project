export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const SET_SORTING_CONFIG = 'SET_SORTING_CONFIG'

// This action creator is passed to reducer with the ID of atuhed user
export function setAuthedUser (id) {
  return {
    type: SET_AUTHED_USER,
    id
  }
}

export function setSortingConfig (sort) {
  return {
    type: SET_SORTING_CONFIG,
    sort
  }
}