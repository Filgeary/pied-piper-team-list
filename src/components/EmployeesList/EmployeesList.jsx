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
    <section
      data-testid='employeesList'
      className='m-0 p-0'
    >
      <h2 className='visually-hidden'>Employees List</h2>

      <ul className='p-0'>
        {employees?.length ? (
          employees.map(employee => {
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
          })
        ) : (
          <h3 className='text-center fst-italic'>Nobody here!</h3>
        )}
      </ul>
    </section>
  )
}

export default EmployeesList
