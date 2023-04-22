import s from './Header.module.scss'
import logo from '../../assets/logo.png'
import Burger from '../Burger/Burger'

export default function Header() {
  return (
    <div className={s.wrapper}>
      <div className='container'>
        <div className={s.header}>
          <div className={s.left}>
            <img src={logo} alt="logo" width={70} className={s.logo}/>
            <div className={s.content}>
              <h2 className={s.title}>СКЗМК</h2>
              <p className={s.text}>Северо-Кавказский Завод Металлоконструкций</p>
            </div>
          </div>
          <div className={s.menu}>
            <ul className={s.list}>
              <li className={s.menuItem}>
                <a href="#" className={s.menuLink}>О нас</a>
              </li>
              <li className={s.menuItem}>
                <a href="#" className={s.menuLink}>Сотрудничество</a>
              </li>
              <li className={s.menuItem}>
                <a href="#" className={s.menuLink}>Приложение</a>
              </li>
            </ul>
          </div>
          <Burger/>
        </div>
      </div>
    </div>
  )
}
