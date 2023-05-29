import React from 'react'
import { render, screen } from '@testing-library/react'
import SearchPanel from './SearchPanel'

describe('SearchPanel', () => {
  it('should render Heading', () => {
    render(<SearchPanel />)
    expect(screen.getByRole('heading', { name: /SearchPanel/i })).toBeInTheDocument()
  })
})
