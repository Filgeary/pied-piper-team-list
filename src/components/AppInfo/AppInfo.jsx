import React from 'react'
import logo from '../../assets/logo.webp'
import styles from './AppInfo.module.css'

const AppInfo = () => {
  return (
    <section className={styles.wrapper}>
      <h1 className='text-center mb-4'>Staff Accounting at company</h1>
      <h5 className='mb-2 fw-normal fst-italic'>
        Total Employees: <span className={styles.counter}>77</span>
      </h5>
      <h5 className='fw-normal fst-italic'>
        Rewarded: <span className={styles.counter}>55</span>
      </h5>
      <h5 className='fw-normal fst-italic'>
        Promotioned: <span className={styles.counter}>22</span>
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
