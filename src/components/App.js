import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
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
          <Header />

          <div className='wrap-content'>
            <div className='content-container'>
              <Switch>
                <Route path='/category/:id' exact component={Category} />
                <Route path='/post/new' exact component={NewPost} />
                <Route path='/post/edit/:id' exact component={EditPost} />
                <Route path='/post/:id' exact component={Post} />
                <Route path='/' exact component={Home} />
              </Switch>
            </div>
          </div>

          <Footer />
        </Fragment>
      </Router>
    )
  }
}

export default App