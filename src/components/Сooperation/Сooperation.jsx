import s from './Cooperation.module.scss'
import coop from '../../assets/cooperation.png'

export default function Cooperation() {
  return (
    <div className='container'>
      <div className={s.cooperation}>
        <div className={s.content}>
          <h1 className={s.title}>Сотрудничество</h1>
          <p className={s.text}>Наша компания работает с крупными государственными заказами и участвует в развитии инфраструктуры страны. 
          Мы приглашаем поставщиков принять участие в реализации данных проектов.</p>
          <button className={s.button}>Подать заявку</button>
        </div>
        <div className={s.imageBlock}>
          <img src={coop} alt="Cooperation" className={s.image}/>
        </div>
      </div>
    </div>
  )
}
