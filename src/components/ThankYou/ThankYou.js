import React, {Component} from 'react';
import {connect} from 'react-redux';

class ThankYou extends Component {
    // function to clear and go back to home page
    nextPage = () => {
        // a dispatch to clear the feedBackReducer state to an empty [].
        this.props.dispatch({type:"CLEAR_FEEDBACK"})
        // jump to home page
        this.props.history.push('/')
    }
    render(){
        return(
            <div>
            <h2>Thank you for the feedback</h2>

            <button onClick={this.nextPage}>Leave New feedback</button>
            </div>
        )
    }
}

export default connect()(ThankYou);