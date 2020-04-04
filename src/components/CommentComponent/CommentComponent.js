

import React, {Component} from 'react'


class CommentComponent extends Component {


    constructor(props) {
        super(props) 
        this.state = {
            commentId: this.props.commentId,
            name: this.props.name,
            email: this.props.email,
            body: this.props.body
        }
    }

    render() {
        return(
            <div style={{border : "1px solid black", marginLeft: "50px", marginRight:"50px"}}>
                <div>{this.props.name}</div>
                <div>{this.props.email}</div>
                <div>{this.props.body}</div>

            </div>
        )
    }
}


export default CommentComponent