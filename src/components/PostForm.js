import React, { Component, Fragment } from 'react'
import { handleAddPost } from '../actions/posts'
import { connect } from 'react-redux'

class PostForm extends Component {
  state = {
    title: '',
    category: '',
    body: '',
    submitedFlag: false,
  }

  handleChange = (e) => {
    const stateItem = e.target.id
    const value = e.target.value

    this.setState(() => ({
      [stateItem]: value
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.dispatch(handleAddPost(
      this.state.title,
      this.state.category,
      this.state.body,
    ))

    this.setState(() => ({
      title: '',
      category: '',
      body: '',
      submitedFlag: true,
    }))
  }

  render() {

    const { submitedFlag, title, category, body } = this.state
    const { categories } = this.props

    if(submitedFlag){
      return <p className='message-ok'>Your new post was saved.</p>
    }
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              id='title'
              placeholder='Post title goes here'
              value={title}
              onChange={this.handleChange}
              required
            />
          </p>
          <p>
            <label htmlFor='category'>Category</label>
            <select onChange={this.handleChange} value={category} id='category' required>
              <option value="">Pick one here...</option>
              {Object.keys(categories).map(categorie =>
                <option value={categories[categorie].path} key={categories[categorie].path}>{categories[categorie].path}</option>
              )}
            </select>
          </p>
          <p>
            <label htmlFor='body'>Content</label>
            <textarea
              placeholder="Tell me everything"
              value={body}
              onChange={this.handleChange}
              className='textarea'
              id='body'
              required
            />
          </p>
          <p><input type="submit" className='button' value='Create New Post' /></p>
        </form>
      </Fragment>
    )
  }
}

function mapStateToProps ({categories}) {
  return {
    categories
  }
}

export default connect(mapStateToProps)(PostForm)