import React from 'react'
import logo from '../../assets/logo.webp'
import styles from './AppInfo.module.css'

const AppInfo = ({ employees }) => {
  const total = employees.length
  const rewardedCount = employees.filter(elem => elem.isRewarded).length
  const promotionedCount = employees.filter(elem => elem.isPromotioned).length

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Silicon&nbsp;Valley&nbsp;Crew</h2>
      <div className='pt-2'>
        <p className={styles.textInfo}>
          Total Employees: <span className={styles.counter}>{total}</span>
        </p>
        <p className={styles.textInfo}>
          Rewarded: <span className={styles.counter}>{rewardedCount}</span>
        </p>
        <p className={styles.textInfo}>
          Promotioned: <span className={styles.counter}>{promotionedCount}</span>
        </p>
      </div>
      <img
        src={logo}
        className={styles.logo}
        alt='Pied Piper as logo'
      />
    </section>
  )
}

export default AppInfo
