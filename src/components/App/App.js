import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
// components
import Header from '../Header/Header'
import FeelingFeedback from '../FeelingFeedback/FeelingFeedback';
import ContentFeedback from '../ContentFeedback/ContentFeedback';
import SupportFeedback from '../SupportFeedback/SupportFeedback';
import CommentFeedback from '../CommentFeedback/CommentFeedback';
import Review from '../Review/Review';
// connects to our reduxStore
import {connect} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';




class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          {/* <FeelingFeedback/> */}
          <br/>
        </div>
        
        <Route exact path ='/' component={FeelingFeedback}/>
        <Route  path ='/content' component={ContentFeedback}/>
        <Route  path ='/support' component={SupportFeedback}/>
        <Route  path ='/comment' component={CommentFeedback}/>
        <Route  path ='/review' component={Review}/>
      </Router>
    );
  }
}

const reduxStoreOnProps = (reduxStore) => ({
  reduxStore
})

export default connect(reduxStoreOnProps)(App);
