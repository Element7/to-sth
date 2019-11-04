import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';


class Header extends Component {


    render() {
        return (
            <div>
                <ul>
                    <NavLink to='/'><li>add</li></NavLink>
                    <NavLink to='/AppToDo'> <li>still to do</li></NavLink>
                    <NavLink to='/done'> <li>already done</li></NavLink>
                </ul>
            </div>
        )
    }
}

export default Header;