import React from 'react'
import Header from '../../components/Header/Header'
import s from './Profile.module.scss'

export default function Profile() {
  return (  
    <div>
      <Header isProfile={false}/>
      <div className={s.profile}>
        <div className={s.wrapper}></div>
      </div>
    </div>
  ) 
}
