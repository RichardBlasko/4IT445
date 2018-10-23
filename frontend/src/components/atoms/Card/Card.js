import React from 'react';
import classNames from "classnames";


export const Card = ({ className, ...rest }) => (
  <div className={classNames('card', className)} {...rest} />
);

