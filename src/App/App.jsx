import classNames from 'classnames/bind'
import React, { Component } from 'react'
import AppFilter from '../components/AppFilter'
import AppInfo from '../components/AppInfo'
import EmployeesAddForm from '../components/EmployeesAddForm'
import EmployeesList from '../components/EmployeesList'
import SearchPanel from '../components/SearchPanel'
import Footer from '../components/_layout/Footer'
import Header from '../components/_layout/Header'
import { employeesData } from '../data/employeesData'
import styles from './App.module.css'

const cn = classNames.bind(styles)

class App extends Component {
  state = {
    employees: this.props.employees || employeesData,
    searchQuery: '',
    filterStatus: 'all',
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

  handleSetFilter = filterValue => {
    this.setState({ filterStatus: filterValue })
  }

  showEmployeesBySearchQuery = (data, query) => {
    return data.filter(elem => elem.fullName.toLowerCase().includes(query.toLowerCase()))
  }

  filterEmployees = (data, filter) => {
    switch (filter) {
      case 'all':
        return data
      case 'rewarded':
        return data.filter(elem => elem.isRewarded)
      case 'promotioned':
        return data.filter(elem => elem.isPromotioned)
      case 'salaryMore1500':
        return data.filter(elem => elem.salary > 1500)
      default:
        return data
    }
  }

  render() {
    const { employees, searchQuery, filterStatus } = this.state
    const visibleEmployees = this.filterEmployees(
      this.showEmployeesBySearchQuery(employees, searchQuery),
      filterStatus,
    )

    return (
      <>
        <Header />
        <main className={cn(styles.main, 'container-lg d-flex flex-column p-4 gap-5 mb-4')}>
          <h1 className='visually-hidden'>Pied-Piper Crew</h1>

          <AppInfo employees={employees} />

          <section className={cn(styles.searchWithFiltersWrapper, 'd-flex flex-column gap-3')}>
            <h2 className='visually-hidden'>Search With Filters</h2>

            <SearchPanel onChangeInput={this.handleChangeSearchInput} />
            <AppFilter
              filterStatus={filterStatus}
              onSetFilter={this.handleSetFilter}
            />
          </section>

          <EmployeesList
            employees={visibleEmployees}
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
