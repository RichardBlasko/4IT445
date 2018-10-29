import React from 'react';
import {Row} from "../atoms/Row";
import {Layout} from "../atoms/Layout";
import {Field, Formik} from 'formik'
import * as Yup from 'yup'
import {Button} from "../atoms/Button/Button";
import {RadioButtonGroup} from "./RadioButtonGroup";
import {RadioButton} from "./RadioButton";
import {Column} from "../atoms/Column";
import {ListInlineItem} from "../atoms/List/ListInlineItem";
import {ListInline} from "../atoms/List/ListInline";
import InputRangeCustom from "../molecules/InputRangeCustom";
import {SelectWithLabel} from "./SelectWithLabel";


export class FilterBoxFormik extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: {min: 2, max: 10},
    };
  }

  render() {
    let {anamnesis, styles} = this.props;

    return (
      <form>
        <Row className={"justify-content-center pt-2 mb-3"}>
          <Layout className={"col-md-8"}>

            <Formik
              initialValues={{
                age: 24,
              }}
              validationSchema={Yup.object().shape({
                gender: Yup.string().required("Vyberte pohlaví"),
              })}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                }, 500);
              }}
              render={({
                         handleSubmit,
                         setFieldValue,
                         setFieldTouched,
                         values,
                         errors,
                         touched,
                        dirty,
                         isSubmitting
                       }) => (
                <form onSubmit={handleSubmit} className={"form-group"}>
                  <Row className={"filter-panel"}>
                    <Column md={3}>
                      <RadioButtonGroup
                        id="radioGroup"
                        label="Pohlaví"
                        value={values.gender}
                        error={errors.gender}
                        touched={touched.gender}
                      >
                        <ListInline className={"filter-item"}>
                          <ListInlineItem>
                            <Field
                              component={RadioButton}
                              name="gender"
                              id="man"
                              label="Muž"
                            />
                          </ListInlineItem>
                          <ListInlineItem>
                            <Field
                              component={RadioButton}
                              name="gender"
                              id="woman"
                              label="Žena"
                            />
                          </ListInlineItem>
                        </ListInline>
                      </RadioButtonGroup>
                    </Column>
                    <Column md={3}>
                      <Field
                        type="number"
                        name="age"
                        className={"admin-input"}
                        component={InputRangeCustom}
                      />
                    </Column>
                    <Column md={3}>
                      <Field
                        label={"Anamneza"}
                        type="text"
                        name="anamnesis"
                        className={"admin-input form-control"}
                        value={anamnesis}
                        component={SelectWithLabel}
                      />
                    </Column>
                    <Column md={3}>
                      <Field
                        label={"Životní styl"}
                        type="text"
                        name="style"
                        className={"admin-input form-control"}
                        value={styles}
                        component={SelectWithLabel}
                      />
                    </Column>
                  </Row>
                  <Row className={"justify-content-center"}>
                    <Button
                      type="submit"
                      variant={"filter"}
                      title={"Najít prevence"}
                    />
                  </Row>
                </form>
              )}
            />

          </Layout>
        </Row>
      </form>)
  }
}

