import React, { Component, Fragment } from 'react'
import PostListItem from './PostListItem';

class PostList extends Component {
  render() {

    const { postsIds } = this.props

    return (
      <Fragment>
        {postsIds.length > 0
          ? postsIds.map((id) => (
            <PostListItem key={id} id={id} />
            ))
          : <p className='no-posts'>No posts here</p>
        }
      </Fragment>
    )
  }
}

export default PostList