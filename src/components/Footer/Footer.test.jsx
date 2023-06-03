import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  it('should render Heading', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /Footer/i })).toBeInTheDocument()
  })
})
