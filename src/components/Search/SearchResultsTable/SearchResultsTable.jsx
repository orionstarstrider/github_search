import React from 'react'
import THead from './THead'
import TRow from './TRow'
import s from './SearchResultsTable.module.scss'
import { model, visibleFields } from '../../../api'

const SearchResultsTable = ({ results }) => {
  if (!results) return <></>

  const mapToCells = rowData => {
    const { id } = rowData

    const cells = Object.entries(rowData).map(
      ([name, value]) => {
        const { isVisible, fieldWithLink } = model[name]

        if (isVisible) {
          const cellContent = fieldWithLink ? <a href={ rowData[fieldWithLink] } target="_blank" rel="noreferrer">{ value }</a> : value

          return <td className={ s.cell } key={ `${id}_${name}` }>{ cellContent }</td>
        }
      }
    )

    return cells
  }

  return (
    <div className={ s.wrapper }>
      <table className={ s.searchResultsTable }>
        <thead>
          <THead cols={ visibleFields } />
        </thead>
        <tbody>
          { results.map(rowData => <TRow cells={ mapToCells(rowData) } key={rowData.id} />) }
        </tbody>
      </table>
    </div>
  )
}

export default React.memo(SearchResultsTable)