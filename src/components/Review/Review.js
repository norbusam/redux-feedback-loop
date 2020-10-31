import React, {Component} from 'react';
import {connect} from 'react-redux';
// axios 
import axios from 'axios';

class Review extends Component {

    state = {
        feedback:{
            feeling: this.props.reduxStore.feedBackReducer[0],
            understanding: this.props.reduxStore.feedBackReducer[1],
            support: this.props.reduxStore.feedBackReducer[2],
            comments: this.props.reduxStore.feedBackReducer[3]
        }
    }

    handleSubmit = () => {
        console.log('submitted', this.state.feedback);
        axios.post('/feedback', this.state.feedback)
            .then(response=>{
                console.log('back from server', response.data);
            }).catch(err=>{
                console.log('error in POST', err)
            })
    }
 
    render(){
        return(
            <div>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
            
        )
    }
}

const reduxStoreOnProps = (reduxStore) => ({
    reduxStore
  })

export default connect(reduxStoreOnProps)(Review);