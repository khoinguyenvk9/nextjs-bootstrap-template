import classNames from 'classnames'
import React from 'react'
import { Button, ButtonProps, Spinner } from 'react-bootstrap'

interface BasedButtonProps extends ButtonProps {
  withDecorator?: boolean
  innerClassName?: string
  innerSpacing?: 'between' | 'center'
  rightIcon?: string
  leftIcon?: string
  height?: string | number
  loading?: boolean
}

export const BasedButton: React.FC<BasedButtonProps> = props => {
  return (
    <Button
      className="w-100 shadow-sm rounded-12px py-12px position-relative overflow-hidden fw-medium"
      style={{ height: props.height ?? 60 }}
      onClick={props.loading ? undefined : props.onClick}
      {...props}>
      {props.loading ? (
        <Spinner animation="border" color="inherited" />
      ) : (
        <div
          className={classNames(
            props.innerClassName,
            'd-flex align-items-center gap-3',
            {
              'justify-content-center':
                !props.innerSpacing || props.innerSpacing === 'center',
              'justify-content-between': props.innerSpacing === 'between',
            },
          )}>
          {props.leftIcon !== undefined && (
            <div className={classNames(props.leftIcon, 'fs-22px')} />
          )}
          {props.children}
          {props.rightIcon !== undefined && (
            <div className={classNames(props.rightIcon, 'fs-22px')} />
          )}
        </div>
      )}

      {props.withDecorator && (
        <div
          className="position-absolute bg-white rounded-pill bg-opacity-10"
          style={{ width: 80, height: 80, bottom: 15, right: -20 }}
        />
      )}
    </Button>
  )
}

