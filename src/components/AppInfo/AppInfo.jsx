import React from 'react'
import styles from './AppInfo.module.css'

const AppInfo = () => {
  return (
    <section className={styles.wrapper}>
      <h1 className='mb-4'>Staff Accounting at company NextReact</h1>
      <h3 className='fw-normal fst-italic'>Total Employees: 77</h3>
      <h3 className='fw-normal fst-italic'>Employees on promotion: 55</h3>
    </section>
  )
}

export default AppInfo
