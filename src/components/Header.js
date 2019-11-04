import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <div>
                <ul>
                    <NavLink to='/todo'> <li>still to do</li></NavLink>
                    <NavLink to='/done'> <li>already done</li></NavLink>
                </ul>
            </div>
        )
    }
}


export default Header;