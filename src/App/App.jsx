import React from 'react'
import AppFilter from '../components/AppFilter'
import AppInfo from '../components/AppInfo'
import EmployeesAddForm from '../components/EmployeesAddForm'
import EmployeesList from '../components/EmployeesList'
import SearchPanel from '../components/SearchPanel'
// import styles from './App.module.css'

const App = () => {
  const employeesData = [
    { id: 1, fullName: 'Adam Smit', salary: 700, isPromotioned: false },
    { id: 2, fullName: 'Emily Adams', salary: 1500, isPromotioned: true },
    { id: 3, fullName: 'Tom Fox', salary: 2500, isPromotioned: false },
  ]

  return (
    <main className='container-lg d-flex flex-column p-4 gap-5'>
      <AppInfo />

      <section
        style={{
          padding: '0 30px',
          borderRadius: '0px',
          borderLeft: '4px solid tomato',
        }}
        className='d-flex flex-column gap-3'
      >
        <h4>Search & Filters</h4>
        <SearchPanel />
        <AppFilter />
      </section>

      <EmployeesList employees={employeesData} />
      <EmployeesAddForm />
    </main>
  )
}

export default App
