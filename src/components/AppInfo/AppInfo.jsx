import React from 'react'
import logo from '../../assets/logo.webp'
import styles from './AppInfo.module.css'

const AppInfo = ({ employees }) => {
  const total = employees.length
  const rewardedCount = employees.filter(elem => elem.isRewarded).length
  const promotionedCount = employees.filter(elem => elem.isPromotioned).length

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.h1}>Amazing Crew at company</h1>
      <h5 className='mb-2 fw-normal fst-italic'>
        Total Employees: <span className={styles.counter}>{total}</span>
      </h5>
      <h5 className='fw-normal fst-italic'>
        Rewarded: <span className={styles.counter}>{rewardedCount}</span>
      </h5>
      <h5 className='fw-normal fst-italic'>
        Promotioned: <span className={styles.counter}>{promotionedCount}</span>
      </h5>
      <img
        src={logo}
        className={styles.logo}
        alt='logo'
      />
    </section>
  )
}

export default AppInfo
