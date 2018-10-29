import React, {Component} from 'react';

import {Layout} from '../atoms/Layout';
import {Heading} from "../atoms/Heading";
import {Row} from "../atoms/Row";
import {Column} from "../atoms/Column";
import {LoginForm} from '../molecules/LoginForm'

export class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: {
        message: ''
      }
    }
  }

  logIn() {
    if (this.state.username.length < 3) {
      this.setState({error: 'erroriQ'})
      alert('Make sure username is at least 3 character long!');
    } else if (this.state.password.length < 4) {
      alert('Make sure password is at least 4 character long!');
    } else {
      alert('Vsetko v pohode');
    }
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  render() {
    return (
      <Layout className="page-background">
        <Layout className="page-background-overlay">
          <Row className={"justify-content-center"}>
            <Column lg={10} md={10} sm={12} xs={12}>
              <Layout className="container100">
                <Layout className="center-wrapper form-wrapper">
                  <Heading level={2} className={"pb-3 white-text"}>
                    Přihlášení do ADMIN modulu
                  </Heading>
                  <LoginForm/>
                </Layout>
              </Layout>
            </Column>
          </Row>
        </Layout>
      </Layout>
    )
  }
}
