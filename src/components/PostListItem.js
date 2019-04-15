import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PostVoteScore from './PostVoteScore'
import { formatDate } from '../utils/helpers'

class PostListItem extends Component {
  render() {
    const { post } = this.props
    return (
      <div className='post-list-item'>
        <h2><Link to={`/${post.category}/${post.id}`} className='tweet'>{post.title}</Link></h2>
        <p className='post-info'>
          <span className='post-author'>{post.author}</span>
          <span className='post-datetime'>{formatDate(post.timestamp)}</span>
          <span className='post-comment-count'>comments: {post.commentCount}</span>
        </p>
        <PostVoteScore postId={post.id} score={post.voteScore} />
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