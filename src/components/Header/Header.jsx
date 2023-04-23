import s from './Header.module.scss'
import logo from '../../assets/logo.png'
import Burger from '../Burger/Burger'
import { Link } from 'react-scroll'
import UserHeader from '../UserHeader/UserHeader'
import { useSelector } from 'react-redux'
import Login from '../Login/Login'
import { NavLink } from 'react-router-dom'
import Messages from '../Messages/Messages'

export default function Header({isProfile}) {

  const isLogin = useSelector(state => state.userSlice.isLogin)

    return (
    <div>
      {
        (isProfile)
        ?
        (
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
              <div className={s.userHeader}>
                {(isLogin)?(
                  <UserHeader/>
                )
                :
                <Login/>
                }
              </div>
              <Burger/>
            </div>
          </div>
        </div>
        ):
        (
          <div className={s.wrapper}>
          <div className='container'>
            <div className={s.header}>
              <NavLink to='/documents'>
                <div className={s.left}>
                  <img src={logo} alt="logo" width={70} className={s.logo}/>
                  <div className={s.content}>
                    <h2 className={s.title}>СКЗМК</h2>
                    <p className={s.text}>Северо-Кавказский Завод Металлоконструкций</p>
                  </div>
                </div>    
              </NavLink>
              <Messages/>
              {isLogin && <UserHeader/>}
            </div>
          </div>
        </div>
        )
      }
    </div>
  )
}
