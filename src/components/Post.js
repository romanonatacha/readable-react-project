import React, { Component, Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import PostVoteScore from './PostVoteScore'
import { connect } from 'react-redux'
import { handlePostData } from '../actions/views'
import { handleDeletePost } from '../actions/posts'
import { formatDate } from '../utils/helpers'
import { Redirect } from 'react-router-dom'

class Post extends Component {
  state = {
    deletedFlag: false,
    redirectFlag: false,
  }
  componentDidMount() {
    this.props.dispatch(handlePostData(this.props.match.params.id))
  }

  handleEdit = (e) => {
    e.preventDefault()
    this.setState(() => ({
      redirectFlag: true,
    }))
  }

  handleDelete = (e) => {
    e.preventDefault()

    const { dispatch, post } = this.props

    dispatch(handleDeletePost(post.id))

    this.setState(() => ({
      deletedFlag: true,
    }))
  }

  render() {
    const { post, loading } = this.props
    const { redirectFlag, deletedFlag } = this.state

    if (!post && loading === 0) {
      return <Redirect to='/404' />
    }

    if(redirectFlag === true) {
      return <Redirect to={'/post/edit/' + this.props.post.id} />
    }

    return (
      <Fragment>
        <Header />

        <div className='wrap-content'>
          <div className='content-container'>
            {(loading === 0 && !deletedFlag) &&
              <div className='post'>
                <h2>{post.title}</h2>
                <p className='post-info'>
                  <span className='post-author'>{post.author}</span>
                  <span className='post-datetime'>{formatDate(post.timestamp)}</span>
                  <span className='post-comment-count'>comments: {post.commentCount}</span>
                </p>

                {this.props.user.userId === post.author
                  ? <div className='post-actions'>
                      <button onClick={this.handleEdit} className='button-action'>Edit Post</button>
                      <button onClick={this.handleDelete} className='button-action'>Delete Post</button>
                    </div>
                  : null
                }

                <div className='post-content'>
                  {post.body}
                </div>

                <PostVoteScore postId={this.props.match.params.id} score={post.voteScore} />

                <CommentList postId={this.props.match.params.id} />
                <CommentForm postId={this.props.match.params.id} />
              </div>
            }

            {loading === 1 &&
              <p>Loading...</p>
            }

            {deletedFlag &&
              <p className='message-ok'>This post is not here anymore :(</p>
            }
          </div>
        </div>

        <Footer />
      </Fragment>
    )
  }
}

function mapStateToProps ({posts, comments, loadingBar, user}, props) {
  return {
    post: posts[props.match.params.id],
    comments: comments[props.match.params.id],
    loading: loadingBar.default,
    user,
  }
}

export default connect(mapStateToProps)(Post)