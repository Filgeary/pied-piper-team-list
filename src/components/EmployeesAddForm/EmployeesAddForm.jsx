import { uniqueId } from 'lodash-es'
import React, { Component } from 'react'
import styles from './EmployeesAddForm.module.css'

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
      <section className={styles.wrapper}>
        <h3 className='mb-3'>Add new Big Head !</h3>
        <form
          className='d-flex gap-4'
          onSubmit={this.handleSubmit}
        >
          <input
            type='text'
            name='fullName'
            className='form-control new-post-label'
            placeholder='Full Name'
            value={fullName}
            ref={this.inputFullNameRef}
            onChange={this.handleChangeInput}
          />
          <input
            type='number'
            name='salary'
            className='form-control new-post-label'
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
