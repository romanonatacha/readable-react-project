import React, { Component, Fragment } from 'react'
import PostForm from './PostForm'
import Header from './Header'
import Footer from './Footer'
import { connect } from 'react-redux'
import { handlePostNewData } from '../actions/views'

class NewPost extends Component {
  componentDidMount() {
    this.props.dispatch(handlePostNewData())
  }
  render() {

    const { loading } = this.props

    return (
      <Fragment>
        <Header />

        <div className='wrap-content'>
          <div className='content-container'>
            <h3>Create a New Post</h3>
            {loading === 0
              ? <PostForm />
              : <p>Loading...</p>
            }
          </div>
        </div>

        <Footer />
      </Fragment>
    )
  }
}

function mapStateToProps ({loadingBar}) {
  return {
    loading: loadingBar.default,
  }
}

export default connect(mapStateToProps)(NewPost)