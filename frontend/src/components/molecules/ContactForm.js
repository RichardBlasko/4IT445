import PropTypes from 'prop-types';
import React, { Component } from 'react';

import {Row} from "../atoms/Row";
import {Layout} from '../atoms/Layout';
import {InputWithLabel} from "../molecules/InputWithLabel";
import {TextareaWithLabel} from "../molecules/TextareaWithLabel";
import {Button} from "../atoms/Button/Button";

import ReCAPTCHA from "react-google-recaptcha";
import {Formik} from 'formik'
import * as Yup from 'yup'
import isEmpty from 'lodash/isEmpty'

const TEST_SITE_KEY = "6LdWooYUAAAAAJXTKTSjkSFgKqkJ20fEUiYum_Ul";
const DELAY = 1500;

export default class ContactForm extends Component {
  state = {
    message: '',
    formSubmitted: false,
    load: false,
  };

  handleCancel = this.handleCancel.bind(this);
  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);

  static sender = 'sender@example.com';

  componentDidMount() {
      this.setState({ load: true });
  }

  openAlert() {
    alert('Zpráva úspěšně odeslaná.')
  }

  handleCancel() {
    this.setState({
      message: ''
    });
  }

  handleChange(event) {
    this.setState({
      message: event.target.value
    });
  }


  handleSubmit(event) {
    event.preventDefault();

    const template = "contactform"
    const receiverEmail = "gross.niky@gmail.com"


    this.sendMessage(
      template,
      this.sender,
      receiverEmail,
      this.state.message
    );

    this.setState({
      formSubmitted: true
    });

    this.openAlert()
  }

  sendMessage(templateId, senderEmail, receiverEmail, message) {
    window.emailjs
      .send('gmail', templateId, {
        senderEmail,
        receiverEmail,
        message
      })
      .then(res => {
        this.setState({
          formEmailSent: true
        });
      })
      .catch(err => console.error('Failed to send feedback. Error: ', err));
  }

  render() {

      const reCaptchaRef = React.createRef();

    const { load } = this.state || {};

    return (
      <Formik
        validationSchema={Yup.object().shape({
          email: Yup.string().email("Zadejte správný tvar emailové adresy")
            .required('Email je povinný.'),
        })}
        render={({
          values,
          handleBlur,
          handleChange,
          handleSubmit,
          errors,
          dirty,
          isSubmitting,
        }) => (

      <form onSubmit={this.handleSubmit}>
        <Row>
          <Layout className="col-md-6">
            <InputWithLabel
              id="name"
              label="Jméno"
              placeholder="Vaše jméno"
              onChange={this.handleChange}
            />
          </Layout>
          <Layout className="col-md-6">
            <InputWithLabel
              id="email"
              label="Email"
              placeholder="Váš email"
              type="email"
              required
              onChange={this.handleChange}
            />
          </Layout>
        </Row>
        <TextareaWithLabel
          id="message"
          label="Zpráva"
          required
          onChange={this.handleChange}
          value={this.state.message}
        />
        <Layout className="col-md-5">
        {load && (
          <ReCAPTCHA
            style={{ display: "inline-block" }}
            theme="dark"
            ref={reCaptchaRef}
            sitekey="6LcmI4cUAAAAAFt0K4YH_YMKrRg7tIHhpcGhhbO3"
            onChange={this.handleChange}
            asyncScriptOnLoad={this.asyncScriptOnLoad}
          />
        )}
        </Layout>
        <Layout className="col-md-3">
        <Button
          title="Odeslat zprávu"
          variant="send"
          value="Submit"
          type="submit"
          className={"mb-3"}
          disabled={isSubmitting || !isEmpty(errors)}/>
        </Layout>
      </form>

      )}
    />
    );
  }
}

ContactForm.propTypes = {
  env: PropTypes.object.isRequired
};
