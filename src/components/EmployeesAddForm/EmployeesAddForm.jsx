import React, { Component } from 'react'
import styles from './EmployeesAddForm.module.css'

class EmployeesAddForm extends Component {
  state = {
    fullName: '',
    salary: '',
  }

  handleChangeInput = evt => {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  render() {
    const { fullName, salary } = this.state

    return (
      <section className={styles.wrapper}>
        <h3 className='mb-3'>Add new Employee</h3>
        <form className='d-flex gap-4'>
          <input
            type='text'
            name='fullName'
            className='form-control new-post-label'
            placeholder="What's his/her Full Name?"
            value={fullName}
            onChange={this.handleChangeInput}
          />
          <input
            type='number'
            name='salary'
            className='form-control new-post-label'
            placeholder='Salary in $?'
            value={salary}
            onChange={this.handleChangeInput}
          />

          <button
            type='submit'
            style={{ minWidth: '25%' }}
            className='btn btn-primary'
          >
            Add Employee
          </button>
        </form>
      </section>
    )
  }
}

export default EmployeesAddForm
