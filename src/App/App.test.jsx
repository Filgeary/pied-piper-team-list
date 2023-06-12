import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { _employeesData } from '../../_fixtures/_employeesData'
import App from './App'

const init = () => render(<App employees={_employeesData} />)

describe('App', () => {
  it('should render components', () => {
    init()
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('appInfo')).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /search/i })).toBeInTheDocument()
    expect(screen.getByTestId('appFilter')).toBeInTheDocument()
    expect(screen.getByTestId('employeesList')).toBeInTheDocument()
    expect(screen.getByTestId('employeesAddForm')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })
})

describe('App Search', () => {
  it('should search employees', () => {
    init()
    userEvent.type(screen.getByRole('textbox', { name: /search/i }), 'boss')
    expect(screen.getAllByTestId('employeesListItem')).toHaveLength(1)
    expect(screen.getByRole('button', { name: /richard boss \/ id: 1/i })).toBeInTheDocument()
  })

  it('should show fallback when search nobody found', () => {
    init()
    userEvent.type(screen.getByRole('textbox', { name: /search/i }), 'qwe')
    expect(screen.getByRole('heading', { name: /Nobody here!/i })).toBeInTheDocument()
  })
})

describe('App Filter', () => {
  it('should show default filtered employees', () => {
    init()
    expect(screen.getByRole('button', { name: /all employees/i })).toHaveClass('btn-secondary')
    expect(screen.getAllByTestId('employeesListItem')).toHaveLength(4)
  })

  it('should filter by `rewarded`', () => {
    init()
    userEvent.click(screen.getByRole('button', { name: /rewarded/i }))
    expect(screen.getByRole('button', { name: /rewarded/i })).toHaveClass('btn-secondary')
    expect(screen.getAllByTestId('employeesListItem')).toHaveLength(2)
    expect(screen.getByRole('button', { name: /Richard Boss \/ id: 1/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Gilfoyle Architect \/ id: 2/i })).toBeInTheDocument()
  })

  it('should filter by `promotioned`', () => {
    init()
    userEvent.click(screen.getByRole('button', { name: /promotioned/i }))
    expect(screen.getByRole('button', { name: /promotioned/i })).toHaveClass('btn-secondary')
    expect(screen.getAllByTestId('employeesListItem')).toHaveLength(2)
    expect(screen.getByRole('button', { name: /Dinesh Javist \/ id: 3/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Bachman kinda-Startup-er \/ id: 4/i }),
    ).toBeInTheDocument()
  })

  it('should filter by `salaryMore1500`', () => {
    init()
    userEvent.click(screen.getByRole('button', { name: /salary > 1500\$/i }))
    expect(screen.getByRole('button', { name: /salary > 1500\$/i })).toHaveClass('btn-secondary')
    expect(screen.getAllByTestId('employeesListItem')).toHaveLength(2)
    expect(screen.getByRole('button', { name: /Richard Boss \/ id: 1/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Gilfoyle Architect \/ id: 2/i })).toBeInTheDocument()
  })
})

describe('App Form', () => {
  it('should add new employee, interact with it, and update certain data', () => {
    init()

    // add new employee
    userEvent.type(screen.getByRole('textbox', { name: /full name/i }), 'Bob{space}Fox')
    userEvent.type(screen.getByRole('spinbutton', { name: /salary/i }), '1500')
    userEvent.click(screen.getByRole('button', { name: /add employee/i }))

    expect(screen.getAllByTestId('employeesListItem')).toHaveLength(5)
    expect(screen.getByRole('button', { name: /Bob Fox \/ id: employee-1/i })).toBeInTheDocument()
    expect(screen.getByTestId('totalCount')).toHaveTextContent('5')

    // get recently added item
    const addedItem = screen.getAllByTestId('employeesListItem').at(-1)
    if (!addedItem) return

    // check promotion toggler
    userEvent.click(within(addedItem).getByRole('button', { name: /Bob Fox \/ id: employee-1/i }))
    expect(within(addedItem).getByTestId('iconChevron')).toHaveClass('iconChevronUpChecked')
    expect(screen.getByTestId('promotionedCount')).toHaveTextContent('3')

    // check reward toggler
    userEvent.click(within(addedItem).getByRole('button', { name: /icon-reward/i }))
    expect(within(addedItem).getByRole('button', { name: /icon-reward/i })).toHaveClass('reward')
    expect(
      within(addedItem).getByRole('button', { name: /Bob Fox \/ id: employee-1/i }),
    ).toHaveClass('reward')
    const salary = within(addedItem).getByTestId('employeesListItemSalary')
    expect(salary).toHaveTextContent(/1500\$/i)
    expect(salary).toHaveClass('reward')
    expect(screen.getByTestId('rewardedCount')).toHaveTextContent('3')

    // check delete button
    userEvent.click(within(addedItem).getByRole('button', { name: /icon-trash/i }))
    expect(
      screen.queryByRole('button', { name: /Bob Fox \/ id: employee-1/i }),
    ).not.toBeInTheDocument()
    expect(screen.getAllByTestId('employeesListItem')).toHaveLength(4)
    expect(screen.getByTestId('totalCount')).toHaveTextContent('4')
    expect(screen.getByTestId('promotionedCount')).toHaveTextContent('2')
    expect(screen.getByTestId('rewardedCount')).toHaveTextContent('2')
  })
})
