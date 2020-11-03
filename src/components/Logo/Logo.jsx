import React from 'react'
import s from'./Logo.module.scss'

const Logo = () =>
    <div className={ s.logo }>
        <a href="/" title="Lib.re Bookstore">
            GITHBUB
            <span className={ s.suffix }>.search</span>
        </a>
    </div>

export default Logo