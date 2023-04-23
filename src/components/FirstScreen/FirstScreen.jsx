import s from './FirstScreen.module.scss'

export default function FirstScreen() {
  return (
    <div className={s.wrapper} id='about'>
      <div className={s.firstScreen}>
        <div className='container'> 
          <div className={s.content}>
            <h1 className={s.title}>О нас</h1>
            <p className={s.text}>Мы предлагаем цифровую среду для взаимодействия между заказчиками, подрядчиками и субподрядчиками. Мы стремимся обеспечить автоматизацию сбора полного пакета документов и заполнения документов, а также истребование/предоставление необходимых документов от/для заказчика, подрядчика и субподрядчика.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
