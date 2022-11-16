import React, { useState } from 'react'
import { SuperRange } from './common/c7-SuperRange/SuperRange'
import { SuperDoubleRange } from './common/c8-SuperDoubleRange/SuperDoubleRange'
import { SuperPuperDoubleRange } from './common/c9-SuperPuperDoubleRange/SuperPuperDoubleRange'
import s from './HW11.module.scss'
import style from '../../p1-main/m1-ui/u1-app/App.module.scss'

export const HW11 = () => {
  const minThreshold = 0
  const maxThreshold = 100
  const [value1, setValue1] = useState<number>(minThreshold)
  const [value2, setValue2] = useState<number>(maxThreshold)
  const setValues = (value: [number, number]) => {
    setValue1(value[0])
    setValue2(value[1])
  }
  const step = 0
  const minDisabled = false
  const maxDisabled = false

  const minValue = 0
  const maxValue = 100
  return (
    <>
      <div className={style.hwContainer}>
        <p>Homework 11</p>
        <div className={s.container}>
          <div>
            <span style={{ display: 'inline-block', width: '30px' }}>{value1}</span>
            <SuperRange value={value1} onChangeRange={setValue1} />
          </div>
          <div style={{ position: 'relative', margin: '0 0 10px 0' }}>
            <span style={{ display: 'inline-block', width: '30px' }}>{value1 >= value2 ? value2 : value1}</span>
            <SuperDoubleRange
              step={step}
              isDisabled={[minDisabled, maxDisabled]}
              threshold={[minThreshold, maxThreshold]}
              value={[value1, value2]}
              onChangeRange={setValues}
            />
            <span style={{ margin: '0 0 0 5px' }}>{value2}</span>
          </div>
          <div style={{ position: 'relative', padding: '0 0 30px 0' }}>
            <SuperPuperDoubleRange min={minValue} max={maxValue} />
          </div>
        </div>
      </div>
    </>
  )
}
