import React from 'react';
import classNames from 'classnames';

export const ListInlineItem = ({ className, ...rest }) => (
  <li className={classNames('list-inline-item', className)} {...rest} />
);
