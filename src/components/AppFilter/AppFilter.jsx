import cn from 'classnames'
import React from 'react'
// import styles from './AppFilter.module.css'

const AppFilter = ({ filterStatus, onSetFilter }) => {
  return (
    <div className='btn-group'>
      <button
        type='button'
        className={cn('btn', {
          'btn-secondary': filterStatus === 'all',
          'btn-outline-secondary': filterStatus !== 'all',
        })}
        data-filter='all'
        onClick={evt => onSetFilter(evt.currentTarget.getAttribute('data-filter'))}
      >
        All Employees
      </button>

      <button
        type='button'
        className={cn('btn', {
          'btn-secondary': filterStatus === 'rewarded',
          'btn-outline-secondary': filterStatus !== 'rewarded',
        })}
        data-filter='rewarded'
        onClick={evt => onSetFilter(evt.currentTarget.getAttribute('data-filter'))}
      >
        Rewarded
      </button>

      <button
        type='button'
        className={cn('btn', {
          'btn-secondary': filterStatus === 'promotioned',
          'btn-outline-secondary': filterStatus !== 'promotioned',
        })}
        data-filter='promotioned'
        onClick={evt => onSetFilter(evt.currentTarget.getAttribute('data-filter'))}
      >
        Promotioned
      </button>

      <button
        type='button'
        className={cn('btn', {
          'btn-secondary': filterStatus === 'salary',
          'btn-outline-secondary': filterStatus !== 'salary',
        })}
        data-filter='salary'
        onClick={evt => onSetFilter(evt.currentTarget.getAttribute('data-filter'))}
      >
        Salary &gt; 1500$
      </button>
    </div>
  )
}

export default AppFilter
