import classnames from 'classnames/bind'
import React from 'react'
import styles from './EmployeesListItem.module.css'

const cn = classnames.bind(styles)

const EmployeesListItem = ({ fullName, salary, isPromotioned }) => {
  return (
    <div className={styles.wrapper}>
      <li className={'list-group-item d-flex justify-content-between align-items-center'}>
        <span className={cn('list-group-item-label', { [styles.promotion]: isPromotioned })}>
          {fullName}
        </span>
        <input
          type='text'
          className={cn('list-group-item-input', { [styles.promotion]: isPromotioned })}
          defaultValue={`${salary}$`}
        />

        <div className='d-flex justify-content-center align-items-center'>
          <button
            type='button'
            className='btn-cookie btn-sm'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='#e09f3e'
              viewBox='0 0 16 16'
            >
              <path d='M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z' />
            </svg>
          </button>

          <button
            type='button'
            className='btn-trash btn-sm'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='#e5383b'
              viewBox='0 0 16 16'
            >
              <path d='M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z' />
            </svg>
          </button>

          <i className='btn-star btn-sm'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='#ffd700'
              viewBox='0 0 16 16'
            >
              <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
            </svg>
          </i>
        </div>
      </li>
    </div>
  )
}

export default EmployeesListItem
