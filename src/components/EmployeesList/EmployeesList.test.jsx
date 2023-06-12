import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { _employeesData } from '../../../_fixtures/_employeesData'
import EmployeesList from './EmployeesList'

describe('EmployeesList', () => {
  const init = employeesProp => {
    const onDeleteEmployeeMocked = jest.fn()
    const onToggleStatusPromotionedMocked = jest.fn()
    const onToggleStatusRewardedMocked = jest.fn()

    render(
      <EmployeesList
        employees={employeesProp || _employeesData}
        onDeleteEmployee={onDeleteEmployeeMocked}
        onToggleStatusPromotioned={onToggleStatusPromotionedMocked}
        onToggleStatusRewarded={onToggleStatusRewardedMocked}
      />,
    )

    return {
      onDeleteEmployeeMocked,
      onToggleStatusPromotionedMocked,
      onToggleStatusRewardedMocked,
    }
  }

  it('should render Heading & 4 listItems', () => {
    init()
    expect(screen.getByRole('heading', { name: /Employees List/i })).toBeInTheDocument()
    expect(screen.getAllByTestId('employeesListItem')).toHaveLength(4)
  })

  it('should render fallback when employees array is empty', () => {
    init([])
    expect(screen.getByRole('heading', { name: /Nobody here!/i })).toBeInTheDocument()
  })

  it('should click on buttons and call handlers', () => {
    const {
      onDeleteEmployeeMocked,
      onToggleStatusPromotionedMocked,
      onToggleStatusRewardedMocked,
    } = init()

    userEvent.click(screen.getByRole('button', { name: /richard boss \/ id: 1/i }))
    expect(onToggleStatusPromotionedMocked).toBeCalled()

    userEvent.click(screen.getAllByRole('button', { name: /icon-reward/i })[0])
    expect(onToggleStatusRewardedMocked).toBeCalled()

    userEvent.click(screen.getAllByRole('button', { name: /icon-trash/i })[0])
    expect(onDeleteEmployeeMocked).toBeCalled()
  })
})
