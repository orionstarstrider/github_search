import React, { useState } from 'react'
import { connect } from 'react-redux'
import { loadResults } from '../../redux/actions/search'
import SearchBar from './SearchBar'
import SearchResultsTable from './SearchResultsTable'

const Search = ({ runSearch, resultsLoading, results, error }) => {
  const [ value, setValue ] = useState('')

  const onChange = ({ target: { value } }) => setValue(value)

  const onSearch = () => {
    if (!value) return

    runSearch(value)
  }

  let resultsCaption = ''
  let resultsFound = false

  if (resultsLoading) {
    resultsCaption = <p>{ 'Loading...' }</p>
  } else if (error) {
    resultsCaption = <p>{ `Error! ${ error }` }</p>
  } else if (results) {
    if (results.length > 0) {
      resultsFound = true
      resultsCaption = <SearchResultsTable results={ results } />
    } else {
      resultsCaption = <p>{ 'No repositories found :(' }</p>
    }
  }

  return (
    <>
      <SearchBar value={ value } onSearch={ onSearch } onChange={ onChange } resultsFound={ resultsFound } />
      { resultsCaption }
    </>
  )
}

const mapStateToProps = state => {
  const { search: { resultsLoading, results } } = state

  return {
    resultsLoading,
    results
  }
}

const mapDispatchToProps = dispatch => ({
  runSearch: query => dispatch(loadResults(query))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Search))