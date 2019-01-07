import React from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import {Layout} from "../atoms/Layout";
import {Label} from "../atoms/Form/Label";
import {Row} from "../atoms/Row";
import {Column} from "../atoms/Column";


export default class InputRangeCustom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.default,
    };
  }

  onChangeValue = (name,value) => {
    this.setState({value});
    this.props.onChangeValue(name, value)
  };


  render() {
    const {min, max, label, name} = this.props;
    return (
      <Layout className={"form-group"}>
        <Label label={label} className={"pb-2"}/>
        <Row>
          <Column md={8}>
            <InputRange
              maxValue={max}
              minValue={min}
              value={this.state.value}
              onChange={(value) => this.onChangeValue(name,value)}
            />
          </Column>
          <Column md={4}>
            <input
              id="age"
              value={this.state.value}
              type="number"
              min={min}
              max={max}
              onChange={(evt) => this.onChangeValue(name,evt.target.value)}
              className={"float-right mt-m-2 form-control"}
            />
          </Column>
        </Row>
      </Layout>
    );
  }
}
