import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import SearchPanel from './SearchPanel'

describe('SearchPanel', () => {
  const init = () => {
    const onChangeInputMocked = jest.fn()
    render(<SearchPanel onChangeInput={onChangeInputMocked} />)
    return {
      onChangeInputMocked,
    }
  }

  it('should render search input', () => {
    init()
    expect(screen.getByRole('textbox', { name: /search/i })).toBeInTheDocument()
  })

  it('should type in search input', () => {
    const { onChangeInputMocked } = init()

    const searchInput = screen.getByRole('textbox', { name: /search/i })
    userEvent.type(searchInput, 'qwe')
    expect(searchInput).toHaveValue('qwe')
    expect(onChangeInputMocked).toBeCalledTimes(3)
  })

  it('should delete chars', () => {
    const { onChangeInputMocked } = init()

    const searchInput = screen.getByRole('textbox', { name: /search/i })
    userEvent.type(searchInput, 'qwe{backspace}{backspace}{backspace}')
    expect(searchInput).toHaveValue('')
    expect(onChangeInputMocked).toBeCalledTimes(6)
  })
})
