import React from 'react';
import classNames from "classnames";

export const Row = ({className,children}) => <div className={classNames(
  'row',
  className,
)}>{children}</div>;
