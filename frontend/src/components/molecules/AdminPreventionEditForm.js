import React, {Component} from 'react';
import { Route, Redirect } from 'react-router'

import {Layout} from '../atoms/Layout';
import {Paragraph} from '../atoms/Paragraph';
import {Row} from "../atoms/Row";
import {InputWithLabel} from "../molecules/InputWithLabel";
import {Heading} from "../atoms/Heading";
import {Button} from "../atoms/Button/Button";
import {Column} from "../atoms/Column";
import {TextareaWithLabel} from "../molecules/TextareaWithLabel";
import {MultiSelectWithLabel} from "./MultiSelectWithLabel";
import {SelectWithLabel} from "./SelectWithLabel";
import { Link } from '../atoms/Link';
import {FontIcon} from "../atoms/FontIcon";
import {PeriodicitaInput} from "../molecules/PeriodicitaInput";
import {AnamnesisAddInputForm} from "../molecules/AnamnesisAddInputForm";

import { withRouter } from 'react-router';
import { compose } from 'recompose';

import api from '../../api';
import { Formik } from 'formik';
import {PREVENTIONS} from "../../mocks/Preventions";

class AdminPreventionEditForm_ extends Component {

  state = {
    redirectUrl: null,

    anamnezy: [{
      nazev:"",
      vekOd:null,
      vekDo:null,
      periodicita: null
    }],
    personalAnamnezy: [{
      nazev:"",
      vekOd:null,
      vekDo:null,
      periodicita: null
    }],
  }

  addAnamnesis = (e) => {
    this.setState((prevState) => ({
      anamnezy: [...prevState.anamnezy,
        {
          nazev:"",
          vekOd:null,
          vekDo:null,
          periodicita: null
      }],
    }));
  }

  addPersonalAnamnesis = (e) => {
    this.setState((prevState) => ({
      personalAnamnezy: [...prevState.personalAnamnezy,
        {
          nazev:"",
          vekOd:null,
          vekDo:null,
          periodicita: null
      }],
    }));
  }

  render() {

    const { diagnozy } = this.props;
    let {anamnezy, personalAnamnezy} = this.state
    let {lecimse, anamnesis} = this.props;

    const initialValues = {
      nazevPrevence: PREVENTIONS[this.props.match.params.id-1].nazevPrevence,
      duvodPrevence: PREVENTIONS[this.props.match.params.id-1].duvodPrevence,
      popisPrevence: PREVENTIONS[this.props.match.params.id-1].popisPrevence,
      pohlavi: PREVENTIONS[this.props.match.params.id-1].pohlavi,
      obrazek: PREVENTIONS[this.props.match.params.id-1].obrazek
    };

    const { redirectUrl } = this.state;

    return (
      <Layout className=" page-background-overlay">
        <Row className={"justify-content-center"}>
          <Column lg={10} md={10} sm={12} xs={12} className="pt-5">
            <Layout className="adminForm">
              <Link to={"/admin/Prevence"}>
                <Button  variant="admin" type="submit">
                  <FontIcon  icon={"times"}/>
                </Button>
              </Link>
            <Heading level={3} className={"pb-3"}>Úprava preventívniho vyšetření</Heading>

            {redirectUrl && <Redirect to={redirectUrl} />}

            <Formik
              initialValues={initialValues}
              onSubmit={(values, actions) => {
                PREVENTIONS[this.props.match.params.id-1].nazevPrevence = values.nazevPrevence;
                console.log(PREVENTIONS[this.props.match.params.id-1].nazevPrevence)
                PREVENTIONS[this.props.match.params.id-1].duvodPrevence = values.duvodPrevence;
                console.log(PREVENTIONS[this.props.match.params.id-1].duvodPrevence)
                PREVENTIONS[this.props.match.params.id-1].popisPrevence = values.popisPrevence;
                console.log(PREVENTIONS[this.props.match.params.id-1].popisPrevence)
                PREVENTIONS[this.props.match.params.id-1].pohlavi = values.pohlavi;
                console.log(PREVENTIONS[this.props.match.params.id-1].pohlavi)
                PREVENTIONS[this.props.match.params.id-1].obrazek = values.obrazek;
                console.log(PREVENTIONS[this.props.match.params.id-1].obrazek)
                this.setState({ redirectUrl: '/admin/Prevence'});
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
                    <Layout className="col-md-12">
                      <InputWithLabel
                        id="Název"
                        label="Název preventívniho vyšetření"
                        placeholder="Zde uveďte název preventívniho vyšetření"
                        value={values.nazevPrevence}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Layout>
                  </Row>
                  <Row>
                    <Layout className="col-md-7">
                      <TextareaWithLabel
                        id="duvodPrevence"
                        label="Důvod prevence"
                        placeholder="Zde uveďte popis prevence"
                        value={values.duvodPrevence}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Layout>

                    <Layout className="col-md-1">
                    </Layout>

                    <Layout className="col-md-1">
                      <label className="Nadpis">
                        Pro:
                      </label>
                      <div className="custom-control custom-checkbox-inline ">
                        <input className="custom-control-input" type="checkbox" value="" id="defaultCheck1"/>
                        <label className="life-style-check" >
                          Muž
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox-inline">
                        <input className="custom-control-input" type="checkbox" value="" id="defaultCheck1"/>
                        <label className="life-style-check">
                          Žena
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </Layout>
                  </Row>
                  <Row>
                    <Layout className="col-md-7">
                      <TextareaWithLabel
                        id="popisPrevence"
                        label="Popis prevence"
                        rows={10}
                        placeholder="Zde uveďte popis prevence"
                        value={values.popisPrevence}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Layout>

                    <Layout  className="col-md-4">
                      <PeriodicitaInput vekOd="18" vekDo="39" vekOdId = "vekOd" vekDoId = "vekDo" periodicitaId = "periodicita"/>
                      <PeriodicitaInput vekOd="40" vekDo="49" vekOdId = "vekOd" vekDoId = "vekDo" periodicitaId = "periodicita"/>
                      <PeriodicitaInput vekOd="50" vekDo="199" vekOdId = "vekOd" vekDoId = "vekDo" periodicitaId = "periodicita"/>
                    </Layout>
                  </Row>


                  <Heading level={4} className={"pb-3"}>Diagnózy spojené s prevencí</Heading>
                  <Row>
                    <Layout className="col-md-10">
                      <MultiSelectWithLabel
                        id="diagnosis"
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
                    <Heading level={1} className={"pb-3"}></Heading>
                  </Row>

                  <Row>
                    <Layout className="col-md-12">
                      <Heading level={4} className={"pb-3"}>Výskyt nemocí v rodine</Heading>
                    </Layout>
                    <Layout className="col-md-12">
                      <AnamnesisAddInputForm anamnezy={anamnezy} anamnesis={anamnesis}/>
                    </Layout>
                    <Layout className="col-md-1">
                      <Button  variant="admin" onClick={this.addAnamnesis}>
                         <FontIcon  icon={"plus"}/> Přidej
                      </Button>
                    </Layout>
                  </Row>

                  <Row>
                    <Heading level={1} className={"pb-3"}></Heading>
                  </Row>

                  <Row>
                    <Layout className="col-md-12">
                      <Heading level={4} className={"pb-3"}>Osobní diagnóza</Heading>
                    </Layout>
                    <Layout className="col-md-12">
                      <AnamnesisAddInputForm anamnezy={personalAnamnezy} anamnesis={anamnesis}/>
                    </Layout>
                    <Layout className="col-md-1">
                      <Button  variant="admin" onClick={this.addPersonalAnamnesis}>
                         <FontIcon  icon={"plus"}/> Přidej
                      </Button>
                    </Layout>
                  </Row>

                  <Row>
                    <Heading level={1} className={"pb-3"}></Heading>
                  </Row>

                  <Heading level={4} className={"heading pb-3"}>Životní styl</Heading>
                  <Layout className="col-md-6">
                    <Row>
                      <Column md={3}>
                        <div className="custom-control custom-checkbox-inline ">
                          <input className="custom-control-input" type="checkbox" value="" id="defaultCheck1"/>
                          <label className="life-style-check" >
                            Kuřák
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                      </Column>
                      <Column md={4}>
                        <InputWithLabel
                          id="periodicita"
                          type="number"
                          label="Periodicita (v měsících)"
                          min={1}
                          value={12}
                        />
                      </Column>
                    </Row>

                    <Row>
                      <Column md={3}>
                      <div className="custom-control custom-checkbox-inline">
                        <input className="custom-control-input" type="checkbox" value="" id="defaultCheck1"/>
                        <label className="life-style-check">
                          Obézní
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      </Column>
                      <Column md={4}>
                        <InputWithLabel
                          id="periodicita"
                          type="number"
                          label="Periodicita (v měsících)"
                          min={1}
                          value={12}
                        />
                      </Column>
                    </Row>
                  </Layout>

                  <Row>
                    <Column xs={12}>
                      <Link to="/admin">
                        <Button
                          variant="admin"
                          className="float-right"
                          type="submit"
                          disabled={isSubmitting}>
                          Uložiť
                        </Button>
                      </Link>
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

const Page = props => <AdminPreventionEditForm_ {...props} />

export const AdminPreventionEditForm = compose(withRouter)(Page)
