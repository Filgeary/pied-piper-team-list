import React from 'react'
import EmployeesListItem from '../EmployeesListItem'
// import styles from './EmployeesList.module.css'

const EmployeesList = ({ employees, onDeleteEmployee }) => {
  return (
    <ul className='p-0'>
      {employees.map(employee => {
        const { id, fullName, salary, isPromotioned } = employee

        return (
          <EmployeesListItem
            key={id}
            id={id}
            fullName={fullName}
            salary={salary}
            isPromotioned={isPromotioned}
            onDeleteEmployee={onDeleteEmployee}
          />
        )
      })}
    </ul>
  )
}

export default EmployeesList
