import React from 'react'
import AppFilter from '../components/AppFilter'
import AppInfo from '../components/AppInfo'
import EmployeesListItem from '../components/EmployeesListItem'
import SearchPanel from '../components/SearchPanel'
// import styles from './App.module.css'

const App = () => {
  return (
    <main className='container-lg d-flex flex-column p-4 gap-4'>
      <AppInfo />

      <section
        style={{ border: '4px solid #ccc' }}
        className='d-flex flex-column gap-3'
      >
        <SearchPanel />
        <AppFilter />
      </section>

      <section>
        <EmployeesListItem />
        <EmployeesListItem />
        <EmployeesListItem />
      </section>
    </main>
  )
}

export default App
