import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleIncreaseCommentVotes, handleDecreaseCommentVotes } from '../actions/comments'

class CommentVoteScore extends Component {
  handleIncrease = (e) => {
    e.preventDefault()

    const { dispatch, commentId, postId } = this.props

    dispatch(handleIncreaseCommentVotes(commentId, postId))
  }

  handleDecrease = (e) => {
    e.preventDefault()

    const { dispatch, commentId, postId } = this.props

    dispatch(handleDecreaseCommentVotes(commentId, postId))
  }

  render() {

    const { score } = this.props

    return (
      <div className='comment-list-votescore'>
        <button onClick={this.handleIncrease} className='button-action comment-list-vote comment-list-vote-up'><i class="fas fa-thumbs-up"></i></button>
        <span className='comment-list-score'>{score}</span>
        <button onClick={this.handleDecrease} className='button-action comment-list-vote comment-list-vote-down'><i class="fas fa-thumbs-down"></i></button>
      </div>
    )
  }
}

export default connect()(CommentVoteScore)