import React, {Component} from 'react'
import PostsPageComponent from '../../page-components/PostsPageComponent/PostsPageComponent'
import CommentComponent from '../CommentComponent/CommentComponent'




class PostComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userId: this.props.userId,
            postId: this.props.id,
            title: this.props.title,
            body: this.props.body,
            comments: [],
            isShowingComments: false
        }

        
        this.displayComments = this.displayComments.bind(this)
    }

    async displayComments() {

        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.postId}/comments`)
        const data = await response.json()

        this.setState({comments: data,
                       isShowingComments: !this.state.isShowingComments})

    }

    render() {

        const comments = this.state.comments.map((comment) => {

            return <CommentComponent key={comment.id} commentId={comment.id} name={comment.name} email={comment.email} body={comment.body} ></CommentComponent>
        })

        const isShowingComments = this.state.isShowingComments

        
        return(
            <div onClick ={this.displayComments}>
                {this.props.title}
                {/* <Link to={{pathname: `/photon/posts/${this.props.postId}/comments`}}>
                </Link> */}

                {/* {this.props.comments} */}


                <div style={{border: "1px solid black"}}>
                    {isShowingComments ? 
                    <div>{comments} </div>: <div></div>
                    }
                </div>
            </div>
        )
    }
}

export default PostComponent