import React, { Component } from 'react';
import { Container } from '@material-ui/core'

class Done extends Component {
    render() {
        return (
            <Container style={{ flexGrow: '10', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                done
            </Container>
        )
    }
}

export default Done;