import React from 'react'
// import styles from './AppFilter.module.css'

const AppFilter = () => {
  return (
    <div className='btn-group'>
      <button
        type='button'
        className='btn btn-secondary'
      >
        All Employees
      </button>
      <button
        type='button'
        className='btn btn-outline-secondary'
      >
        Rewarded
      </button>
      <button
        type='button'
        className='btn btn-outline-secondary'
      >
        Promotioned
      </button>
      <button
        type='button'
        className='btn btn-outline-secondary'
      >
        Salary &gt; 1500$
      </button>
    </div>
  )
}

export default AppFilter
