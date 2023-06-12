import { render, screen } from '@testing-library/react'
import React from 'react'
import Footer from './Footer'

describe('Footer', () => {
  it('should render text', () => {
    render(<Footer />)
    expect(screen.getByText(/react fun demo project/i)).toBeInTheDocument()
  })
})
