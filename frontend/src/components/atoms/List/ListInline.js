import React from 'react';
import classNames from 'classnames';

export const ListInline = ({ className, ...rest }) => (
  <ul className={classNames('list-inline', className)} {...rest} />
);
