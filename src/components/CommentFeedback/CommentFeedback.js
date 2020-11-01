import React, {Component} from 'react';
import {connect} from 'react-redux';
import './CommentFeedback.css'

class CommentFeedback extends Component {
    state = {
        comment: ''
    }

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            comment: event.target.value
        })
    }// end handleChange

    submitAndNext = () =>{
            this.props.dispatch({type:"ADD_FEEDBACK", payload: this.state.comment})
            this.props.history.push('/review')
    }// end submitAndNext

    render(){
        return(
            <div className="main">
                <h1>Any comment you want to leave?</h1>
                <label html="comments">Comments?</label>
                <input type="text" onChange={this.handleChange}/>
                <button onClick={this.submitAndNext}>Next</button>
            </div>
        )
    }
}

export default connect()(CommentFeedback);