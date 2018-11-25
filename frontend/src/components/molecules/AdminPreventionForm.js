import React, {Component} from 'react';

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

export class AdminPreventionForm extends Component {
  state = {
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

  handleChange = (e) => {
    if (["nazev", "vekOd","vekDo", "periodicita"].includes(e.target.className) ) {
        let anamnezy = [...this.state.anamnezy]
        anamnezy[e.target.dataset.id][e.target.className] = e.target.value
        this.setState({ anamnezy }, () => console.log(this.state.anamnezy))
    }
    else {
        this.setState({ [e.target.name]: e.target.value })
    }
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

  handleSubmit = (e) => { e.preventDeault() }

  render() {
    const { diagnozy } = this.props;
    let {anamnezy, personalAnamnezy} = this.state
    let {lecimse, anamnesis} = this.props;

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
            <Heading level={3} className={"pb-3"}>Preventívni vyšetření</Heading>
              <form>
                <Row>
                  <Layout className="col-md-6">
                    <InputWithLabel
                      id="Název"
                      label="Název vyšetření"
                      placeholder="Zde uveďte název preventívniho vyšetření"
                    />
                    <TextareaWithLabel
                      id="popisPrevence"
                      label="Popis prevence"
                      placeholder="Zde uveďte popis prevence"
                    />
                  </Layout>

                  <Layout  className="col-md-4">
                    <PeriodicitaInput/>
                    <PeriodicitaInput/>
                    <PeriodicitaInput/>
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
                      title="Uložiť"
                      variant="admin"
                      className="float-right"
                      />
                    </Link>
                  </Column>
                </Row>
              </form>
          </Layout>
        </Column>
      </Row>
    </Layout>
  );
  }
}
