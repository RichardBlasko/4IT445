import React from 'react';
import classNames from 'classnames';

export const Column = ({className, lg, md, sm, xs, ...rest}) => (
  <div
    className={classNames('col',`col-lg-${lg}`, `col-md-${md}`, `col-sm-${sm}`, `col-${xs || 12}`, className)}
    {...rest}
  />
);
