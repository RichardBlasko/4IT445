import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Label} from '../atoms/Form/Label';
import {FormGroup} from '../atoms/Form/FormGroup';
import {Select} from "../atoms/Form/Select";

export class MultiSelect extends Component {

  render() {
    const { id, type, placeholder, label, value, ...rest } = this.props;

    return (
      <FormGroup>
        <Label id={id} label={"Test"} />
        <Select
          id={id}
          {...rest}
        />
      </FormGroup>
    );
  }
}
