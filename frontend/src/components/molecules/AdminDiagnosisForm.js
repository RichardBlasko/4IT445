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

export class AdminDiagnosisForm extends Component {
  render() {
    const initialValues = {
      nazevDiagnoza: '',
      popisDiagnoza: ''
    };

    return (
    <Layout className="container100 page-background-overlay">
      <Row className={"justify-content-center"}>
        <Column lg={10} md={10} sm={12} xs={12} className="pt-5">
          <Layout className="adminForm">
            <Link to={"/admin/Diagnózy"}>
              <Button  variant="admin" type="submit">
                <FontIcon  icon={"times"}/>
              </Button>
            </Link>
            <Heading level={3} className={"pb-3"}>Diagnóza</Heading>

            <Formik
              initialValues={initialValues}
              onSubmit={(values, actions) => {
                console.log(values);
                api.post('http://dev.backend.team03.vse.handson.pro/api/diagnozy', values)
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
                      id="nazevDiagnoza"
                      label="Název diagnózy"
                      placeholder="Zde uveďte název diagnózy"
                      value={values.nazevDiagnoza}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <TextareaWithLabel
                      id="popisDiagnoza"
                      label="Popis diagnózy"
                      placeholder="Zde uveďte popis diagnózy"
                      value={values.popisDiagnoza}
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
