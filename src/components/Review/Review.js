import React, {Component} from 'react';
import {connect} from 'react-redux';
// axios 
import axios from 'axios';

class Review extends Component {
    state = {
        feeling: this.props.reduxStore.feedBackReducer[0],
        understanding: this.props.reduxStore.feedBackReducer[1],
        support: this.props.reduxStore.feedBackReducer[2],
        comments: this.props.reduxStore.feedBackReducer[3]
    }

    handleSubmit = () => {
        console.log('submitted', this.state);
        // axios post to database
        axios.post('/feedback', this.state)
            .then(response=>{
                console.log('back from server', response.data);
            }).catch(err=>{
                console.log('error in POST', err)
            })
        this.props.history.push('/thanks')
    }
 
    render(){
        return(
            <div>
                <p>Feelings:{this.state.feeling}</p>
                <p>understanding:{this.state.understanding}</p>
                <p>Support:{this.state.support}</p>
                <p>Comments:{this.state.comments}</p>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
            
        )
    }
}

const reduxStoreOnProps = (reduxStore) => ({
    reduxStore
  })

export default connect(reduxStoreOnProps)(Review);