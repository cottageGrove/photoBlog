import {connect} from 'react-redux'
import AlbumsPageComponent from './AlbumsPageComponent/AlbumsPageComponent'
import { fetchAlbums, receiveAlbums } from '../redux/actions'


const getVisibleAlbums = (albums) => {
    return albums
}

const mapStateToProps = (state) => {
    return {
        albums: state.items.albums,
        userId: state.items.userId
    }
}

// function mapStateToProps(state) {
//     const { albums } = state
//     return { albums: albums }
// }

const mapDispatchToProps = dispatch => {
    return {
        getAlbums: (userId) => {
            dispatch(receiveAlbums(userId))
        }
    }
}



const VisibleAlbumsPageComponent = connect(mapStateToProps)(AlbumsPageComponent)

export default VisibleAlbumsPageComponent