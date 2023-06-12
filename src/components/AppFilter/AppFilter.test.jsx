import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import AppFilter from './AppFilter'

describe('AppFilter', () => {
  const init = filter => {
    const onSetFilterMocked = jest.fn()
    render(
      <AppFilter
        filterStatus={filter}
        onSetFilter={onSetFilterMocked}
      />,
    )

    return {
      onSetFilterMocked,
    }
  }

  it('should render default filter `all` and click on filter `rewarded`', () => {
    const { onSetFilterMocked } = init('all')

    expect(screen.getByRole('button', { name: /all employees/i })).toHaveClass('btn-secondary')
    userEvent.click(screen.getByRole('button', { name: /rewarded/i }))
    expect(onSetFilterMocked).toBeCalledWith('rewarded')
  })

  it('should render filter `rewarded` and click on filter `promotioned`', () => {
    const { onSetFilterMocked } = init('rewarded')

    expect(screen.getByRole('button', { name: /rewarded/i })).toHaveClass('btn-secondary')
    userEvent.click(screen.getByRole('button', { name: /promotioned/i }))
    expect(onSetFilterMocked).toBeCalledWith('promotioned')
  })

  it('should render filter `promotioned` and click on filter `salaryMore1500`', () => {
    const { onSetFilterMocked } = init('promotioned')

    expect(screen.getByRole('button', { name: /promotioned/i })).toHaveClass('btn-secondary')
    userEvent.click(screen.getByRole('button', { name: /salary > 1500\$/i }))
    expect(onSetFilterMocked).toBeCalledWith('salaryMore1500')
  })

  it('should render filter `salaryMore1500` and click on filter `all`', () => {
    const { onSetFilterMocked } = init('salaryMore1500')

    expect(screen.getByRole('button', { name: /salary > 1500\$/i })).toHaveClass('btn-secondary')
    userEvent.click(screen.getByRole('button', { name: /all employees/i }))
    expect(onSetFilterMocked).toBeCalledWith('all')
  })
})
