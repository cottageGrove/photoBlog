import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import PhotosPageComponent from '../../page-components/PhotosPageComponent/PhotosPageComponent'
import './albumComponent.css'

import {
    BrowserRouter as Router, 
    Switch, 
    Route,
  } from 'react-router-dom'


class AlbumComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userId: props.userId,
            albumId: props.id,
            title: props.title
        }

        this.goToPhotos = this.goToPhotos.bind(this)
    }

    goToPhotos() {
        //Connect to redux
    }

    render() {

        return (
            <div onClick={this.goToPhotos}>
                <Link to={{pathname: `/photon/albums/${this.props.albumId}/photos`}}>
                    <div className="box">

                    </div>

                    <div className ="album-title">
                        {this.props.title}
                    </div>
                                        
                </Link>
            </div>

        )
    }
}

export default AlbumComponent