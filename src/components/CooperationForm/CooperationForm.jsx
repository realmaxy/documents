import {useForm} from 'react-hook-form'
import s from './CooperationForm.module.scss'
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import exit from '../../assets/exit.svg'
import { useDispatch, useSelector } from 'react-redux'
import { openRegister } from '../../features/popUpSlice'
import { createUser } from '../../features/userSlice'

export default function CooperationForm() {

  const [services, setServices] = useState([])
  const [value, setValue] = useState('')

  const dispatch = useDispatch()
  const open = useSelector(state => state.popUp.isOpenRegister)

  const {register, formState:{errors}, handleSubmit, reset} = useForm({mode:"onBlur"})

  // Регистрация пользователя

  const onSubmit = async(data) => {
    data = {...data, description: value, type: 'organisation'}
    reset()
    setValue('')
    alert(JSON.stringify(data))
    await fetch('http://lkjhytre.pythonanywhere.com/auth', {method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)})
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    dispatch(openRegister())
    dispatch(createUser(data))
  }


  //Запрос сервисов с сервера
  useEffect(()=> {
    fetch('http://lkjhytre.pythonanywhere.com/services', {method: "GET", headers: {
        "token": "Hello world!",
    }})
    .then(res => res.json())
    .then(result=> {
      // console.log(result.services)
      setServices(result.services)
    })
  }, [])

  //Изменение section

  const handleChange = (event) => {
    event.preventDefault()
    setValue(event.target.value);
  };

  return(
    <div>
      {(open)?(
      <div className={s.wrapper}>
        <div className={s.cooperationForm}>
          <button className={s.exitButton} onClick={()=> dispatch(openRegister())}>
            <img src={exit} alt="exit" width={30}/>
          </button>
          <h1 className={s.title}>Форма регистрации поставщика</h1>
          <form onSubmit={handleSubmit(onSubmit)} className={s.coopForm}>
            <div className={s.inputBlock}>
              <TextField className={s.inputStr} label="Название организации" 
                {...register("name", {required: "*Поле обязательно к заполнению"})}
              />
              <div>
                {errors?.name && <p className={s.errorParagraph}>{errors?.name?.message}</p>}
              </div>
            </div>
            <div className={s.inputBlock}>
              <TextField className={s.inputStr} label="Электронная почта" 
                {...register("email", {required: "*Поле обязательно к заполнению"})}
              />
              <div>
                {errors?.email && <p className={s.errorParagraph}>{errors?.email?.message}</p>}
              </div>
            </div>
            <div className={s.inputBlock}>
              <TextField className={s.inputStr} label="Пароль"  type='password'
                {...register("password", {required: "*Поле обязательно к заполнению"})}
              />
              <div>
                {errors?.password && <p className={s.errorParagraph}>{errors?.password?.message}</p>}
              </div>
            </div>
            <div className={s.inputBlock}>
              <FormControl fullWidth >
                <InputLabel id="demo-simple-select-label" className={s.inputServices}>Предоставляемые услуги</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="type-select"
                  value={value}
                  label="Предоставляемые услуги"
                  onChange={handleChange}
                  
                  className={s.selectServices}
                >
                {services.map(item => <MenuItem value={item} key={item}>{item}</MenuItem>)}
                </Select>
              </FormControl>
              <div>
                {value === '' && <p className={s.errorParagraph}>*Выберите услугу</p>}
              </div>
            </div>
            <button className={s.submitButton}>Подать заявку</button>
          </form>
        </div>
      </div>  
      ):
      (null)
      }
    </div>
  )
}
