import React, {Component} from 'react';

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

import api from '../../api';
import { Formik } from 'formik';

export class AdminPartnersForm extends Component {
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
                <Layout className="col-md-9">
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
                        const { id, nazevDiagnoza, popisDiagnoza } = diagnozy;
                      return {label: diagnozy.nazevDiagnoza, value: diagnozy.nazevDiagnoza}
                    })}
                    name="preventions"
                    placeholder="Vyber..."
                  />
                </Layout>
              </Row>

              <Row>
                <Layout className="col-md-9">
                  <InputWithLabel
                    id="kontaktPartner"
                    label="Webová stránka patnera"
                    placeholder="Zde uveďte webovú stránku partnera"
                    value={values.kontaktPartner}
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                    label="Adresa obrazka patnera"
                    placeholder="Zde uveďte adresu obrazka partnera"
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
