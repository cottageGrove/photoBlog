import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './photoComponent.css'

import PhotosPageComponent from '../../page-components/PhotosPageComponent/PhotosPageComponent'

import {
    BrowserRouter as Router, 
    Switch, 
    Route,
  } from 'react-router-dom'


class PhotoComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            albumId: props.albumId,
            photoId: props.id,
            url: props.url,
            title: props.title,
            thumbnailUrl: props.thumbnailUrl
        }

        this.goToPhotos = this.goToPhotos.bind(this)
    }

    goToPhotos() {
        console.log('Going to photos')
    }

    

    render() {

        return (

            <div className="box">
                
                <img src={this.props.thumbnailUrl} />
                <Link to={{pathname: `/photon/albums/${this.props.albumId}/photos`}}>

                </Link>
            </div>

        )
    }
}

export default PhotoComponent