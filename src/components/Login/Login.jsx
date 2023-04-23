import { useDispatch } from 'react-redux'
import s from './Login.module.scss'
import { openLogin } from '../../features/popUpSlice'


export default function Login() {

  const dispatch = useDispatch()

  return (
    <div>
      <button className={s.loginButton} onClick={()=> dispatch(openLogin())}>Войти</button>
    </div>
  )
}
