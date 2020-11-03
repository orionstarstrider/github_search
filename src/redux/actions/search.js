import { buildQuery, mapResults } from '../../api'

export const LOAD_RESULTS = 'LOAD_RESULTS'
export const RESULTS_LOADED = 'RESULTS_LOADED'
export const LOADING_ERROR = 'LOADING_ERROR'
export const SORT_RESULTS = 'SORT_RESULTS'

export const loadResults = searchParam => async dispatch => {
    dispatch({ type: LOAD_RESULTS })

    const url = buildQuery(searchParam)
    const response = await fetch(url).catch(error => dispatch(loadingError(error.message)))

    if (response.ok) {
        const { items } = await response.json()
        const resultsTable = mapResults(items)

        dispatch(resultsLoaded(resultsTable))
    } else {
        dispatch(loadingError(`Error ${response.status}`))
    }
}

export const loadingError = error => ({ type: LOADING_ERROR, error })

export const resultsLoaded = results => ({ type: RESULTS_LOADED, results })

export const sortResults = colName => ({ type: SORT_RESULTS, colName })
