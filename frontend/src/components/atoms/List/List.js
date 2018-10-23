import React from 'react';
import classNames from 'classnames';

export const List = ({ className, ...rest }) => (
  <ul className={classNames('list', className)} {...rest} />
);
