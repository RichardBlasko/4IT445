import React from 'react';
import classNames from "classnames";


export const CardTitle = ({ className, ...rest }) => (
  <div className={classNames('card-title', className)} {...rest} />
);

