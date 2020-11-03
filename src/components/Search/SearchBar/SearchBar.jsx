import React, { useState } from 'react'
import cn from 'classnames'
import s from './SearchBar.module.scss'

const SearchBar = ({ value, onSearch, onChange, resultsFound }) => {
  const [ isFocused, setFocus ] = useState(false)

  const inputHandlers = {
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    onChange
  }

  return (
    <form onSubmit={ e => e.preventDefault() }>
      <div className={ cn(s.search_bar, { [s.focused]: isFocused }, { [s.found]: resultsFound }) } >
        <input type="text" className={ s.search_input } value={ value } placeholder="Repository name" { ...inputHandlers } />
        <button className={ s.search_button } onClick={ onSearch }>Search</button>
      </div>
    </form>
  )
}

export default SearchBar