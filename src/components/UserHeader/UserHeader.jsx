import { useDispatch, useSelector } from "react-redux"
import s from './UserHeader.module.scss'
import userIcon from '../../assets/userIcon.svg'
import signout from '../../assets/signout.svg'
import { logout } from "../../features/userSlice"
import { Link } from "react-router-dom"

export default function UserHeader() {

  const user = useSelector(state => state.userSlice.userInfo)
  const dispatch = useDispatch()

  return (
    <div className={s.userHeader}>
      <Link to='/documents/profile'>
        <div className={s.profileLink}>
          <img src={userIcon} alt="user" className={s.userIcon}/>
          <p className={s.name}>{user.name}</p>
        </div>
      </Link>
      <Link to='/documents'>
        <button className={s.signoutButton} onClick={()=> dispatch(logout())}>
          <img src={signout} alt="signout" className={s.signoutIcon}/>
        </button>
      </Link>
    </div>
  )
}
