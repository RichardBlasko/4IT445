import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Input} from '../atoms/Form/Input';
import {Button} from "../atoms/Button/Button";
import {Layout} from "../atoms/Layout";

export class InputWithButton extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
  };

  render() {
    const { id, type, placeholder, value, buttonText,buttonCss, ...rest } = this.props;

    return (
        <Layout className="input-group">
          <Input
            type={type}
            id={id}
            placeholder={placeholder}
            value={value}
            {...rest}
          />
            <Layout className="input-group-append">
              <Button className={buttonCss}>{buttonText}</Button>
            </Layout>
        </Layout>
    );
  }
}
