import React, {Component} from 'react';
import {connect} from 'react-redux'

class SupportFeedback extends Component {
    state = {
        support: 0
    }

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            support: event.target.value
        })
    }// end handleChange

    submitAndNext = () =>{
        if(this.state.support === 0 || this.state.support === ''){
            alert('Please submit a value between 1-5')
        }else {
            console.log('added');
            this.props.dispatch({type:"ADD_FEEDBACK", payload: this.state.support})
            // this.props.history.push('/support')
        }
    }
    render(){
        return(
            <div>
                <h1>How well are you being supported?</h1>
                <label html="support">Support?</label>
                <input type="number" min="1" max="5" onChange={this.handleChange}/>
                <button onClick={this.submitAndNext}>Next</button>
            </div>
        )
    }
}

export default connect()(SupportFeedback);