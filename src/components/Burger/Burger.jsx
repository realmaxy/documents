import s from './Burger.module.scss'
import { useState } from 'react'
import exit from '../../assets/exit.svg'
import burger from '../../assets/bars.svg'

export default function Burger() {
  const [active, setActive] = useState(false)

  return (
    <div className={s.menu}>
      <div className={s.icon} onClick = {() => setActive(!active)} style={(active)?{display:"none"}:{display:"block"}}>
        <img src={burger} alt="burger" width={30}/>
      </div>
      <div className={(active)? [s.list, s.active].join(' ') : s.list}>
        <div className={s.exitButton} onClick= {() => setActive(!active)}>
          <img src={exit} alt="exit" width={50}/>
        </div>
        <div className={s.links}>
          <div className={s.link}>О нас</div>
          <div className={s.link}>Сотрудничество</div>
          <div className={s.link}>Приложение</div>
        </div>
      </div>
    </div>
  )	
}
