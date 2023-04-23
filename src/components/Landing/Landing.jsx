import s from './Landing.module.scss'
import Header from '../Header/Header'
import FirstScreen from '../FirstScreen/FirstScreen'
import Cooperation from '../Сooperation/Сooperation'
import Application from '../Application/Application'
import CooperationForm from '../CooperationForm/CooperationForm'
import LoginForm from '../LoginForm/LoginForm'


export default function Landing() {
  return (
    <div className={s.landing}>
        <Header isProfile={true}/>
        <FirstScreen/>
        <Cooperation/>
        <Application/>
        <CooperationForm/>
        <LoginForm/>
    </div>
  )
}
