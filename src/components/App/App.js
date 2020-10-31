import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
// components
import Header from '../Header/Header'
import FeelingFeedback from '../FeelingFeedback/FeelingFeedback'
// connects to our reduxStore
import {connect} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <FeelingFeedback/>
        <br/>
      </div>
    );
  }
}

export default connect()(App);
