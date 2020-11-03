import React from 'react'
import s from './Content.module.scss'

const Content = ({ children }) =>
    <main className={ s.content }>
        { children }
    </main>

export default Content