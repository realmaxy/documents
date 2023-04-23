import s from './LoginForm.module.scss'
import exit from '../../assets/exit.svg'
import {useForm} from 'react-hook-form'
import {TextField } from '@mui/material'
import { openLogin } from '../../features/popUpSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { createUser, login } from '../../features/userSlice'

export default function LoginForm() {

  const {register, formState:{errors}, handleSubmit, reset} = useForm({mode:"onBlur"})
  const open = useSelector(state => state.popUp.isOpenLogin)

  const [token, setToken] = useState('')
  const dispatch = useDispatch()

  const onSubmit = async(data) => {
    const email = data.email
    const pass = data.password
    reset()
    dispatch(openLogin())
    // await fetch(`http://lkjhytre.pythonanywhere.com/login?email=${email}&password=${pass}`, {method: "GET"})
    // .then(response => response.json())
    // .then(result =>
    //   setToken(result.token)
    // )
    // .catch(err => console.log(err))
    // await fetch('http://lkjhytre.pythonanywhere.com/user', {method: "GET", headers:{
    //   "token": String(token) 
    // }})
    // .then(response => response.json())
    // .then(result => console.log(result))
    // .catch(err => console.log(err))
    try {const response = await fetch(`http://lkjhytre.pythonanywhere.com/login?email=${email}&password=${pass}`, {method: "GET"})
    const jsonData = await response.json()
    const token = jsonData.token
    const req = await fetch('http://lkjhytre.pythonanywhere.com/user', {method: "GET", headers: {
      "token": token
    }})
    const resp = await req.json()
    dispatch(login(resp))
  }
    catch(err) {
      console.log(err)
    }
  }


  return (
    <div>
      {(open)
      ?
      (
      <div className={s.wrapper}>
        <div className={s.cooperationForm}>
          <button className={s.exitButton} onClick={()=> dispatch(openLogin())}>
            <img src={exit} alt="exit" width={30}/>
          </button>
          <h1 className={s.title}>Вход</h1>
          <form onSubmit={handleSubmit(onSubmit)} className={s.loginForm}>
            <div className={s.inputBlock}>
              <TextField className={s.inputStr} label="Email / Имя пользователя" 
                {...register("email", {required: "*Поле обязательно к заполнению"})}
              />
              <div>
                {errors?.email && <p className={s.errorParagraph}>{errors?.email?.message}</p>}
              </div>
            </div>
            <div className={s.inputBlock}>
              <TextField className={s.inputStr} label="Пароль" type='password'
                {...register("password", {required: "*Поле обязательно к заполнению"})}
              />
              <div>
                {errors?.email && <p className={s.errorParagraph}>{errors?.email?.message}</p>}
              </div>
            </div>
            <button className={s.submitButton} >Войти</button>
          </form>
        </div>
      </div>)
      :
      (null)
      }
    </div>
  )
}
