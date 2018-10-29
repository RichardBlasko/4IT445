import React from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'

import {Layout} from "../atoms/Layout";
import {Label} from "../atoms/Form/Label";
import {Input} from "../atoms/Form/Input";
import {Row} from "../atoms/Row";
import {Column} from "../atoms/Column";

export default class InputRangeCustom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 24,
    };
  }

  render() {
    return (
      <Layout>
        <Label label="Věk"/>
        <Row>
          <Column md={9}>
            <InputRange
              maxValue={120}
              minValue={18}
              value={this.state.value}
              onChange={value => this.setState({value})}
              onChangeComplete={value => console.log(value)}/>
          </Column>
          <Column md={3}>
            <input
              id="age"
              value={this.state.value}
              type="number"
              min={18}
              max={120}
              onChange={(evt) => this.setState({value: evt.target.value})}
              className={"float-right mt-2"}
            />
          </Column>
        </Row>
      </Layout>
    );
  }
}
