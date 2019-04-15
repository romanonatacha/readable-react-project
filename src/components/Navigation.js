import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class Navigation extends Component {
  render() {

    const { categories } = this.props

    return (
      <nav>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          {Object.keys(categories).map(categorie =>
            <li key={categories[categorie].path}><NavLink to={`/${categories[categorie].path}`}>{categories[categorie].name}</NavLink></li>
          )}
          <li><NavLink to='/post/new'>Create New Post</NavLink></li>
        </ul>
      </nav>
    )
  }
}

function mapStateToProps ({categories}) {
  return {
    categories
  }
}

export default connect(mapStateToProps)(Navigation)