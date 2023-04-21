import s from './FirstScreen.module.scss'

export default function FirstScreen() {
  return (
    <div className={s.wrapper}>
      <div className={s.firstScreen}>
        <div className='container'> 
          <div className={s.content}>
            <h1 className={s.title}>О нас</h1>
            <p className={s.text}>ООО «Северо-Кавказский Завод Металлоконструкций» — это современное производство широкого ассортимента дорожных знаков, барьерного ограждения, остановочных павильонов и ряда направлений продукции, способствующей безопасности дорожного движения.
            Сегодня на предприятии трудятся 250 сотрудников.
            Завод использует только высококачественные технологии производства. Производство осуществляется только на немецком и итальянском оборудовании.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
