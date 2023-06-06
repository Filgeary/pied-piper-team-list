import classNames from 'classnames/bind'
import React, { Component } from 'react'
import AppFilter from '../components/AppFilter'
import AppInfo from '../components/AppInfo'
import EmployeesAddForm from '../components/EmployeesAddForm'
import EmployeesList from '../components/EmployeesList'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SearchPanel from '../components/SearchPanel'
import styles from './App.module.css'

const cn = classNames.bind(styles)

class App extends Component {
  state = {
    employees: [
      { id: 1, fullName: 'Richard Boss', salary: 3000, isRewarded: true, isPromotioned: false },
      {
        id: 2,
        fullName: 'Gilfoyle Architect',
        salary: 1501,
        isRewarded: true,
        isPromotioned: false,
      },
      { id: 3, fullName: 'Dinesh Javist', salary: 1500, isRewarded: false, isPromotioned: true },
      {
        id: 4,
        fullName: 'Bachman kinda-Startup-er',
        salary: 0,
        isRewarded: false,
        isPromotioned: true,
      },
    ],
    searchQuery: '',
  }

  handleDeleteEmployee = id => {
    this.setState(prevState => {
      return {
        employees: prevState.employees.filter(elem => elem.id !== id),
      }
    })
  }

  handleAddEmployee = newItem => {
    this.setState(prevState => {
      return { employees: prevState.employees.concat(newItem) }
    })
  }

  handleToggleStatusPromotioned = id => {
    this.setState(prevState => {
      return {
        employees: prevState.employees.map(item => {
          if (item.id === id) {
            return {
              ...item,
              isPromotioned: !item.isPromotioned,
            }
          }
          return item
        }),
      }
    })
  }

  handleToggleStatusRewarded = id => {
    this.setState(prevState => {
      return {
        employees: prevState.employees.map(item => {
          if (item.id === id) {
            return {
              ...item,
              isRewarded: !item.isRewarded,
            }
          }
          return item
        }),
      }
    })
  }

  handleChangeSearchInput = searchQuery => {
    this.setState({ searchQuery: searchQuery.trim() })
  }

  showDataBySearchQuery = (data, query) => {
    return data.filter(elem => elem.fullName.toLowerCase().includes(query.toLowerCase()))
  }

  render() {
    const { employees, searchQuery } = this.state
    const visibleData = this.showDataBySearchQuery(employees, searchQuery)

    return (
      <>
        <Header />
        <main className={cn(styles.main, 'container-lg d-flex flex-column p-4 gap-5 mb-4')}>
          <AppInfo employees={employees} />

          <section
            style={{
              padding: '0 30px',
              paddingRight: '0',
              borderRadius: '0px',
              borderLeft: '4px solid var(--app-accent-color)',
            }}
            className='d-flex flex-column gap-3'
          >
            <SearchPanel onChangeInput={this.handleChangeSearchInput} />
            <AppFilter />
          </section>

          <EmployeesList
            employees={visibleData}
            onDeleteEmployee={this.handleDeleteEmployee}
            onToggleStatusPromotioned={this.handleToggleStatusPromotioned}
            onToggleStatusRewarded={this.handleToggleStatusRewarded}
          />
          <EmployeesAddForm onAddEmployee={this.handleAddEmployee} />
        </main>
        <Footer />
      </>
    )
  }
}

export default App
