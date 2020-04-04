import React from 'react'
import renderer from "react-test-renderer"
import { shallow, mount } from 'enzyme'
// import {expect} from 'chai'
import  AlbumsPageComponent  from './AlbumsPageComponent'
import { Route, Link, Router} from "react-router-dom";
import { createMemoryHistory } from 'history'


import { render, fireEvent } from '@testing-library/react'
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";


import App from '../../App'
import {act} from 'react-dom/test-utils'

import {MemoryRouter} from 'react-router-dom'


import AlbumComponent from '../../components/AlbumComponent/AlbumComponent'


const mockStore = configureMockStore();
const store = mockStore({});

describe('<AlbumPageComponent>', () => {
    describe('Albums', () => {
        it('whether Album Component is in AlbumsPageComponent', () => {
            const wrapper = mount(<AlbumsPageComponent />)


            expect(wrapper.find('AlbumComponent')).toBeTruthy()

            // expect(wrapper).toContainMatchingElement('AlbumComponent')

        })
    })
})


test('navigate to /photos', () => {
    const history = createMemoryHistory()
    const { container, getByText } = render(
      <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
      </Provider>
    )
    // verify page content for expected route
    // often you'd use a data-testid or role query, but this is also possible
    expect(container.innerHTML).toMatch('Albums')
  
    fireEvent.click(getByText(/Albums/))
  
    // check that the content changed to the new page
    expect(container.innerHTML).toMatch('Photos')
  })

// test('AlbumComponent', () => {

//         let history, location;
//         const albumWrapper = shallow( 
 
//             <MemoryRouter initialEntries={["/my/initial/route"]}>
//                 <App />
//                 <Route
//                 path="*"
//                 render={({ history, location }) => {
//                     history = history;
//                     location = location;
//                     return null;
//                 }}
//                 />
//             </MemoryRouter>)


//         act(()=> {

//             // const link = albumWrapper.find('Link')
//             // link.simulate('click')

//             //need to assert some changing value

//         })

//         expect(location.pathname).toBe('/photos')
//         const searchParams = new URLSearchParams(location.search)
//         expect(searchParams.has('userId')).toBe(true)



// })
