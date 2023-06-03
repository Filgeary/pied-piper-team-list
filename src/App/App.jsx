import classNames from 'classnames/bind'
import React, { Component } from 'react'
import AppFilter from '../components/AppFilter'
import AppInfo from '../components/AppInfo'
import EmployeesAddForm from '../components/EmployeesAddForm'
import EmployeesList from '../components/EmployeesList'
import Header from '../components/Header'
import SearchPanel from '../components/SearchPanel'
import styles from './App.module.css'

const cn = classNames.bind(styles)

class App extends Component {
  state = {
    employeesData: [
      { id: 1, fullName: 'Richard Boss', salary: 3000, isRewarded: true },
      { id: 2, fullName: 'Gilfoyle Architect', salary: 1501, isRewarded: true },
      { id: 3, fullName: 'Dinesh Javist', salary: 1500, isRewarded: false },
      { id: 4, fullName: 'Bachman kinda-Startup-er', salary: 0, isRewarded: false },
    ],
  }

  handleDeleteEmployee = id => {
    this.setState(prevState => {
      return {
        employeesData: prevState.employeesData.filter(elem => elem.id !== id),
      }
    })
  }

  handleAddEmployee = newItem => {
    this.setState(prevState => {
      return { employeesData: prevState.employeesData.concat(newItem) }
    })
  }

  render() {
    const { employeesData } = this.state

    return (
      <>
        <Header />
        <main className={cn(styles.main, 'container-lg d-flex flex-column p-4 gap-5')}>
          <AppInfo />

          <section
            style={{
              padding: '0 30px',
              paddingRight: '0',
              borderRadius: '0px',
              borderLeft: '4px solid var(--app-accent-color)',
            }}
            className='d-flex flex-column gap-3'
          >
            <SearchPanel />
            <AppFilter />
          </section>

          <EmployeesList
            employees={employeesData}
            onDeleteEmployee={this.handleDeleteEmployee}
          />
          <EmployeesAddForm onAddEmployee={this.handleAddEmployee} />
        </main>
      </>
    )
  }
}

export default App
