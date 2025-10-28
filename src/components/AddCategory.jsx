import { useState } from "react"

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState('')
  const onInputChange = (e) => {
    setInputValue( e.target.value)
  }
  const onSubmit = (e) => { 
    e.preventDefault()
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <input 
          type="text"
          placeholder="add Category" 
          value={ inputValue }
          onChange={onInputChange}
        />
      </form>
    </>
  )
}