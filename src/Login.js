import React, { Component } from 'react';
import { Redirect, History, withRouter } from "react-router-dom";
import { history } from './routing.js';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';
import axios from 'axios'
import ls from 'local-storage'
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showWarning: false
    }
  }
  render() {
    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <Header as="h2" textAlign="center">
            Login
      </Header>
          <Segment>
            <Form size="large" action={this.handleLogin}>
              <Form.Input
                fluid
                id="email"
                icon="user"
                iconPosition="left"
                placeholder="Email address"
              />
              <Form.Input
                fluid
                id="password"
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />

              <Button color="blue" fluid size="large" type="submit" onClick={this.handleLogin}>
                Login
              </Button>
            </Form>
          </Segment>
          <Message>
            Not registered yet? <a href={{}}>Sign Up</a>
          </Message>
          <Message
            style={{ display: this.state.showWarning ? 'block' : 'none' }}
            error
            header='Action Forbidden'
            content='You can only sign up for an account once with a given e-mail address.'
          />
        </Grid.Column>
      </Grid>
    );
  }
  showWarning = () => {

    this.setState(state => ({ showWarning: true }));

  }
  handleLogin = () => {

    var apiBaseUrl = "http://localhost:3000/"
    var payload = {
      "email": document.getElementById("email").value,
      "password": document.getElementById("password").value
    }
    console.log(payload)
    axios.post(apiBaseUrl + "login", payload).then(
      function (response) {
        if (response.status === 204) {
          console.log('hhhh')
          localStorage.setItem("Authorazation", response.headers.authorization)
          history.push('/hotels')
        }

      }
    ).catch(function (error) {



    })
  }
}
export default withRouter(Login);