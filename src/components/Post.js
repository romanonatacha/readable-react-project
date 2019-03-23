import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handlePostData } from '../actions/views'
import { formatDate } from '../utils/helpers'
import Header from './Header'
import Footer from './Footer'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import PostVoteScore from './PostVoteScore'

class Post extends Component {
  componentDidMount() {
    this.props.dispatch(handlePostData(this.props.match.params.id))
  }
  render() {
    const { post } = this.props
    return (
      <Fragment>
        <Header />

        <div className='wrap-content'>
          <div className='content-container'>
            {this.props.loading === 0
              ? <div className='post'>
                  <h2>{post.title}</h2>
                  <p className='post-info'>
                    <span className='post-author'>By: {post.author}</span>
                    <span className='post-datetime'>Date and Time: {formatDate(post.timestamp)}</span>
                    <span className='post-comment-count'>Comments: {post.commentCount}</span>
                  </p>

                  <div className='post-content'>
                    {post.body}
                  </div>

                  <div className='post-votescore'>
                    <a href='#' className='post-vote post-vote-up'>Vote Up</a>
                    <span className='post-'>{post.voteScore}</span>
                    <a href='#' className='post-vote post-vote-down'>Vote Down</a>
                  </div>
                  <PostVoteScore postId={this.props.match.params.id} score={post.voteScore} />
                  <CommentList postId={this.props.match.params.id} />
                  <CommentForm />
                </div>
              : <p>Loading...</p>
            }

          </div>
        </div>

        <Footer />
      </Fragment>
    )
  }
}

function mapStateToProps ({posts, comments, loadingBar}, props) {
  return {
    post: posts[props.match.params.id],
    comments: comments[props.match.params.id],
    loading: loadingBar.default
  }
}

export default connect(mapStateToProps)(Post)