import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
// components
import Header from '../Header/Header'
import FeelingFeedback from '../FeelingFeedback/FeelingFeedback'
import ContentFeedback from '../ContentFeedback/ContentFeedback';
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
      </Router>
    );
  }
}

const reduxStoreOnProps = (reduxStore) => ({
  reduxStore
})

export default connect(reduxStoreOnProps)(App);
