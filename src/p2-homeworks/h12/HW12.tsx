import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppStoreType } from '../h10/bll/store'
import { SuperSelect } from '../h7/common/c5-SuperSelect/SuperSelect'
import { changeThemeC } from './bll/themeReducer'
import s from './HW12.module.scss'
import style from '../../p1-main/m1-ui/u1-app/App.module.scss'

const themes = ['dark', 'red', 'some']

export const HW12 = () => {
  const theme = useSelector<AppStoreType, string>(state => state.theme)
  const dispatch = useDispatch()

  const onChangeCallback = (theme: string) => {
    dispatch(changeThemeC(theme))
  }

  return (
    <>
      <div className={`${s[theme]} ${style.hwContainer}`}>
        <p>Homework 12</p>
        <div style={{ textAlign: 'center' }}>
          <span className={s[theme + '-text']}></span>
          <SuperSelect options={themes} onChangeOption={onChangeCallback} isSelected={theme} />
        </div>
        <hr />
      </div>
    </>
  )
}
