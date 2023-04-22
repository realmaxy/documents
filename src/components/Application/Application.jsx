import s from './Application.module.scss'
import appStore from '../../assets/appStore.png'
import googlePlay from '../../assets/googlePlay.png'
import mobile from '../../assets/mobile.png'

export default function Application() {
  return (
    <div className='container'>
      <div className={s.application}>
        <div className={s.content}>
          <h1 className={s.title}>Приложение</h1>
          <p className={s.text}>Скачивайте наше приложение для управления проектом.</p>
          <div className={s.buttons}>
            <a href="#">
              <img src={appStore} alt="app store" width={250} />
            </a>
            <a href="#">
              <img src={googlePlay} alt="google play" width={250} />
            </a>
          </div>
        </div>
        <div className={s.image}>
          <img src={mobile} alt="" />
        </div>
      </div>
    </div>
  )
}
