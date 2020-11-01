import React, {Component} from 'react';
import {connect} from 'react-redux'

class template extends Component {
    render(){
        return(
            <>
            hello
            </>
        )
    }
}

export default connect()(template);