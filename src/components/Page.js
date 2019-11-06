import Form from './Form';
import React, { Component } from 'react';
import { Container } from '@material-ui/core'
import Footer from './Footer'

export default class Page extends Component {
    render() {
        return (
            <Container>
                <Form />
                <Footer></Footer>
            </Container>
        )
    }
}



