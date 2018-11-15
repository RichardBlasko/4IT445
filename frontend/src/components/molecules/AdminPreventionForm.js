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


export class AdminPreventionForm extends Component {
  render() {
    let {lecimse, anamnesis, diagnosis} = this.props;
    return (
      <Layout className="footer pt-5">
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
                  id="Popis"
                  label="Popis vyšetření"
                  type='text'
                />
              </Layout>
              <Layout className="col-md-6">
                <label className="Nadpis">
                  Pro:
                </label>
                  <div className="form-check gender-check">
                    <input className="form-check-input1" type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label1" htmlFor="defaultCheck1">
                      Muž
                    </label>
                  </div>
                  <div className="form-check gender-check">
                    <input className="form-check-input2" type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label2" htmlFor="defaultCheck1">
                      Žena
                    </label>
                  </div>
                  <Row>
                    <Column md={3}>
                      <InputWithLabel
                        id="periodicita"
                        type="number"
                        label="Periodicita (v měsících)"
                        min={1}
                      />
                    </Column>
                    <Column md={2}>
                      <InputWithLabel
                        id="vekOd"
                        type="number"
                        label="Vek od:"
                        min={1}
                        max={120}
                      />
                    </Column>
                    <Column md={2}>
                      <InputWithLabel
                        id="vekDo"
                        type="number"
                        label="Vek do:"
                        min={1}
                        max={120}
                      />
                    </Column>
                  </Row>
                  <Row>
                    <Column md={3}>
                      <InputWithLabel
                        id="periodicita"
                        type="number"
                        label="Periodicita (v měsících)"
                        min={1}
                      />
                    </Column>
                    <Column md={2}>
                      <InputWithLabel
                        id="vekOd"
                        type="number"
                        label="Vek od:"
                        min={1}
                        max={120}
                      />
                    </Column>
                    <Column md={2}>
                      <InputWithLabel
                        id="vekDo"
                        type="number"
                        label="Vek do:"
                        min={1}
                        max={120}
                      />
                    </Column>
                  </Row>
                  <Row>
                    <Column md={3}>
                      <InputWithLabel
                        id="periodicita"
                        type="number"
                        label="Periodicita (v měsících)"
                        min={1}
                      />
                    </Column>
                    <Column md={2}>
                      <InputWithLabel
                        id="vekOd"
                        type="number"
                        label="Vek od:"
                        min={1}
                        max={120}
                      />
                    </Column>
                    <Column md={2}>
                      <InputWithLabel
                        id="vekDo"
                        type="number"
                        label="Vek do:"
                        min={1}
                        max={120}
                      />
                    </Column>
                  </Row>
              </Layout>
            </Row>
            <Heading level={4} className={"pb-3"}>Diagnózy spojené s prevencí</Heading>
            <Row>
              <Layout className="col-md-6">
                <MultiSelectWithLabel
                  id="diagnosis"
                  label="Seznam diagnóz"
                  multi
                  options={diagnosis.map(diagnosis => {
                    return {label: diagnosis.nazevDiagnoza, value: diagnosis.nazevDiagnoza}
                  })}
                  name="preventions"
                  placeholder="Vyber..."
                />
              </Layout>
            </Row>
            <Heading level={4} className={"pb-3"}>Výskyt nemocí v rodine</Heading>
            <Row>
              <Layout className="col-md-6">
                <SelectWithLabel
                  id="family_anamnes"
                  label="Seznam anamnéz"
                  options={anamnesis.map(anamnesis => {
                    return {label: anamnesis, value: anamnesis}
                  })}
                  name="family_anamnes"
                  placeholder="Vyber..."
                />
              </Layout>
            </Row>
              <Row>
                <Column md={3}>
                  <InputWithLabel
                    id="periodicita"
                    type="number"
                    label="Periodicita (v měsících)"
                    min={1}
                  />
                </Column>
                <Column md={2}>
                  <InputWithLabel
                    id="vekOd"
                    type="number"
                    label="Vek od:"
                    min={1}
                    max={120}
                  />
                </Column>
                <Column md={2}>
                  <InputWithLabel
                    id="vekDo"
                    type="number"
                    label="Vek do:"
                    min={1}
                    max={120}
                  />
                </Column>
              </Row>
              <Row>
                <Column md={3}>
                  <InputWithLabel
                    id="periodicita"
                    type="number"
                    label="Periodicita (v měsících)"
                    min={1}
                  />
                </Column>
                <Column md={2}>
                  <InputWithLabel
                    id="vekOd"
                    type="number"
                    label="Vek od:"
                    min={1}
                    max={120}
                  />
                </Column>
                <Column md={2}>
                  <InputWithLabel
                    id="vekDo"
                    type="number"
                    label="Vek do:"
                    min={1}
                    max={120}
                  />
                </Column>
              </Row>
              <Row>
                <Column md={3}>
                  <InputWithLabel
                    id="periodicita"
                    type="number"
                    label="Periodicita (v měsících)"
                    min={1}
                  />
                </Column>
                <Column md={2}>
                  <InputWithLabel
                    id="vekOd"
                    type="number"
                    label="Vek od:"
                    min={1}
                    max={120}
                  />
                </Column>
                <Column md={2}>
                  <InputWithLabel
                    id="vekDo"
                    type="number"
                    label="Vek do:"
                    min={1}
                    max={120}
                  />
                </Column>
              </Row>
              <Row>
                <Layout className="col-md-6">
                  <SelectWithLabel
                    id="family_anamnes"
                    label="Seznam anamnéz"
                    options={anamnesis.map(anamnesis => {
                      return {label: anamnesis, value: anamnesis}
                    })}
                    name="family_anamnes"
                    placeholder="Vyber..."
                  />
                </Layout>
              </Row>
                <Row>
                  <Column md={3}>
                    <InputWithLabel
                      id="periodicita"
                      type="number"
                      label="Periodicita (v měsících)"
                      min={1}
                    />
                  </Column>
                  <Column md={2}>
                    <InputWithLabel
                      id="vekOd"
                      type="number"
                      label="Vek od:"
                      min={1}
                      max={120}
                    />
                  </Column>
                  <Column md={2}>
                    <InputWithLabel
                      id="vekDo"
                      type="number"
                      label="Vek do:"
                      min={1}
                      max={120}
                    />
                  </Column>
                </Row>
                <Row>
                  <Column md={3}>
                    <InputWithLabel
                      id="periodicita"
                      type="number"
                      label="Periodicita (v měsících)"
                      min={1}
                    />
                  </Column>
                  <Column md={2}>
                    <InputWithLabel
                      id="vekOd"
                      type="number"
                      label="Vek od:"
                      min={1}
                      max={120}
                    />
                  </Column>
                  <Column md={2}>
                    <InputWithLabel
                      id="vekDo"
                      type="number"
                      label="Vek do:"
                      min={1}
                      max={120}
                    />
                  </Column>
                </Row>
                <Row>
                  <Column md={3}>
                    <InputWithLabel
                      id="periodicita"
                      type="number"
                      label="Periodicita (v měsících)"
                      min={1}
                    />
                  </Column>
                  <Column md={2}>
                    <InputWithLabel
                      id="vekOd"
                      type="number"
                      label="Vek od:"
                      min={1}
                      max={120}
                    />
                  </Column>
                  <Column md={2}>
                    <InputWithLabel
                      id="vekDo"
                      type="number"
                      label="Vek do:"
                      min={1}
                      max={120}
                    />
                  </Column>
                </Row>
                <Row>
                  <Layout className="col-md-6">
                    <SelectWithLabel
                      id="family_anamnes"
                      label="Seznam anamnéz"
                      options={anamnesis.map(anamnesis => {
                        return {label: anamnesis, value: anamnesis}
                      })}
                      name="family_anamnes"
                      placeholder="Vyber..."
                    />
                  </Layout>
                </Row>
                  <Row>
                    <Column md={3}>
                      <InputWithLabel
                        id="periodicita"
                        type="number"
                        label="Periodicita (v měsících)"
                        min={1}
                      />
                    </Column>
                    <Column md={2}>
                      <InputWithLabel
                        id="vekOd"
                        type="number"
                        label="Vek od:"
                        min={1}
                        max={120}
                      />
                    </Column>
                    <Column md={2}>
                      <InputWithLabel
                        id="vekDo"
                        type="number"
                        label="Vek do:"
                        min={1}
                        max={120}
                      />
                    </Column>
                  </Row>
                  <Row>
                    <Column md={3}>
                      <InputWithLabel
                        id="periodicita"
                        type="number"
                        label="Periodicita (v měsících)"
                        min={1}
                      />
                    </Column>
                    <Column md={2}>
                      <InputWithLabel
                        id="vekOd"
                        type="number"
                        label="Vek od:"
                        min={1}
                        max={120}
                      />
                    </Column>
                    <Column md={2}>
                      <InputWithLabel
                        id="vekDo"
                        type="number"
                        label="Vek do:"
                        min={1}
                        max={120}
                      />
                    </Column>
                  </Row>
                  <Row>
                    <Column md={3}>
                      <InputWithLabel
                        id="periodicita"
                        type="number"
                        label="Periodicita (v měsících)"
                        min={1}
                      />
                    </Column>
                    <Column md={2}>
                      <InputWithLabel
                        id="vekOd"
                        type="number"
                        label="Vek od:"
                        min={1}
                        max={120}
                      />
                    </Column>
                    <Column md={2}>
                      <InputWithLabel
                        id="vekDo"
                        type="number"
                        label="Vek do:"
                        min={1}
                        max={120}
                      />
                    </Column>
                  </Row>
                  <Row>
                    <Layout className="col-md-6">
                      <SelectWithLabel
                        id="family_anamnes"
                        label="Seznam anamnéz"
                        options={anamnesis.map(anamnesis => {
                          return {label: anamnesis, value: anamnesis}
                        })}
                        name="family_anamnes"
                        placeholder="Vyber..."
                      />
                    </Layout>
                  </Row>
                    <Row>
                      <Column md={3}>
                        <InputWithLabel
                          id="periodicita"
                          type="number"
                          label="Periodicita (v měsících)"
                          min={1}
                        />
                      </Column>
                      <Column md={2}>
                        <InputWithLabel
                          id="vekOd"
                          type="number"
                          label="Vek od:"
                          min={1}
                          max={120}
                        />
                      </Column>
                      <Column md={2}>
                        <InputWithLabel
                          id="vekDo"
                          type="number"
                          label="Vek do:"
                          min={1}
                          max={120}
                        />
                      </Column>
                    </Row>
                    <Row>
                      <Column md={3}>
                        <InputWithLabel
                          id="periodicita"
                          type="number"
                          label="Periodicita (v měsících)"
                          min={1}
                        />
                      </Column>
                      <Column md={2}>
                        <InputWithLabel
                          id="vekOd"
                          type="number"
                          label="Vek od:"
                          min={1}
                          max={120}
                        />
                      </Column>
                      <Column md={2}>
                        <InputWithLabel
                          id="vekDo"
                          type="number"
                          label="Vek do:"
                          min={1}
                          max={120}
                        />
                      </Column>
                    </Row>
                    <Row>
                      <Column md={3}>
                        <InputWithLabel
                          id="periodicita"
                          type="number"
                          label="Periodicita (v měsících)"
                          min={1}
                        />
                      </Column>
                      <Column md={2}>
                        <InputWithLabel
                          id="vekOd"
                          type="number"
                          label="Vek od:"
                          min={1}
                          max={120}
                        />
                      </Column>
                      <Column md={2}>
                        <InputWithLabel
                          id="vekDo"
                          type="number"
                          label="Vek do:"
                          min={1}
                          max={120}
                        />
                      </Column>
                    </Row>
            <Heading level={4} className={"pb-3"}>Osobní diagnóza</Heading>
            <Row>
              <Layout className="col-md-6">
                <SelectWithLabel
                  id="personal_anamnes"
                  label="Seznam anamnéz"
                  options={lecimse.map(lecimse => {
                    return {label: lecimse, value: lecimse}
                  })}
                  name="personal_anamnes"
                  placeholder="Vyber..."
                />
              </Layout>
            </Row>
            <Heading level={4} className={"pb-3"}>Životní styl</Heading>
            <Row>
              <div className="form-check gender-check">
                <input className="form-check-input1" type="checkbox" value="" id="defaultCheck1"/>
                <label className="form-check-label1" htmlFor="defaultCheck1">
                  Kuřák
                </label>
              </div>
              <div className="form-check gender-check">
                <input className="form-check-input2" type="checkbox" value="" id="defaultCheck1"/>
                <label className="form-check-label2" htmlFor="defaultCheck1">
                  Obézní
                </label>
              </div>
            </Row>
            <Row>
              <Column xs={12}>
                <Link to="/admin">
                  <Button
                  title="Uložit"
                  variant="danger"
                  className="float-right"
                  />
                </Link>
              </Column>
            </Row>
          </form>
      </Layout>
    );
  }
}
