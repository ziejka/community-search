import * as React from 'react'
import {ChangeEventHandler, MouseEventHandler} from 'react'

type PropsType = {
  handleRequest: (value: string) => void
}

const SearchBar: React.FC<PropsType> = ({handleRequest}) => {
  const [value, setValue] = React.useState('')
  const handleOnChange: ChangeEventHandler<HTMLInputElement> = React.useCallback((event) => {
    setValue(event.target.value)
  }, [])

  const handleOnClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    handleRequest(value)
  }

  return (
    <div className="flex gap-3 mx-auto justify-center" >
      <input placeholder="Search community name e.g. Becca"
             className="w-1/3 rounded-full border border-cyan-500 px-6 py-3" type="text" onChange={handleOnChange}
             value={value} />
      <button className="rounded-full  border px-6 py-3 bg-cyan-500 hover:bg-cyan-400 transition-all"
              onClick={handleOnClick} >Search
      </button >
    </div >)
}

export default React.memo(SearchBar)