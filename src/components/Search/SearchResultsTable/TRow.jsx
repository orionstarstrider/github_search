import React from 'react'
import s from './SearchResultsTable.module.scss'

const TRow = ({ cells }) => <tr className={ s.row }>{ cells }</tr>

export default TRow