import React from 'react';
import classNames from 'classnames';

export const ListItem = ({ className, ...rest }) => (
  <li className={classNames('list-item', className)} {...rest} />
);
