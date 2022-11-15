import React, { useState } from 'react'
import s from './Request.module.scss'
import { RequestsAPI } from './RequestsAPI'

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
      <hr />
      <div className={s.content}>
        <input type='checkbox' checked={checkboxState} onChange={onChangeInputHandler} />
        <span>Статус отправки: {sendStatus}</span>
        <button className={s.button} onClick={onClickButtonHandler} disabled={isPending}>
          Отправить запрос
        </button>
      </div>
      <hr />
    </>
  )
}
