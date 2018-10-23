import React from 'react';
import classNames from 'classnames';

export const Image = ({
                        src,
                        alt,
                        className,
                        children,
                        ...rest
                      }) => (
  <img
    src={src}
    className={classNames(
      className,
    )}
    alt={alt}
    {...rest}
  />
);
