import React, {Component} from 'react';
import {FormGroup} from '../atoms/Form/FormGroup';
import Select from "react-select";


export class MultiSelectWithLabel extends Component {

  constructor() {
    super();
    this.state = {
      multiValue: [],
    };

    this.handleMultiChange = this.handleMultiChange.bind(this);
  }

  handleMultiChange(option) {
    this.setState(state => {
      return {
        multiValue: option
      };
    });
  }

  render() {
    const { id, name, placeholder, label, options, ...rest } = this.props;
    return (
      <FormGroup>
        <label>{label}</label>
        <Select
          id={id}
          name={name}
          placeholder={placeholder}
          value={this.state.multiValue}
          options={options}
          onChange={this.handleMultiChange}
          isMulti={true}
          {...rest}
        />
      </FormGroup>
    );
  }
}
