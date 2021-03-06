import React, {Component} from 'react';
import {connect} from 'react-redux';
import './ThankYou.css'

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
            <div className="mainThank">
                <h2>Thank you for the feedback!</h2>

                <button id="center" onClick={this.nextPage}>Leave New feedback</button>
            </div>
        )
    }
}

export default connect()(ThankYou);