import React from 'react';
import classNames from "classnames";


export const CardBody = ({ className, ...rest }) => (
  <div className={classNames('card-body', className)} {...rest} />
);

