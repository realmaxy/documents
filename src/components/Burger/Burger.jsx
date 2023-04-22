import s from './Burger.module.scss'
import { useState } from 'react'
import exit from '../../assets/multiply.svg'
import burger from '../../assets/bars.svg'
import { Link } from 'react-scroll'

export default function Burger() {
  
  const [active, setActive] = useState(false)

  return (
    <div className={s.menu}>
      <div className={s.icon} onClick = {() => setActive(!active)} style={(active)?{display:"none"}:{display:"block"}}>
        <img src={burger} alt="burger" width={30}/>
      </div>
      <div className={(active)? [s.list, s.active].join(' ') : s.list}>
        <div className={s.exitButton} onClick= {() => setActive(!active)}>
          <img src={exit} alt="exit" width={30}/>
        </div>
        <div className={s.links}>
          <Link spy={true} smooth={true} offset={50} duration={500} to='about' className={s.link} onClick={()=>setActive(false)}>О нас</Link>
          <Link spy={true} smooth={true} offset={50} duration={500} to='cooperation' className={s.link} onClick={()=>setActive(false)}>Сотрудничество</Link>
          <Link spy={true} smooth={true} offset={50} duration={500} to='application' className={s.link} onClick={()=>setActive(false)}>Приложение</Link>
        </div>
      </div>
    </div>
  )	
}
