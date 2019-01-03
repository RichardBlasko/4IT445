import React from 'react'
import classnames from 'classnames'

const InputFeedback = ({children}) => (
  <span className="text-danger">{children}</span>
)

const Label = ({error, children, ...props}) => {
  return <label {...props}>{children}</label>
}

const TextareaInput = ({
                     field: {name, ...field},
                     form: {touched, errors},
                     className,
                     label,
                     rows,
                     ...props
                   }) => {
  const error = errors[name]
  const touch = touched[name]
  const classes = classnames(
    'form-group',
    {
      'animated shake error': !!error,
    },
    className
  )
  return (
    <div className={classes}>
      <Label htmlFor={name} error={error}>
        {label}
      </Label>
      <textarea
        id={name}
        className="form-control"
        type="text"
        rows={rows || 5}
        {...field}
        {...props}
      />
      {touch && error && <InputFeedback>{error}</InputFeedback>}
    </div>
  )
}

export default TextareaInput
