import React from 'react';
import s from './Message.module.css';

type MessageType = {
   avatar: string,
   name: string,
   message: string,
   time: string,
}

function Message(props: MessageType) {
   return (
      <div className={`${s.message} ${s.message__container}`}>
         <div className={s.message_pic}>
            <img className={s.message_img} src={props.avatar} alt={`avatar`}/>
         </div>
         <div className={s.message_block}>
            <div className={s.message_body}>
               <div className={s.message_userName}>{props.name}</div>
               <div className={s.message_userMessage}>{props.message}</div>
            </div>
            <div className={s.message_time}>{props.time}</div>
         </div>
      </div>
   );
}

export default Message;
