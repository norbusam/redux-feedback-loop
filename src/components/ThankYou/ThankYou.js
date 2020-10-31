import React, {Component} from 'react';
import {connect} from 'react-redux'

class ThankYou extends Component {

    nextPage = () => {
        this.props.dispatch({type:"CLEAR_FEEDBACK"})
        this.props.history.push('/')
    }
    render(){
        return(
            <>
            <h2>Thank you for the feedback</h2>

            <button onClick={this.nextPage}>Leave New feedback</button>
            </>
        )
    }
}

export default connect()(ThankYou);