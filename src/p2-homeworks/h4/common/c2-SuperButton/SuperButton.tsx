import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import s from './SuperButton.module.scss'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
  red?: boolean
  disabled?: boolean
}

const SuperButton: React.FC<SuperButtonPropsType> = (
  { red, className, disabled, ...restProps } // все остальные пропсы попадут в объект restProps, там же будет children
) => {
  const finalClassName = `${red ? s.default : disabled ? s.disabled : s.default} ${className}`

  return (
    <button
      className={finalClassName}
      disabled={disabled}
      {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
    />
  )
}
export default SuperButton
