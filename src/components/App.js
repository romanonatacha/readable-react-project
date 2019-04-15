import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import Post from './Post'
import NewPost from './NewPost'
import Category from './Category'
import Home from './Home'
import PageNotFound from './PageNotFound';
import EditPost from './EditPost';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar style={{backgroundColor: 'greenyellow'}} />
          <Switch>
            <Route path='/404' exact component={PageNotFound} />
            <Route path='/post/new' exact component={NewPost} />
            <Route path='/post/edit/:id' exact component={EditPost} />
            <Route path='/:categoryPath/:id' exact component={Post} />
            <Route path='/:categoryPath' exact component={Category} />
            <Route path='/' exact component={Home} />
            <Route path='*' component={PageNotFound} />
          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default connect()(App)