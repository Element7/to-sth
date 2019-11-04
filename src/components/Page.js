import Header from './Header';
import Form from './Form';
import React, { Component } from 'react'

export default class Page extends Component {
    render() {
        return (
            <div>
                <Header />
                <Form />
            </div>
        )
    }
}
