import React from 'react'
import { Clock } from './Clock'
import s from './HW9.module.scss'
import style from '../../p1-main/m1-ui/u1-app/App.module.scss'

export const HW9 = () => {
  return (
    <>
      <div className={style.hwContainer}>
        <p>Homework 9</p>
        <Clock />
      </div>
    </>
  )
}
