import React from 'react';
import classNames from 'classnames';

export const Column = ({className, lg, md, sm, xs, ...rest}) => (
  <div
    className={classNames(`col-lg-${lg || 12}`, `col-md-${md || 12}`, `col-sm-${sm || 12}`, `col-xs-${xs || 12}`, className)}
    {...rest}
  />
);
