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



class AdminPribehyEditFormRaw extends Component {
    state = {
    redirectUrl: null,
  };

  render() {
    const pribeh  = this.props.location.state.pribeh;
    const { diagnozy } = this.props;
    const initialValues = {
      id: pribeh.id,
      autorPribeh: pribeh.autorPribeh,
      autorVek: pribeh.autorVek,
      textPribeh: pribeh.textPribeh,
      idDiagnozy: null
    };

    const { redirectUrl } = this.state;

    return (
    <Layout className=" page-background-overlay">
      <Row className={"justify-content-center"}>
        <Column lg={10} md={10} sm={12} xs={12} className="pt-5">
          <Layout className="adminForm">
            <Link to={"/admin/Příběhy"}>
              <Button  variant="admin" type="submit">
                <FontIcon  icon={"times"}/>
              </Button>
            </Link>
            <Heading level={3} className={"pb-3"}>Úprava příběhů</Heading>

            {redirectUrl && <Redirect to={redirectUrl} />}

            <Formik
              initialValues={initialValues}
              onSubmit={(values, actions) => {

            const jsonData = {
	"items":
	[
		{
      "id": values.id,
      "autorPribeh": values.autorPribeh,
      "autorVek": values.autorVek,
      "textPribeh": values.textPribeh,

    }
	]
};
                api.put('http://dev.backend.team03.vse.handson.pro/api/pribehy', jsonData
            )
                  .then(({ data }) => {
                    actions.setSubmitting(false);
                    this.setState({ redirectUrl: '/admin/Příběhy' });
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
                    id="autorPribeh"
                    label="Autor příběhu"
                    placeholder="Zde uveďte jméno autora příběhu"
                    value={values.autorPribeh}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <InputWithLabel
                    id="autorVek"
                    label="Věk autora"
                    placeholder="Zde uveďte věk autora příběhu"
                    type="number"
                    value={values.autorVek}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Layout>

                <Layout  className="col-md-3">
                  <MultiSelectWithLabel
                    id="idDiagnozy"
                    label="Seznam diagnóz"
                    value={pribeh.idDiagnozy}
                    multi
                    options={diagnozy.map(diagnozy => {
                      return {label: diagnozy.nazevDiagnoza, value: diagnozy.idDiagnozy}
                    })}
                    name="preventions"
                    placeholder="Vyber..."
                  />
                </Layout>
              </Row>

              <Row>
                <Layout className="col-md-9">
                  <TextareaWithLabel
                    id="textPribeh"
                    label="Text příběhu"
                    rows="10"
                    placeholder="Zde uveďte text příběhu"
                    value={values.textPribeh}
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
 }
}

const Page = props => <AdminPribehyEditFormRaw {...props} />

export const AdminPribehyEditForm = compose(withRouter)(Page)
