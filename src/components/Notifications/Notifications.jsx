import { useState } from 'react'
import bell from '../../assets/bell.svg'
import s from './Notifications.module.scss'
import { notifications } from '../../const'
import Message from '../Message/Message'

export default function Notifications({name, msg}) {
  const [open, setOpen] = useState(false)

  return (
    <div className={s.messages}>
      <button className={s.button} onClick={()=> setOpen(!open)}>
        <img src={bell} alt="messages" width={30}/>
      </button>
      {open &&
      <div className={s.dropdown}>
        {notifications.map((item, index) => <Message name={item.name} msg={item.msg}/>)}
      </div>
      }
    </div>
  )
}
