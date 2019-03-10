import React, { Component, Fragment } from 'react'
import PostForm from './PostForm'

class NewPost extends Component {
  render() {
    return (
      <Fragment>
        <h2>Create a New Post</h2>
        <PostForm />
      </Fragment>
    )
  }
}

export default NewPost