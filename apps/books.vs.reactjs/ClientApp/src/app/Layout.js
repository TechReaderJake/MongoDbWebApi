import React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';

export default props => (
  <Container fluid>
    <NavMenu />
    <Container>
      {props.children}
    </Container>
  </Container>
);
