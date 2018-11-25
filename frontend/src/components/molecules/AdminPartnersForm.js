import React, {Component} from 'react';

import {Row} from "../atoms/Row";
import {Button} from "../atoms/Button/Button";
import {Column} from "../atoms/Column";
import {Layout} from '../atoms/Layout';
import {InputWithLabel} from "../molecules/InputWithLabel";
import {TextareaWithLabel} from "../molecules/TextareaWithLabel";
import {Heading} from "../atoms/Heading";
import { Link } from '../atoms/Link';
import {FontIcon} from "../atoms/FontIcon";

import api from '../../api';
import { Formik } from 'formik';

export class AdminPartnersForm extends Component {
  render() {
    const initialValues = {
      nazevPartner: '',
      popisPartner: '',
      odkazPartner: '',
      logoPartner: '',
      obrazokPartner: '',
      idDiagnoza: null,
    };

    return (
    <Layout className="container100 page-background-overlay">
      <Row className={"justify-content-center"}>
        <Column lg={10} md={10} sm={12} xs={12} className="pt-5">
          <Layout className="adminForm">
            <Link to={"/admin/Partneři"}>
              <Button  variant="admin" type="submit">
                <FontIcon  icon={"times"}/>
              </Button>
            </Link>
            <Heading level={3} className={"pb-3"}>Partnerský projekt</Heading>

            <Formik
              initialValues={initialValues}
              onSubmit={(values, actions) => {
                console.log(values);
                api.post('http://dev.backend.team03.vse.handson.pro/api/partneri', values)
                  .then(({ data }) => {
                    actions.setSubmitting(false);
                    console.log('-> data', data);
                  })
              }}
              render={({
                values,
                handleBlur,
                handleChange,
                handleSubmit,
                isSubmitting,
              }) => (

            <form onSubmit={handleSubmit}>
              <Row>
                <Layout className="col-md-10">
                  <InputWithLabel
                    id="nazevPartner"
                    label="Název patnera"
                    placeholder="Zde uveďte název partnera"
                    value={values.nazevPartner}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <TextareaWithLabel
                    id="popisPartner"
                    label="Popis partnera"
                    placeholder="Zde uveďte popis partnera"
                    value={values.popisPartner}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Layout>
                <Column xs={12}>
                    <Button
                      variant="admin"
                      className="float-right"
                      type="submit"
                      disabled={isSubmitting}>
                      Uložiť
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
   //console.log(values)
 }
}
