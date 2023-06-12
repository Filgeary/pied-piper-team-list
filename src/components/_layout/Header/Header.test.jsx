import { render, screen } from '@testing-library/react'
import React from 'react'
import Header from './Header'

describe('Header', () => {
  it('should render bg-image', () => {
    render(<Header />)
    expect(screen.getByRole('img', { name: /pied-piper full team photo/i })).toBeInTheDocument()
  })
})
