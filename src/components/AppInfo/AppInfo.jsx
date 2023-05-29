import React from 'react'
import styles from './AppInfo.module.css'

const AppInfo = () => {
  return (
    <section className={styles.wrapper}>
      <h1 className='text-center mb-4'>Staff Accounting at company NextReact</h1>
      <h4 className='fw-normal fst-italic'>Total Employees: 77</h4>
      <h4 className='fw-normal fst-italic'>Employees on promotion: 55</h4>
    </section>
  )
}

export default AppInfo
