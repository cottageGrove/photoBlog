import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter, 
  Switch, 
  Route,
} from 'react-router-dom'


import AlbumsPageComponent from './page-components/AlbumsPageComponent/AlbumsPageComponent';
import PhotosPageComponent from './page-components/PhotosPageComponent/PhotosPageComponent';
import PostsPageComponent from './page-components/PostsPageComponent/PostsPageComponent'

import NavigationBarComponent from './components/NavigationBarComponent/NavigationBarComponent'
import AlbumComponent from './components/AlbumComponent/AlbumComponent';
import VisibleAlbumsPageComponent from './page-components/VisibleAlbumsPageComponent';


const userId = 1

function App() {
  return (

    <BrowserRouter>

      <NavigationBarComponent></NavigationBarComponent>


      <Switch>
        <Route path='/photon/albums/:albumId/photos'>
          <PhotosPageComponent></PhotosPageComponent>
        </Route>
        <Route path='/photon/albums'>
          <VisibleAlbumsPageComponent></VisibleAlbumsPageComponent>

          {/* <AlbumsPageComponent userId={userId}></AlbumsPageComponent> */}
        </Route>


        <Route path='/photon/posts/:postId/comments'>

        </Route>

        <Route path='/photon/posts'> 
          <PostsPageComponent> </PostsPageComponent>
        </Route>

        
      </Switch>
    </BrowserRouter>
 

  );
}

export default App;
