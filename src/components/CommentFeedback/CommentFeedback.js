import React, {Component} from 'react';
import {connect} from 'react-redux'

class CommentFeedback extends Component {
    state = {
        comment: 0
    }

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            comment: event.target.value
        })
    }// end handleChange

    submitAndNext = () =>{
        if(this.state.comment === 0 || this.state.comment === ''){
            alert('Please submit a value between 1-5')
        }else {
            console.log('added');
            this.props.dispatch({type:"ADD_FEEDBACK", payload: this.state.comment})
            this.props.history.push('/review')
        }
    }

    render(){
        return(
            <div>
                <h1>Any comment you want to leave?</h1>
                <label html="comments">Comments?</label>
                <input type="text" onChange={this.handleChange}/>
                <button onClick={this.submitAndNext}>Next</button>
            </div>
        )
    }
}

export default connect()(CommentFeedback);