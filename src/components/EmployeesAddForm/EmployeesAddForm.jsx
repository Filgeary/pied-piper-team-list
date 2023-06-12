import classNames from 'classnames/bind'
import { uniqueId } from 'lodash-es'
import React, { Component } from 'react'
import styles from './EmployeesAddForm.module.css'

const cn = classNames.bind(styles)

class EmployeesAddForm extends Component {
  state = {
    fullName: '',
    salary: '',
  }

  inputFullNameRef = React.createRef()

  handleChangeInput = evt => {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleSubmit = evt => {
    evt.preventDefault()

    const { onAddEmployee } = this.props
    const { fullName, salary } = this.state
    if (!fullName || !salary) return

    const newItem = {
      id: uniqueId('employee-'),
      fullName: fullName.trim(),
      salary: salary.trim(),
      isRewarded: false,
      isPromotioned: false,
    }

    onAddEmployee(newItem)
    this.setState({ fullName: '', salary: '' })
    this.inputFullNameRef.current.focus()
  }

  render() {
    const { fullName, salary } = this.state

    return (
      <section
        data-testid='employeesAddForm'
        className={styles.wrapper}
      >
        <h2 className='mb-3 fs-3'>Add new Big Head !</h2>
        <form
          className={cn(styles.form, 'd-flex gap-4')}
          onSubmit={this.handleSubmit}
        >
          <input
            type='text'
            name='fullName'
            title='Full Name'
            className='form-control'
            placeholder='Full Name'
            value={fullName}
            ref={this.inputFullNameRef}
            onChange={this.handleChangeInput}
          />
          <input
            type='number'
            name='salary'
            title='Salary'
            className='form-control'
            placeholder='Salary in $'
            value={salary}
            onChange={this.handleChangeInput}
          />

          <button
            type='submit'
            style={{ minWidth: '25%' }}
            className='btn btn-success'
          >
            Add Employee
          </button>
        </form>
      </section>
    )
  }
}

export default EmployeesAddForm
