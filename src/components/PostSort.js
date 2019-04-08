import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSortingConfig } from '../actions/user'

class PostSort extends Component {
  handleSetSorting = (e, sort) => {
    e.preventDefault()

    const { dispatch } = this.props

    dispatch(setSortingConfig(sort))
  }

  render() {
    return (
      <p className='category-order'>
        Order by:
        {Object.keys(this.props.postsSortingBy).map(sort =>
          <button key={sort} onClick={(e) => this.handleSetSorting(e, sort)} className={'button-action ' + (this.props.postsSortingBy[sort] ? 'active' : 'not-active')}>{sort}</button>
        )}
      </p>
    )
  }
}

function mapStateToProps ({user}) {
  const postsSortingBy = user.config.postsSortingBy
  return {
    postsSortingBy,
  }
}

export default connect(mapStateToProps)(PostSort)