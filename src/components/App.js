import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import Post from './Post'
import NewPost from './NewPost'
import EditPost from './EditPost'
import Category from './Category'
import Home from './Home'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar style={{backgroundColor: 'greenyellow'}} />
          <Switch>
            <Route path='/category/:categoryPath' exact component={Category} />
            <Route path='/post/new' exact component={NewPost} />
            <Route path='/post/edit/:id' exact component={EditPost} />
            <Route path='/post/:id' exact component={Post} />
            <Route path='/' exact component={Home} />
          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default connect()(App)