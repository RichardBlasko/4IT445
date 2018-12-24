import React from 'react';
import {Row} from "../atoms/Row";
import {Layout} from "../atoms/Layout";
import {SelectWithLabel} from "./SelectWithLabel";
import {InputWithLabel} from "./InputWithLabel";
import {Button} from "../atoms/Button/Button";
import {MultiSelectWithLabel} from "./MultiSelectWithLabel";
import {Heading} from "../atoms/Heading";
import {Column} from "../atoms/Column";
import InputRangeCustom from "./InputRangeCustom";

export class FilterBox extends React.Component {

  constructor() {
    super();
    this.state = {
      expand: false,
      height: 180,
      weight: 80,
      bmi: this.countBMI(180,80),
    }
  }

  expandHandler = () => {
    const {expand} = this.state;
    this.setState({
      expand: !expand
    })
  };

  setterHandler = (key, value) =>{
    this.setState({
      [key]: value
    });
  }


  countBMI = (height, weight) => {
      const heightMetr = height/100;
      return Math.round((weight / (heightMetr*heightMetr))*100)/100;
  };




  renderCollpase = () => {
    return (
      <Row className={"justify-content-center m-2 mb-3"}>
        <a href={""} onClick={() => this.expandHandler()} className={"detail-link"}>Podrobnější vyhledávání</a>
      </Row>
    )
  }

  renderExpand = () => {
    const {height, weight} = this.state;
    const bmi =  this.countBMI(height, weight);
    return (
      <Layout>
        <Row className={"justify-content-center mb-3"}>
          <Column xs={12}>
            <Heading level={4} className={"orange-text text-center mt-3"}>Životní styl</Heading>
          </Column>
        </Row>
        <Row className={"justify-content-center mb-3"}>
          <Column md={4}>
            <InputRangeCustom
              name={"height"}
              min={50}
              max={220}
              default={180}
              label={"Výška (cm)"}
              onChangeValue={this.setterHandler}
            />
          </Column>
          <Column md={4}>
            <InputRangeCustom
              name={"weight"}
              min={40}
              max={250}
              default={80}
              label={"Váha (kg)"}
              onChangeValue={this.setterHandler}
            />
          </Column>
          <Column md={3} className={"blue-text text-center pt-4"}>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text blue-text" id="basic-addon1">BMI</span>
              </div>
              <input type="text" readOnly className="form-control bmi-input" value={bmi}/>
            </div>
          </Column>
        </Row>
        <Row className={"justify-content-center m-2 mb-3"}>
          <div className="custom-control custom-checkbox">
            <input className="custom-control-input" type="checkbox" value="" id="customCheck1"/>
            <label class="life-style-check">Kuřák
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>
        </Row>
        <Row className={"justify-content-center m-2 mb-3"}>
          <a href={""} onClick={() => this.expandHandler()} className={"detail-link"}>Skrýt podrobnější vyhledávání</a>
        </Row>
      </Layout>
    )
  }

  render() {
    let {min = 18, max = 120, anamnesis} = this.props;
    let {expand} = this.state;
    return (
      <form action={"/prevence"}>
        <Row className={"justify-content-center pt-2 mb-3"}>
          <Column md={8}>
            <Layout className={"filter-panel"}>
              <Row>
                <Column md={3}>
                  <SelectWithLabel
                    id="gender"
                    label="Pohlaví *"
                    options={[{label: "Muž", value: "muz"}, {label: "Žena", value: "zena"}]}
                    defaultValue={{label: "Muž", value: "muz"}}
                  />
                </Column>
                <Column md={3}>
                  <InputWithLabel
                    id="age"
                    label="Věk *"
                    placeholder="24"
                    type="number"
                    min={min}
                    max={max}
                  />
                </Column>
                <Column md={3}>
                  <MultiSelectWithLabel
                    id="family_anamnes"
                    label="Výskyt nemocí v rodině"
                    multi
                    options={anamnesis.map(anamnes => {
                      return {label: anamnes.name, value: anamnes.name}
                    })}
                    name="family_anamnes"
                    placeholder="Seznam anamnéz"
                  />
                </Column>
                <Column md={3}>
                  <MultiSelectWithLabel
                    id="my_anamnes"
                    label="Léčím se s"
                    multi
                    options={anamnesis.map(anamnes => {
                      return {label: anamnes.name, value: anamnes.name}
                    })}
                    name="my_anamnes"
                    placeholder="Seznam anamnéz"
                  />
                </Column>
              </Row>
              {
                expand === false && (
                  this.renderCollpase()
                )
              }
              {
                expand === true && (
                  this.renderExpand()
                )
              }

            </Layout>
            <Row className={"justify-content-center"}>
              <Button title="Najít prevence" variant="filter" type="submit"/>
            </Row>
          </Column>
        </Row>
      </form>
    )
  }
};
