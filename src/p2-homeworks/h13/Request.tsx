import { error } from 'console'
import React, { useState } from 'react'
import s from './Request.module.scss'
import { RequestsAPI } from './RequestsAPI'

type RequestType = {}

export const Request: React.FC<RequestType> = () => {
  const [checkboxState, setCheckboxState] = useState(false)
  const [sendStatus, setSendStatus] = useState('')

  const onClickButtonHandler = () => {
    RequestsAPI.postCheckboxValue(checkboxState)
      .then(res => {
        setSendStatus('Успешный запрос')
        console.log(res.data)
      })
      .catch(error => {
        setSendStatus('Ошибка запроса')
        console.log({ ...error })
        console.log(error.response ? error.response.data.errorText : error.message)
      })
  }

  const onChangeInputHandler = () => {
    setCheckboxState(!checkboxState)
  }

  return (
    <>
      <hr />
      <div className={s.content}>
        <input type='checkbox' checked={checkboxState} onChange={onChangeInputHandler} />
        <span>Статус отправки: {sendStatus}</span>
        <button className={s.button} onClick={onClickButtonHandler}>
          Отправить запрос
        </button>
      </div>
      <hr />
    </>
  )
}
