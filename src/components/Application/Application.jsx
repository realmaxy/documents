import s from './Application.module.scss'
import appStore from '../../assets/appStore.png'
import googlePlay from '../../assets/googlePlay.png'
import mobile from '../../assets/mobile.png'
import mobileMob from '../../assets/mobileMob.png'
import logo from '../../assets/logo.png'

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
        <div className={s.imageBlock}>
          <img src={mobile} alt="mobile" className={s.image}/>
        </div>
        <div className={s.imageBlockMob}>
          <img src={mobileMob} alt="mobile" className={s.mobileMob}/>
          <img src={logo} className={s.logoMob}/>
          <div className={s.buttonsMob}>
            <a href="#">
              <img src={appStore} alt="app store" width={250} className={s.buttonImage}/>
            </a>
            <a href="#">
              <img src={googlePlay} alt="google play" width={250} className={s.buttonImage}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}