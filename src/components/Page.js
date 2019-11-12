import Form from './Form';
import React from 'react';
import { Container } from '@material-ui/core'


export default function Page() {
  return (
    <Container style={{ flexGrow: '10', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Form />
    </Container>
  )
}



