import React, {Component} from 'react';
import {connect} from 'react-redux'

class ContentFeedback extends Component {
    state = {
        content: 0
    }

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            content: event.target.value
        })
    }// end handleChange

    submitAndNext = () =>{
        // input validation to check for empty field
        if(this.state.content === 0 || this.state.content === ''){
            alert('Please submit a value between 1-5')
        }else {
            console.log('added');
            this.props.dispatch({type:"ADD_FEEDBACK", payload: this.state.content})
            this.props.history.push('/support')
        }
    }// end submitAndNext

    render(){
        return(
            <div className="main">
                <h1>How well are you understanding the content?</h1>
                <label html="understanding">Understanding?</label>
                <input type="number" min="1" max="5" onChange={this.handleChange}/>
                <button onClick={this.submitAndNext}>Next</button>
            </div>
        )
    }
}

export default connect()(ContentFeedback);
