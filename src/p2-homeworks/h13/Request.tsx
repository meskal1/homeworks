import React, { useState } from 'react'
import s from './Request.module.scss'
import { RequestsAPI } from './RequestsAPI'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import style from '../../p1-main/m1-ui/u1-app/App.module.scss'

type RequestType = {}

export const Request: React.FC<RequestType> = () => {
  const [checkboxState, setCheckboxState] = useState(false)
  const [sendStatus, setSendStatus] = useState('')
  const [isPending, setIsPending] = useState(false)

  const onClickButtonHandler = () => {
    setIsPending(true)
    RequestsAPI.postCheckboxValue(checkboxState)
      .then(res => {
        setIsPending(false)
        setSendStatus(res.data.errorText + ' ' + res.data.info)
        console.log(res.data)
      })
      .catch(error => {
        setIsPending(false)
        setSendStatus(error.response.data.errorText)
        console.log({ ...error })
        console.log(error.response ? error.response.data.errorText : error.message)
      })
  }

  const onChangeInputHandler = () => {
    setCheckboxState(!checkboxState)
  }

  return (
    <>
      <div className={style.hwContainer}>
        <p>Homework 13</p>
        <div className={s.content}>
          <input type='checkbox' checked={checkboxState} onChange={onChangeInputHandler} />
          <p>Статус отправки: {sendStatus}</p>
          <SuperButton onClick={onClickButtonHandler} red={!isPending} disabled={isPending}>
            Отправить запрос
          </SuperButton>
        </div>
      </div>
    </>
  )
}
