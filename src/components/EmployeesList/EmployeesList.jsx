import React from 'react'
import EmployeesListItem from '../EmployeesListItem'
// import styles from './EmployeesList.module.css'

const EmployeesList = ({
  employees,
  onDeleteEmployee,
  onToggleStatusPromotioned,
  onToggleStatusRewarded,
}) => {
  return (
    <ul className='p-0'>
      {employees.map(employee => {
        const { id, fullName, salary, isRewarded, isPromotioned } = employee

        return (
          <EmployeesListItem
            key={id}
            id={id}
            fullName={fullName}
            salary={salary}
            isRewarded={isRewarded}
            isPromotioned={isPromotioned}
            onDeleteEmployee={onDeleteEmployee}
            onToggleStatusPromotioned={onToggleStatusPromotioned}
            onToggleStatusRewarded={onToggleStatusRewarded}
          />
        )
      })}
    </ul>
  )
}

export default EmployeesList
