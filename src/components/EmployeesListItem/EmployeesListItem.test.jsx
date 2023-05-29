import React from 'react'
import { render, screen } from '@testing-library/react'
import EmployeesListItem from './EmployeesListItem'

describe('EmployeesListItem', () => {
  it('should render Heading', () => {
    render(<EmployeesListItem />)
    expect(screen.getByRole('heading', { name: /EmployeesListItem/i })).toBeInTheDocument()
  })
})
