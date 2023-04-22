import s from './Header.module.scss'
import logo from '../../assets/logo.png'
import Burger from '../Burger/Burger'
import { Link } from 'react-scroll'

export default function Header() {
  return (
    <div className={s.wrapper}>
      <div className='container'>
        <div className={s.header}>
          <Link to='about' spy={true} smooth={true} offset={50} duration={500} className={s.menuLink}>
            <div className={s.left}>
            <img src={logo} alt="logo" width={70} className={s.logo}/>
            <div className={s.content}>
              <h2 className={s.title}>СКЗМК</h2>
              <p className={s.text}>Северо-Кавказский Завод Металлоконструкций</p>
            </div>
          </div>
          </Link>
          <div className={s.menu}>
            <ul className={s.list}>
              <li className={s.menuItem}>
                <Link to='about' spy={true} smooth={true} offset={50} duration={500} className={s.menuLink}>О нас</Link>
              </li>
              <li className={s.menuItem}>
                <Link to='cooperation' spy={true} smooth={true} offset={50} duration={500} className={s.menuLink}>Сотрудничество</Link>
              </li>
              <li className={s.menuItem}>
                <Link to='application' spy={true} smooth={true} offset={50} duration={500} className={s.menuLink}>Приложение</Link>
              </li>
            </ul>
          </div>
          <Burger/>
        </div>
      </div>
    </div>
  )
}
