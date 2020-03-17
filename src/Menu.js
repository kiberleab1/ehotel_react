import React from 'react';
import {Link} from 'react-router-dom'
import { Container, Image, Menu, } from 'semantic-ui-react';

export default () => (
  <Menu>
    <Container>
      <Menu.Item as="a" header>
        <Menu.Item>
          E-hotel
        </Menu.Item>
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item as="a" name="login">
          Login
        </Menu.Item>

        <Menu.Item as="a" name="register">
          <Link to="/hotels">Register</Link>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);
