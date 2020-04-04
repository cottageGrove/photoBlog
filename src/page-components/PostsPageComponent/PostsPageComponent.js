import React, {Component} from 'react'
import PhotosPageComponent from '../PhotosPageComponent/PhotosPageComponent'
import PostComponent from '../../components/PostComponent/PostComponent'
import { withRouter } from 'react-router'

import '../../page-components/pageComponent.css'

import {
    BrowserRouter as Router, 
    Switch, 
    Route,
  } from 'react-router-dom'


class PostsPageComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userId : props.userId,
            posts: [],

        }
    }

    async componentDidMount() {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
            const data = await response.json()
            this.setState({posts: data})
        } catch (err) {
            console.log(err)
        }
    }

    render() {

        const posts = this.state.posts.map((post) => {
            return <PostComponent key={post.id} postId={post.id}  userId={post.userId} title={post.title} body={post.title}></PostComponent>
        })


        return (


            <div>
                 <div>
                    <div className="page-title">
                        <div>
                            <h2>
                                Posts
                            </h2>
                        </div>
                    </div>



                    <div style={{marginLeft: '100px', marginRight: '100px'}}>
                        {posts}
                    </div>
                </div>
            </div>
           
    
        )
    }
}

export default withRouter(PostsPageComponent)