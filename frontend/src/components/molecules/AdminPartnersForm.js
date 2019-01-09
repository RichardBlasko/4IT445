import React, {Component} from 'react';
import { Redirect } from 'react-router'

import {Row} from "../atoms/Row";
import {Button} from "../atoms/Button/Button";
import {Column} from "../atoms/Column";
import {Layout} from '../atoms/Layout';
import {InputWithLabel} from "../molecules/InputWithLabel";
import {TextareaWithLabel} from "../molecules/TextareaWithLabel";
import {MultiSelectWithLabel} from "./MultiSelectWithLabel";
import {Heading} from "../atoms/Heading";
import { Link } from '../atoms/Link';
import {FontIcon} from "../atoms/FontIcon";
import TextInput from '../molecules/TextInput'
import api from '../../api';
import {Field, Formik} from 'formik';
import * as Yup from 'yup';
import isEmpty from 'lodash/isEmpty';

export class AdminPartnersForm extends Component {
  state = {
    redirectUrl: null,
  };

  render() {
    const { diagnozy } = this.props;
    const initialValues = {
      nazevPartner: '',
      popisPartner: '',
      kontaktPartner: '',
      logoPartner: '',
      obrazokPartner: null,
      idDiagnoza: null
    };

    const { redirectUrl } = this.state;

    return (
    <Layout className=" page-background-overlay">
      <Row className={"justify-content-center"}>
        <Column lg={10} md={10} sm={12} xs={12} className="pt-5">
          <Layout className="adminForm">
            <Link to={"/admin/Partneři"}>
              <Button  variant="admin" type="submit">
                <FontIcon  icon={"times"}/>
              </Button>
            </Link>
            <Heading level={3} className={"pb-3"}>Partnerský projekt</Heading>

            {redirectUrl && <Redirect to={redirectUrl} />}

            <Formik
              validationSchema={Yup.object().shape({
                nazevPartner: Yup.string()
                  .min(3, 'Název partnera musí mít nejméně 3 znaky.')
                  .required('Název partnera je povinný.'),
                kontaktPartner: Yup.string()
                  .min(3, 'Webová stránka patnera musí mít nejméně 3 znaky.')
                  .required('Webová stránka patnera je povinná.'),
              })}
              initialValues={initialValues}
              onSubmit={(values, actions) => {
                api.post('http://dev.backend.team03.vse.handson.pro/api/partneri', values)
                  .then(({ data }) => {
                    actions.setSubmitting(false);
                    this.setState({ redirectUrl: '/admin/Partneři' });
                    window.location.reload();
                  })

              }}
              render={({
                values,
                handleBlur,
                handleChange,
                handleSubmit,
                errors,
                dirty,
                isSubmitting,
              }) => (

            <form onSubmit={handleSubmit}>
              <Row>
                <Layout className="col-md-9">
                  <Field
                    type="text"
                    name="nazevPartner"
                    label="Název partnera  *"
                    placeholder="Zde uveďte název partnera"
                    className={"admin-input"}
                    value={values.nazevPartner}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    component={TextInput}
                  />
                  <TextareaWithLabel
                    id="popisPartner"
                    label="Popis partnera"
                    placeholder="Zde uveďte popis partnera"
                    rows={10}
                    value={values.popisPartner}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Layout>

                <Layout  className="col-md-3">
                  <MultiSelectWithLabel
                    id="idDiagnoza"
                    label="Seznam diagnóz"
                    multi
                    options={diagnozy.map(diagnozy => {
                      return {label: diagnozy.nazevDiagnoza, value: diagnozy.nazevDiagnoza}
                    })}
                    name="preventions"
                    placeholder="Vyber..."
                  />
                </Layout>
              </Row>

              <Row>
                <Layout className="col-md-9">
                  <Field
                    type="text"
                    name="kontaktPartner"
                    label="Webová stránka patnera  *"
                    placeholder="Zde uveďte webovú stránku partnera"
                    className={"admin-input"}
                    value={values.kontaktPartner}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    component={TextInput}
                  />
                  <InputWithLabel
                    id="logoPartner"
                    label="URL adresa loga patnera"
                    placeholder="Zde uveďte URL adresu obrazka loga partnera"
                    value={values.logoPartner}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <InputWithLabel
                    id="obrazokPartner"
                    label="Adresa obrázka patnera"
                    placeholder="Zde uveďte adresu obrázka partnera"
                    value={values.obrazokPartner}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Layout>
                <Column xs={12}>
                    <Button
                      variant="admin"
                      className="float-right"
                      type="submit"
                      disabled={isSubmitting || !isEmpty(errors) || !dirty}>
                      Uložit
                    </Button>
                </Column>
              </Row>
            </form>
        )}
      />
          </Layout>
        </Column>
      </Row>
    </Layout>
  );
 }
}
