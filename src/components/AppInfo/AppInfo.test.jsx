import { render, screen, within } from '@testing-library/react'
import React from 'react'
import { _employeesData } from '../../../_fixtures/_employeesData'
import AppInfo from './AppInfo'

describe('AppInfo', () => {
  it('should render initial static data', () => {
    render(<AppInfo employees={_employeesData} />)

    // heading
    expect(screen.getByRole('heading', { name: /silicon|valley|crew/i })).toBeInTheDocument()
    // logo image
    expect(screen.getByRole('img', { name: /pied piper as logo/i })).toBeInTheDocument()

    // total
    const view = screen.getByText(/total employees:/i)
    within(view).getByText(/4/i)

    // rewarded
    const view2 = screen.getByText(/rewarded:/i)
    within(view2).getByText(/2/i)

    // promotioned
    const view3 = screen.getByText(/promotioned:/i)
    within(view3).getByText(/2/i)
  })
})
