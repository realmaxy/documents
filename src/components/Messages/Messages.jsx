import { useState } from 'react'
import messageIcon from '../../assets/comment.svg'
import s from './Messages.module.scss'
import { messages } from '../../const'
import Message from '../Message/Message'

export default function Messages() {
  console.log(messages)
  const [open, setOpen] = useState(false) 
  return (
    <div className={s.messages}>
      <button className={s.button} onClick={()=> setOpen(!open)}>
        <img src={messageIcon} alt="messages" width={30}/>
      </button>
      {open &&
      <div className={s.dropdown}>
        {messages.map((item, index) => <Message name={item.name} msg={item.msg}/>)}
      </div>}
    </div>
  )
}
