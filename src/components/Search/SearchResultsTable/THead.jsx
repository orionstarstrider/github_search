import React from 'react'
import { connect } from 'react-redux'
import cn from 'classnames'
import s from './SearchResultsTable.module.scss'
import { sortResults } from '../../../redux/actions/search'

const THead = ({ cols, sorting, sort }) => {
  const sortCaption = sorting && sorting.isAscending
    ? <span>&darr;</span>
    : <span>&uarr;</span>

  return (
    <tr className={ cn(s.head, s.row) }>
        { cols.map(({ title, name, isSortable }) => 
          <th
            className={ cn(s.cell, { [s.sortable]: isSortable }) }
            key={ name }
            onClick={ isSortable ? () => { sort(name) } : null }
          >
            { title }
            <span className={ s.sortArrow }>
              { sorting && sorting.colName === name && sortCaption }
            </span>
          </th>
        ) }
    </tr>
  )
}

const mapStateToProps = state => {
  const { search: { sorting } } = state

  return { sorting }
}

const mapDispatchToProps = dispatch => ({
  sort: colName => dispatch(sortResults(colName))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(THead)