import React, {Component} from 'react'
import TextInput from '../molecules/TextInput'
import {Field, Formik} from 'formik'
import * as Yup from 'yup'
import isEmpty from 'lodash/isEmpty'
import {Button} from "../atoms/Button/Button";
import {Layout} from "../atoms/Layout";
import {Redirect} from 'react-router-dom'

export class LoginForm extends Component {
  render() {
    return (
      <Layout>
        <Formik
          validationSchema={Yup.object().shape({
            login: Yup.string().email("Zadejte správný tvar emailové adresy")
              .required('Email je povinný.'),
            password: Yup.string()
              .min(5, 'Heslo musí mít nejméně 5 znaků.')
              .required('Heslo je povinné.'),
          })}
          initialValues={{
            login: '@',
            password: '',
          }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              return <Redirect to={"/admin"}/>
            }, 1000)


          }}
          render={({values, touched, errors, dirty, isSubmitting}) => (
            <form action={"/admin"}>
              <Field
                type="text"
                name="login"
                label="Email"
                className={"admin-input"}
                component={TextInput}
                 onChange = {(event,newValue) => this.setState({username:newValue})}
              />
              <Field
                type="password"
                name="password"
                label="Heslo"
                className={"admin-input"}
                component={TextInput}
                onChange = {(event,newValue) => this.setState({password:newValue})}
              />
              <Button
                type="submit"
                variant={"read"}
                className={"container"}
                title={"Přihlásit se"}
                disabled={isSubmitting || !isEmpty(errors) || !dirty}
                onClick={(event) => this.handleClick(event)}
              />

            </form>
          )}
        />
      </Layout>
    )
  }
}
