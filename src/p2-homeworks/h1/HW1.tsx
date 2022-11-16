import React from 'react'
import Message from './Message'
import s from '../../p1-main/m1-ui/u1-app/App.module.scss'

const messageData = {
  avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
  name: 'Artem',
  message: 'npm start нажимал?',
  time: '22:00',
}

const HW1 = () => {
  return (
    <>
      <div className={s.hwContainer}>
        <p>Homework 1</p>
        <Message avatar={messageData.avatar} name={messageData.name} message={messageData.message} time={messageData.time} />
      </div>
    </>
  )
}
export default HW1
