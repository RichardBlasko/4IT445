import React, {Component} from 'react'
import TextInput from '../molecules/TextInput'
import Textarea from '../molecules/Textarea'
import {Field, Formik} from 'formik'
import * as Yup from 'yup'
import isEmpty from 'lodash/isEmpty'
import {Button} from "../atoms/Button/Button";
import {Layout} from "../atoms/Layout";
import {Redirect} from 'react-router-dom'
import {Row} from "../atoms/Row";

export class AddPreventionForm extends Component {
  render() {
    return (
      <Layout>
        <Formik
          validationSchema={Yup.object().shape({
            name: Yup.string()
              .min(3, 'Název musí mít nejméně 3 znaky.')
              .required('Název je povinný.'),
            description: Yup.string()
              .min(5, 'Popis musí mít nejméně 5 znaků.')
              .required('Popis prevence je povinný.'),
            reason: Yup.string()
              .min(5, 'Duvod musí mít nejméně 5 znaků.')
              .required('Duvod je povinný.'),
          })}
          initialValues={{
            name: '',
            description: '',
            reason: '',
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
                name="name"
                label="Název"
                className={"admin-input"}
                component={TextInput}
              />
              <Field
                type="text"
                name="description"
                label="Popis"
                className={"admin-input"}
                component={Textarea}
              />
              <Field
                type="text"
                name="reason"
                label="Duvod"
                className={"admin-input"}
                component={Textarea}
              />
              <Row className={"justify-content-center"}>
                <Button
                  type="submit"
                  variant={"form"}
                  className={"container"}
                  title={"Přidat prevenci"}
                  disabled={isSubmitting || !isEmpty(errors) || !dirty}
                />
              </Row>
            </form>
          )}
        />
      </Layout>
    )
  }
}
