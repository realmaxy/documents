import {useForm} from 'react-hook-form'
import s from './CooperationForm.module.scss'
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import exit from '../../assets/exit.svg'
import { useDispatch, useSelector } from 'react-redux'
import { openPopUp } from '../../features/popUpSlice'

export default function CooperationForm() {

  
  const {register, formState:{errors}, handleSubmit, reset} = useForm({mode:"onBlur"})

  const onSubmit = (data) => {
    data = {...data, service: value}
    reset()
    setValue('')
    alert(JSON.stringify(data))
  }
  

  const [services, setServices] = useState(openPopUp())
  const [value, setValue] = useState('')

  const dispatch = useDispatch()
  const open = useSelector(state => state.popUp.isOpen)

  useEffect(()=> {
    fetch('http://lkjhytre.pythonanywhere.com/services', {method: "GET", headers: {
        "token": "Hello world!",
    }})
    .then(res => res.json())
    .then(result=> {
      setServices(result.services)
    })
  }, [])

  const handleChange = (event) => {
    event.preventDefault()
    setValue(event.target.value);
  };

  return(
    <div>
      {(open)?(
      <div className={s.wrapper}>
        <div className={s.cooperationForm}>
          <button className={s.exitButton} onClick={()=> dispatch(openPopUp())}>
            <img src={exit} alt="" width={30}/>
          </button>
          <h1 className={s.title}>Форма регистрации поставщика</h1>
          <form onSubmit={handleSubmit(onSubmit)} className={s.coopForm}>
            <div className={s.inputBlock}>
              <TextField className={s.inputStr} label="Название организации" 
                {...register("orgName", {required: "*Поле обязательно к заполнению"})}
              />
              <div>
                {errors?.orgName && <p className={s.errorParagraph}>{errors?.orgName?.message}</p>}
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
