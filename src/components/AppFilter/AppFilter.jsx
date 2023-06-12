import React from 'react'
// import styles from './AppFilter.module.css'

const AppFilter = ({ filterStatus, onSetFilter }) => {
  const buttons = [
    { buttonName: 'all', label: 'All Employees' },
    { buttonName: 'rewarded', label: 'Rewarded' },
    { buttonName: 'promotioned', label: 'Promotioned' },
    { buttonName: 'salaryMore1500', label: 'Salary > 1500$' },
  ]

  return (
    <div
      data-testid='appFilter'
      className='btn-group flex-wrap'
    >
      {buttons.map(item => {
        const { buttonName, label } = item
        const isActive = filterStatus === buttonName
        const classes = isActive ? 'btn-secondary' : 'btn-outline-secondary'

        return (
          <button
            key={buttonName}
            type='button'
            className={`btn ${classes}`}
            onClick={() => onSetFilter(buttonName)}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}

export default AppFilter
