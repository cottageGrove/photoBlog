import React, {Component} from 'react'
import AlbumComponent from '../../components/AlbumComponent/AlbumComponent'
import PhotosPageComponent from '../PhotosPageComponent/PhotosPageComponent'
import { withRouter } from 'react-router'
import '../../page-components/pageComponent.css'

import {
    BrowserRouter as Router, 
    Switch, 
    Route,
} from 'react-router-dom'

import {
    REQUEST_ALBUMS,
    RECEIVE_ALBUMS,
    fetchAlbumsIfNeeded
} from '../../redux/actions'
import { connect } from 'react-redux'


class AlbumsPageComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userId : props.userId,
            albums: []
        }

        this.getAlbums = this.getAlbums.bind(this)
    }

    componentDidMount() {
        this.getAlbums()
    }

    async getAlbums() {

        const {dispatch} = this.props
        //need to assign the UserId depending on the input 

        dispatch(fetchAlbumsIfNeeded(1))

        const {albums} = this.props
        this.setState({albums: albums})
    }

    render() {

        const albums = this.state.albums

        console.log(albums)

        const albumCollection = albums.map((album) => {
            return <AlbumComponent userId={album.userId} albumId={album.id} key={album.id} title={album.title}></AlbumComponent>
        })

        
        return (


            <div>
                 <div>
                    <div className="page-title">
                        <div>
                            <h2>
                                Album
                            </h2>
                        </div>
                    </div>

                    <div className="grid-container">

                        {albumCollection}
                    </div>
                </div>
            </div>
           
    
        )
    }
}




export default AlbumsPageComponent