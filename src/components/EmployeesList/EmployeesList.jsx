import React from 'react'
import EmployeesListItem from '../EmployeesListItem'
// import styles from './EmployeesList.module.css'

const EmployeesList = ({ employees }) => {
  return (
    <ul className='p-0'>
      {employees.map(employee => {
        const { id, fullName, salary, isPromotioned } = employee

        return (
          <EmployeesListItem
            key={id}
            fullName={fullName}
            salary={salary}
            isPromotioned={isPromotioned}
          />
        )
      })}
    </ul>
  )
}

export default EmployeesList
