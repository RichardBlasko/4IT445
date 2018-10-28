import React from 'react';
import {Row} from "../atoms/Row";
import {Layout} from "../atoms/Layout";
import {SelectWithLabel} from "./SelectWithLabel";
import {InputWithLabel} from "./InputWithLabel";
import {Button} from "../atoms/Button/Button";

export const FilterBox = ({genders, min = 18, max = 120, anamnesis, styles}) => (
  <form>
    <Row className={"justify-content-center pt-2 mb-3"}>
      <Layout className={"col-md-8"}>
        <Row className={"filter-panel"}>
          <Layout className="col-md-3">
            <SelectWithLabel id="gender" label="Pohlaví *">
              {genders.map(gender => <option>{gender}</option>)}
            </SelectWithLabel>
          </Layout>
          <Layout className="col-md-3">
            <InputWithLabel
              id="age"
              label="Věk *"
              placeholder="14"
              type="number"
              min={min}
              max={max}
            />
          </Layout>
          <Layout className="col-md-3">
            <SelectWithLabel
              id="anamnes"
              label="Výskyt nemocí v rodině"
            >
              <option>Nevybráno</option>
              {anamnesis.map(anamnes => <option>{anamnes}</option>)}
            </SelectWithLabel>
          </Layout>
          <Layout className="col-md-3">
            <SelectWithLabel
              id="anamnes"
              label="Životní styl"
            >
              <option>Nevybráno</option>
              {styles.map(style => <option>{style}</option>)}
            </SelectWithLabel>
          </Layout>
        </Row>
        <Row className={"justify-content-center"}>
          <Button title="Najít prevence" variant="filter" type="submit"/>
        </Row>
      </Layout>
    </Row>
  </form>

);

