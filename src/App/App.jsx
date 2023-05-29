import React from 'react'
import AppFilter from '../components/AppFilter'
import AppInfo from '../components/AppInfo'
import EmployeesAddForm from '../components/EmployeesAddForm'
import EmployeesList from '../components/EmployeesList'
import SearchPanel from '../components/SearchPanel'
// import styles from './App.module.css'

const App = () => {
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

      <EmployeesList />
      <EmployeesAddForm />
    </main>
  )
}

export default App
