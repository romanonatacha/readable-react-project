import React, { Component, Fragment } from 'react'
import PostForm from './PostForm'

class EditPost extends Component {
  render() {
    return (
      <Fragment>
        <h2>Editing Post ##</h2>
        <PostForm />
      </Fragment>
    )
  }
}

export default EditPost