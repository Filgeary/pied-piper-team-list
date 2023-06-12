import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { _employeesData } from '../../../_fixtures/_employeesData'
import EmployeesListItem from './EmployeesListItem'

const employee = _employeesData[0]
const { id, fullName, salary, isPromotioned, isRewarded } = employee

describe('EmployeesListItem', () => {
  const init = () => {
    const onDeleteEmployeeMocked = jest.fn()
    const onToggleStatusRewardedMocked = jest.fn()
    const onToggleStatusPromotionedMocked = jest.fn()

    render(
      <EmployeesListItem
        id={id}
        fullName={fullName}
        salary={salary}
        isPromotioned={isPromotioned}
        isRewarded={isRewarded}
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

  it('should render mocked data with proper state', () => {
    init()
    expect(screen.getByTestId('employeesListItem')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /richard boss \/ id: 1/i })).toHaveClass('reward')
    const salary = screen.getByTestId('employeesListItemSalary')
    expect(salary).toHaveTextContent(/3000\$/i)
    expect(salary).toHaveClass('reward')
    expect(screen.getByRole('button', { name: /icon-reward/i })).toHaveClass('reward')
    expect(screen.getByRole('button', { name: /icon-trash/i })).toBeInTheDocument()
    expect(screen.getByTestId('iconChevron')).not.toHaveClass('iconChevronUpChecked')
  })

  it('should click on buttons and call handlers', () => {
    const {
      onDeleteEmployeeMocked,
      onToggleStatusPromotionedMocked,
      onToggleStatusRewardedMocked,
    } = init()

    userEvent.click(screen.getByRole('button', { name: /richard boss \/ id: 1/i }))
    expect(onToggleStatusPromotionedMocked).toBeCalled()

    userEvent.click(screen.getByRole('button', { name: /icon-reward/i }))
    expect(onToggleStatusRewardedMocked).toBeCalled()

    userEvent.click(screen.getByRole('button', { name: /icon-trash/i }))
    expect(onDeleteEmployeeMocked).toBeCalled()
  })
})
