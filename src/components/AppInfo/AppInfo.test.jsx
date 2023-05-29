import { render, screen } from '@testing-library/react'
import React from 'react'
import AppInfo from './AppInfo'

describe('AppInfo', () => {
  it('should render Heading', () => {
    render(<AppInfo />)
    expect(
      screen.getByRole('heading', { name: /Staff Accounting at company NextReact/i }),
    ).toBeInTheDocument()
  })
})
