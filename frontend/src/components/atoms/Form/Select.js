import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Select extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
  };

  onChange = event => {
    const { id, onChange } = this.props;
    const { value } = event.target;

    if (!onChange) {
      return;
    }

    onChange(id, value);
  };

  render() {
    const { id, ...rest } = this.props;

    return (
      <select
        className="form-control"
        id={id}
        {...rest}
        onChange={this.onChange}
      />
    );
  }
}
