import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleIncreasePostVotes, handleDecreasePostVotes } from '../actions/posts'

class VoteScore extends Component {
  handleIncrease = (e) => {
    e.preventDefault()

    const { dispatch, postId } = this.props

    dispatch(handleIncreasePostVotes(postId))
  }

  handleDecrease = (e) => {
    e.preventDefault()

    const { dispatch, postId } = this.props

    dispatch(handleDecreasePostVotes(postId))
  }

  render() {
    return (
      <div className='post-votescore'>
        <button onClick={this.handleDecrease} className='post-vote post-vote-down'>Down</button>
        <span className='post-score'>{this.props.score}</span>
        <button onClick={this.handleIncrease} className='post-vote post-vote-up'>Up</button>
      </div>
    )
  }
}

export default connect()(VoteScore)