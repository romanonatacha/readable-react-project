import React, { Component, Fragment } from 'react'
import PostEditForm from './PostEditForm'
import Header from './Header'
import Footer from './Footer'
import { connect } from 'react-redux'
import { handlePostEditData } from '../actions/views'

class EditPost extends Component {
  componentDidMount() {
    this.props.dispatch(handlePostEditData())
  }
  render() {

    const { loading, post } = this.props

    return (
      <Fragment>
        <Header />

        <div className='wrap-content'>
          <div className='content-container'>
            <h3>Editing Post</h3>
            {loading === 0
              ? <PostEditForm post={post} />
              : <p>Loading...</p>
            }
          </div>
        </div>

        <Footer />
      </Fragment>
    )
  }
}

function mapStateToProps ({loadingBar, posts}, props) {
  return {
    loading: loadingBar.default,
    post: posts[props.match.params.id]
  }
}

export default connect(mapStateToProps)(EditPost)