import React from 'react'
import styles from './EmployeesAddForm.module.css'

const EmployeesAddForm = () => {
  return (
    <section className={styles.wrapper}>
      <h3 className='mb-3'>Add new Employee</h3>
      <form className='d-flex gap-4'>
        <input
          type='text'
          className='form-control new-post-label'
          placeholder="What's his/her Full Name?"
        />
        <input
          type='number'
          className='form-control new-post-label'
          placeholder='Salary in $?'
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

export default EmployeesAddForm
