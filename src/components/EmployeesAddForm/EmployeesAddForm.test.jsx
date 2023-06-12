import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import EmployeesAddForm from './EmployeesAddForm'

describe('EmployeesAddForm', () => {
  const init = () => {
    const onAddEmployeeMocked = jest.fn()
    render(<EmployeesAddForm onAddEmployee={onAddEmployeeMocked} />)

    return {
      onAddEmployeeMocked,
    }
  }

  it('should render Heading', () => {
    init()
    expect(screen.getByRole('heading', { name: /Add new Big Head !/i })).toBeInTheDocument()
  })

  it('should type in fullName input', () => {
    init()
    const input = screen.getByRole('textbox', { name: /full name/i })
    userEvent.type(input, 'Bob{space}Fox')
    expect(input).toHaveValue('Bob Fox')
  })

  it('should type in salary input', () => {
    init()
    const input = screen.getByRole('spinbutton', { name: /salary/i })
    userEvent.type(input, '1500')
    expect(input).toHaveValue(1500)
  })

  it('should not allow type letters in salary input', () => {
    init()
    const input = screen.getByRole('spinbutton', { name: /salary/i })
    userEvent.type(input, 'abc')
    expect(input).toHaveValue(null)
  })

  it('should submit form', () => {
    const { onAddEmployeeMocked } = init()
    const fullNameInput = screen.getByRole('textbox', { name: /full name/i })
    userEvent.type(fullNameInput, 'Bob{space}Fox')

    const salaryInput = screen.getByRole('spinbutton', { name: /salary/i })
    userEvent.type(salaryInput, '1500')

    const btnSubmit = screen.getByRole('button', { name: /add employee/i })
    userEvent.click(btnSubmit)

    expect(fullNameInput).toHaveFocus()
    expect(fullNameInput).toHaveValue('')
    expect(salaryInput).toHaveValue(null)
    expect(onAddEmployeeMocked).toHaveBeenCalledWith({
      id: 'employee-1',
      fullName: 'Bob Fox',
      salary: '1500',
      isRewarded: false,
      isPromotioned: false,
    })
  })
})
