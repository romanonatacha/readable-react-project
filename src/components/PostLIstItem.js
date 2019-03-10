import React, { Component } from 'react'
import { connect } from 'react-redux'

class PostListItem extends Component {
  render() {
    const { post } = this.props

    return (
      <div className='post-list-item'>
        <h2>{post.title}</h2>
        <p className='post-list-item-info'>
          <span className='post-list-item-author'>By: {post.author}</span>
          <span className='post-list-item-datetime'>{post.timestamp}</span>
          <span className='post-list-item-comment-count'>{post.commentCount} comments</span>
        </p>
        <div className='post-list-item-votes'>
          <a href='#' className='post-list-item-vote post-list-item-vote-down'>Down</a>
          <span className='post-list-item-score'>{post.votes}</span>
          <a href='#' className='post-list-item-vote post-list-item-vote-up'>Up</a>

        </div>
      </div>
    )
  }
}

function mapStateToProps ({posts}, {id}) {
  return {
    post: posts[id]
  }
}

export default connect(mapStateToProps)(PostListItem)