import React, { ChangeEvent, useState } from 'react'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import s from './HW4.module.scss'
import SuperButton from './common/c2-SuperButton/SuperButton'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'
import style from '../../p1-main/m1-ui/u1-app/App.module.scss'

const HW4 = () => {
  const [text, setText] = useState<string>('')
  const error = text ? '' : 'Error'

  const showAlert = () => {
    error ? alert('Введите текст...') : alert(text) // если нет ошибки показать текст
  }

  const [checked, setChecked] = useState<boolean>(false)
  const testOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.currentTarget.checked)
  }

  return (
    <>
      <div className={style.hwContainer}>
        <p>Homework 4</p>
        <div className={s.column}>
          <SuperInputText value={text} onChangeText={setText} onEnter={showAlert} error={error} />
          <SuperInputText />
          <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', margin: '0 0 10px 0' }}>
            <SuperButton>Empty</SuperButton>
            <SuperButton
              red // пропсу с булевым значением не обязательно указывать true
              onClick={showAlert}>
              Alert{/*// название кнопки попадёт в children*/}
            </SuperButton>
            <SuperButton disabled>Disabled</SuperButton>
          </div>

          <SuperCheckbox checked={checked} onChangeChecked={setChecked}>
            Some text {/*// этот текст попадёт в children*/}
          </SuperCheckbox>

          <SuperCheckbox checked={checked} onChange={testOnChange} />
        </div>
      </div>
    </>
  )
}
export default HW4
