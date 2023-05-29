import React from 'react'
import { render, screen } from '@testing-library/react'
import EmployeesList from './EmployeesList'

describe('EmployeesList', () => {
  it('should render Heading', () => {
    render(<EmployeesList />)
    expect(screen.getByRole('heading', { name: /EmployeesList/i })).toBeInTheDocument()
  })
})
