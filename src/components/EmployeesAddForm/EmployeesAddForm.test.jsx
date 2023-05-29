import React from 'react'
import { render, screen } from '@testing-library/react'
import EmployeesAddForm from './EmployeesAddForm'

describe('EmployeesAddForm', () => {
  it('should render Heading', () => {
    render(<EmployeesAddForm />)
    expect(screen.getByRole('heading', { name: /EmployeesAddForm/i })).toBeInTheDocument()
  })
})
