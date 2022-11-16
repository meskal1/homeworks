import React, { useState } from 'react'
import { SuperSelect } from './common/c5-SuperSelect/SuperSelect'
import { SuperRadio } from './common/c6-SuperRadio/SuperRadio'
import style from '../../p1-main/m1-ui/u1-app/App.module.scss'

const arr = ['x', 'y', 'z']

export const HW7 = () => {
  const [value, onChangeOption] = useState(arr[1])

  return (
    <>
      <div className={style.hwContainer}>
        <p>Homework 7</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <SuperSelect options={arr} value={value} onChangeOption={onChangeOption} style={{ width: '85px' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <SuperRadio name={'radio'} options={arr} value={value} onChangeOption={onChangeOption} />
        </div>
      </div>
    </>
  )
}
