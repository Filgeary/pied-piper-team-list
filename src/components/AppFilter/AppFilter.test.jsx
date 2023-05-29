import React from 'react'
import { render, screen } from '@testing-library/react'
import AppFilter from './AppFilter'

describe('AppFilter', () => {
  it('should render Heading', () => {
    render(<AppFilter />)
    expect(screen.getByRole('heading', { name: /AppFilter/i })).toBeInTheDocument()
  })
})
