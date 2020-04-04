
import React, {Component} from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navigationBarComponent.css'



class NavigationBarComponent extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className="navbar">
                <ul className="nav-container">


                    
                    <li className="item">
                        <NavLink to ="/photon/albums"
                                 activeClassName="selected-link">

                            Albums
                        </NavLink>
                    </li>
                    <li className="item">
                        <NavLink to="/photon/posts"
                                 activeStyle={{
                                    textDecoration: 'none',
                                    color: 'black'
                                 }}>
                            Posts
                        </NavLink>
                    </li>
                </ul>

            </div>
        )
    }
}

export default NavigationBarComponent