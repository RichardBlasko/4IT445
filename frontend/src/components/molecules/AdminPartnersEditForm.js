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
import api from '../../api';
import { withRouter } from 'react-router';
import { compose } from 'recompose';
import { Formik } from 'formik';
import isEmpty from 'lodash/isEmpty';

class AdminPartnersEditFormRaw extends Component {

  state = {
    redirectUrl: null,
  };

  render() {

    const { diagnozy } = this.props;
    const partner  = this.props.location.state.partner;
    const initialValues = {
      id: partner.id,
      nazevPartner: partner.nazevPartner,
      popisPartner: partner.popisPartner,
      kontaktPartner: partner.kontaktPartner,
      logoPartner: partner.logoPartner,
      obrazokPartner: partner.obrazokPartner,
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
            <Heading level={3} className={"pb-3"}>Úprava partnerů</Heading>

            {redirectUrl && <Redirect to={redirectUrl} />}

            <Formik
              initialValues={initialValues}
              onSubmit={(values, actions) => {

                const idToEdit = values.id;
                const nazevToEdit = values.nazevPartner;
                const popisToEdit = values.popisPartner;
                const kontaktToEdit = values.kontaktPartner;
                const logoToEdit = values.logoPartner;
                const obrazokToEdit = values.obrazokPartner;
                const jsonData = {
	"items":
	[
		{
      "id": values.id,
      "nazevPartner": values.nazevPartner,
      "popisPartner": values.popisPartner,
      "kontaktPartner": values.kontaktPartner,
      "logoPartner": values.logoPartner,
      "obrazokPartner": values.obrazokPartner
    }
	]
};

                api.put('http://dev.backend.team03.vse.handson.pro/api/partneri', jsonData



              )
                  .then(({ data }) => {
                    actions.setSubmitting(false);
                    console.log('-> data', data);
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

const Page = props => <AdminPartnersEditFormRaw {...props} />

export const AdminPartnersEditForm = compose(withRouter)(Page)
