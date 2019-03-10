import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class Nav extends Component {
  render() {
    const { categories } = this.props

    return (
      <nav>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          {Object.keys(categories).map(category =>
            <li key={categories[category].path}>
              <NavLink to={`/category/${categories[category].path}`}>
                {categories[category].name}
              </NavLink>
            </li>
          )}
          <li><NavLink to='/post/new'>Create New Post</NavLink></li>
        </ul>
      </nav>
    )
  }
}

function mapStateToProps () {
  return {
    categories
  }
}

export default connect(mapStateToProps)(Nav)