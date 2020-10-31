import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FeelingFeedback from '../FeelingFeedback/FeelingFeedback'
// connects to our reduxStore
import {connect} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <FeelingFeedback/>
        <br/>
      </div>
    );
  }
}

export default connect()(App);
