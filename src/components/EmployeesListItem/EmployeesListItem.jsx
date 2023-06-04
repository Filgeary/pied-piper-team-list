import classnames from 'classnames/bind'
import { truncate } from 'lodash-es'
import React from 'react'
import styles from './EmployeesListItem.module.css'

const cn = classnames.bind(styles)

const EmployeesListItem = ({
  id,
  fullName,
  salary,
  isRewarded,
  isPromotioned,
  onDeleteEmployee,
  onToggleStatusRewarded,
  onToggleStatusPromotioned,
}) => {
  return (
    <div className={styles.wrapper}>
      <li className={'list-group-item d-flex justify-content-between align-items-center'}>
        <span
          className={cn('list-group-item-label', { [styles.reward]: isRewarded })}
          title='Toggle Promotion'
          onClick={() => onToggleStatusPromotioned(id)}
        >
          {fullName}
          {' / '}
          <small className='fst-italic fw-light'>
            <mark>id: {truncate(String(id), { length: 15 })}</mark>
          </small>
        </span>
        <input
          type='text'
          className={cn('list-group-item-input', { [styles.reward]: isRewarded })}
          defaultValue={`${salary}$`}
        />

        <div className='d-flex justify-content-center align-items-center'>
          <button
            type='button'
            className='btn-award btn-sm'
            title='Toggle Reward'
            onClick={() => onToggleStatusRewarded(id)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill={isRewarded ? 'var(--app-accent-color)' : '#bbb'}
              viewBox='0 0 16 16'
            >
              <path d='m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z' />
              <path d='M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z' />
            </svg>
          </button>

          <button
            type='button'
            title='Delete'
            className='btn-trash btn-sm'
            onClick={() => onDeleteEmployee(id)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='#d4343a'
              viewBox='0 0 16 16'
            >
              <path d='M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z' />
            </svg>
          </button>

          <i
            className={cn(styles.iconChevronUp, 'btn-sm', {
              [styles.iconChevronUpChecked]: isPromotioned,
            })}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='1em'
              height='1em'
              fill='currentColor'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z'
              />
              <path
                fillRule='evenodd'
                d='M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z'
              />
            </svg>
          </i>
        </div>
      </li>
    </div>
  )
}

export default EmployeesListItem
