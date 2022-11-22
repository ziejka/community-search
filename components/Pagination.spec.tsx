import {Pagination} from './Pagination';
import {fireEvent, render, screen} from '@testing-library/react';

describe('', () => {
  it('should render pagination without error', () => {

    render(<Pagination numberOfRecords={1} currentPage={0} goToPage={jest.fn()} />)
    screen.getByRole('button', {name: /Previous page/i})
    screen.getByRole('button', {name: /Next page/i})
    screen.getByText('1 / 1')
  })

  it('should disable previous button on first page', () => {
    render(<Pagination numberOfRecords={1} currentPage={0} goToPage={jest.fn()} />)
    expect(screen.getByRole('button', {name: /Previous page/i})).toBeDisabled()
  })

  it('should disable next button on last page', () => {
    render(<Pagination numberOfRecords={100} currentPage={9} goToPage={jest.fn()} />)
    expect(screen.getByRole('button', {name: /Next page/i})).toBeDisabled()
  })

  it('should call gotToPage method for next page', () => {
    const goToPageMock = jest.fn()
    render(<Pagination numberOfRecords={100} currentPage={1} goToPage={goToPageMock} />)

    fireEvent.click(screen.getByRole('button', {name: /Next page/i}))
    expect(goToPageMock).toBeCalledWith(2)
  })

  it('should call gotToPage method for previous page', () => {
    const goToPageMock = jest.fn()
    render(<Pagination numberOfRecords={100} currentPage={1} goToPage={goToPageMock} />)

    fireEvent.click(screen.getByRole('button', {name: /Previous page/i}))
    expect(goToPageMock).toBeCalledWith(0)
  })
})