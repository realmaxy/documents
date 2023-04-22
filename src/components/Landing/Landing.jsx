import s from './Landing.module.scss'
import Header from '../Header/Header'
import FirstScreen from '../FirstScreen/FirstScreen'
import Cooperation from '../Сooperation/Сooperation'
import Application from '../Application/Application'

export default function Landing() {
  return (
    <div className={s.landing}>
        <Header/>
        <FirstScreen/>
        <Cooperation/>
        <Application/>
    </div>
  )
}
