import classnames from 'classnames/bind'
import { truncate } from 'lodash-es'
import React, { Component } from 'react'
import styles from './EmployeesListItem.module.css'

const cn = classnames.bind(styles)

class EmployeesListItem extends Component {
  state = {
    isPromotioned: false,
    isLiked: false,
  }

  handleToggleIsPromotioned = () => {
    this.setState(prevState => {
      return { isPromotioned: !prevState.isPromotioned }
    })
  }

  handleToggleIsLiked = () => {
    this.setState(prevState => {
      return { isLiked: !prevState.isLiked }
    })
  }

  render() {
    const { id, fullName, salary, onDeleteEmployee } = this.props
    const { isPromotioned, isLiked } = this.state

    return (
      <div className={styles.wrapper}>
        <li className={'list-group-item d-flex justify-content-between align-items-center'}>
          <span
            className={cn('list-group-item-label', { [styles.promotion]: isPromotioned })}
            title='Toggle Like'
            onClick={this.handleToggleIsLiked}
          >
            {fullName}
            {' / '}
            <small className='fst-italic fw-light'>
              <mark>id: {truncate(String(id), { length: 15 })}</mark>
            </small>
          </span>
          <input
            type='text'
            className={cn('list-group-item-input', { [styles.promotion]: isPromotioned })}
            defaultValue={`${salary}$`}
          />

          <div className='d-flex justify-content-center align-items-center'>
            <button
              type='button'
              className='btn-award btn-sm'
              title='Toggle Promotion'
              onClick={this.handleToggleIsPromotioned}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill={isPromotioned ? '#e09f3e' : '#bbb'}
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
                fill='#e5383b'
                viewBox='0 0 16 16'
              >
                <path d='M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z' />
              </svg>
            </button>

            <i className={cn(styles.btnStar, 'btn-sm', { [styles.btnStarLike]: isLiked })}>
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
}

export default EmployeesListItem
