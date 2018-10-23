import React from 'react';
import classNames from "classnames";


export const CardFooter = ({ className, ...rest }) => (
  <div className={classNames('card-footer', className)} {...rest} />
);

