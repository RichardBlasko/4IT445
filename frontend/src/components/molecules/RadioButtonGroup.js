import React from 'react';
import classNames from 'classnames'
import {Label} from "../atoms/Form/Label";

const InputFeedback = ({ error }) =>
  error ? <div className={classNames("input-feedback")}>{error}</div> : null;


// Radio group
export const RadioButtonGroup = ({
                            value,
                            error,
                            touched,
                            id,
                            label,
                            className,
                            children
                          }) => {
  const classes = classNames(
    "input-field",
    {
      "is-success": value || (!error && touched), // handle prefilled or user-filled
      "is-error": !!error && touched
    },
    className
  );

  return (
    <div className={classes}>
      <fieldset>
        <Label label={label}/>
        {children}
        {touched && <InputFeedback error={error} />}
      </fieldset>
    </div>
  );
};


