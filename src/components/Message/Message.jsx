import s from './Message.module.scss'

export default function Message({name, msg}) {
  return (
    <div className={s.message}>
      <p className={s.name}>{name}</p>
      <p className={s.text}>{msg}</p>
    </div>
  )
}
