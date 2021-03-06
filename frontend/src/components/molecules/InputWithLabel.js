import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Input } from '../atoms/Form/Input';
import { Label } from '../atoms/Form/Label';
import { FormGroup } from '../atoms/Form/FormGroup';

export class InputWithLabel extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
  };

  render() {
    const { id, type, placeholder, label, value, ...rest } = this.props;

    return (
      <FormGroup>
        <Label id={id} label={label} />
        <Input
          type={type}
          id={id}
          placeholder={placeholder}
          value={value}
          {...rest}
        />
      </FormGroup>
    );
  }
}
