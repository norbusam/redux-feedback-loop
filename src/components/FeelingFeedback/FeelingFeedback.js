import React, {Component} from 'react';
import {connect} from 'react-redux'

class FeelingFeedback extends Component {

    state = {
        feeling: 0
    }
    // grabs the value and set the state to the value
    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            feeling: event.target.value
        })
    }// end handleChange

    submitAndNext = () =>{
        // input validation
        if(this.state.feeling === 0 || this.state.feeling === ''){
            alert('Please submit a value between 1-5')
        }else {
            this.props.dispatch({type:"ADD_FEEDBACK", payload: this.state.feeling})
            this.props.history.push('/content')
        }
    }// end submitAndNext

    render(){
        return(
            <div>
                <h1>How are you feeling today?</h1>
                <label html="feeling">Feeling?</label>
                <input type="number" min="1" max="5" onChange={this.handleChange}/>
                <button onClick={this.submitAndNext}>Next</button>
            </div>
        )
    }
}

export default connect()(FeelingFeedback);