import React, { SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent } from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
  isSelected?: any
  options?: any[]
  onChangeOption?: (option: any) => void
}

export const SuperSelect: React.FC<SuperSelectPropsType> = ({ options, onChange, onChangeOption, isSelected, ...restProps }) => {
  const mappedOptions: any[] = options
    ? options.map((el, i) => (
        <option value={el} key={i} selected={isSelected === el}>
          {el}
        </option>
      ))
    : []

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange && onChange(e)
    onChangeOption && onChangeOption(e.currentTarget.value)
  }

  return (
    <>
      <select onChange={onChangeCallback} {...restProps}>
        {mappedOptions}
      </select>
    </>
  )
}
