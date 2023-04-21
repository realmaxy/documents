import s from './Landing.module.scss'
import Header from '../Header/Header'
import ScrollBox from '../ScrollBox/ScrollBox'

export default function Landing() {
  return (
    <div className={s.landing}>
        <Header/>
        <ScrollBox/>
    </div>
  )
}
