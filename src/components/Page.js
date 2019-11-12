import Form from './Form';
import React, { Component } from 'react';
import { Container } from '@material-ui/core'


export default class Page extends Component {
  render() {
    return (
      <Container style={{ flexGrow: '10', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Form />
      </Container>
    )
  }
}


