import { render, screen } from '@testing-library/react'
import React from 'react'
import App from './App'

describe('App', () => {
  it('should render Heading', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /react app/i })).toBeInTheDocument()
  })
})
