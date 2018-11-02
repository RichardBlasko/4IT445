import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Label} from '../atoms/Form/Label';
import {FormGroup} from '../atoms/Form/FormGroup';
import Select from "react-select";

export class SelectWithLabel extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
  };


  render() {
    const { id, placeholder, label, ...rest } = this.props;

    return (
      <FormGroup>
        <Label id={id} label={label} />
        <Select
          id={id}
          placeholder={placeholder}
          {...rest}
        />
      </FormGroup>
    );
  }
}
