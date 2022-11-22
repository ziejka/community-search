import React, {MouseEventHandler} from 'react';

type PropsType = {
  numberOfRecords: number
  currentPage: number
  goToPage: (page: number) => void
}

const ITEMS_ON_PAGE = 10
const addPage = (value: number) => ++value
const subtractPage = (value: number) => --value

export const Pagination: React.FC<PropsType> = ({numberOfRecords, currentPage, goToPage}) => {
  const numberOfPages = Math.ceil(numberOfRecords / ITEMS_ON_PAGE)
  const isFirsPage = currentPage === 0
  const isLastPage = currentPage === numberOfPages - 1
  const firstDisabled = isFirsPage ? 'opacity-30' : ''
  const nextDisabled = isLastPage ? 'opacity-30' : ''

  const handleClick: (fn: (value: number) => number) => MouseEventHandler<HTMLButtonElement> = (fn) => () => {
    goToPage(fn(currentPage))
  }

  return (
    <div className="flex gap-5 mb-5 justify-end" >
      <button onClick={handleClick(subtractPage)} disabled={isFirsPage}
              className={`px-4 py-2 rounded-full bg-sky-100 hover:bg-sky-200 transition-all ${firstDisabled}`} >Previous
        page
      </button >
      <p >{currentPage + 1} / {numberOfPages}</p >
      <button onClick={handleClick(addPage)}
              disabled={isLastPage}
              className={`hover:bg-sky-200 transition-all px-4 py-2 rounded-full bg-sky-100 ${nextDisabled}`} >Next page
      </button >
    </div >
  )
}