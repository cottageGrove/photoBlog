import React, {Component} from 'react'
import { withRouter } from 'react-router'

import PhotoComponent from '../../components/PhotoComponent/PhotoComponent'
import { Link, NavLink } from 'react-router-dom'
import '../../page-components/pageComponent.css'

class PhotosPageComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            photos: [],
            isLoading: true,
            albumId: 0
        }
    }

    async componentDidMount() {

        let albumId = this.props.match.params.albumId
        this.setState({albumId : albumId})

        try {

            const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`,{
                mode: 'cors'
            })

            const data =  await response.json()

            this.setState({photos: data,
                          isLoading: false})

        } catch(err) {
            console.log(err)
        }

    }

    render() {

        const albumId = this.state.albumId
        const photos = this.state.photos.map((photo) => {

            return <PhotoComponent key={photo.id} photoId={photo.id} albumId={photo.albumId} title={photo.title} url={photo.url} thumbnailUrl={photo.thumbnailUrl}></PhotoComponent>
        })

        return (
            <div>

                    <div className="page-title">
                        <div>
                            <h2>
                                Photos
                            </h2>
                        </div>
                    </div>

                    <div className="links-container">
                                <NavLink to ="/photon/albums"
                                        className="previous-link">
                                    Albums / <span> </span>
                                </NavLink>
                                {albumId} / 
                                Photos
                    </div>

                {/* {isLoading ? 'loading' : ''} */}
                {/* {loadingStatus} */}
                <div className="grid-container">
                    {photos}
                </div>
            </div>
        )
    }
}

export default withRouter(PhotosPageComponent)