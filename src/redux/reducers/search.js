import {
  LOAD_RESULTS,
  RESULTS_LOADED,
  LOADING_ERROR,
  SORT_RESULTS
} from '../actions/search'
import { sortResults } from '../../api'

const initialState = {
  resultsLoading: false,
  error: null,
  results: null,
  sorting: null
}

const search = (state=initialState, action) => {
  switch(action.type) {
    case LOAD_RESULTS: {
      return {
        ...state,
        resultsLoading: true,
        error: '',
        results: [],
        sorting: null
      }
    }

    case RESULTS_LOADED: {
      const { results } = action

      return {
        ...state,
        resultsLoading: false,
        error: '',
        results,
        sorting: null
      }
    }

    case LOADING_ERROR: {
      const { error } = action

      return {
        ...state,
        resultsLoading: false,
        error,
        results: [],
        sorting: null
      }
    }

    case SORT_RESULTS: {
      const { colName } = action
      const { results, sorting } = state
      const isAscending = sorting ? !sorting.isAscending : true
      const sortedResults = sortResults(results, colName, isAscending)

      return {
        ...state,
        results: [ ...sortedResults],
        sorting: {
          colName,
          isAscending
        }
      }
    }

    default: {
      return {
        ...state
      }
    }
  }
}

export default search